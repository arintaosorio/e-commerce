

let counterItems = document.querySelector('#counter-items');
let total= document.querySelector('#total');
// let eventCheckout = document.querySelector('#checkout');
// eventCheckout.addEventListener('click', getObjLocalStorage);
let json = getObjLocalStorage();//LLamando la inf almacenada en localStorage.
console.log(json);
cartProductPop(json);


function calculateTotal(array) {
  let priceTotal = 0;
  for (let product of array) {
    priceTotal += parseInt(product.price);
    total.innerText = '$' + priceTotal; 
  }
  console.log(priceTotal);
  let strTotal = localStorage.setItem('total',priceTotal);
  return priceTotal;
}//Fin de la función calculateTotal(array).

let templateOneProduct = '';
function getObjLocalStorage () {
let strProduct = localStorage.getItem('product');
let arrayProducts = strProduct.split("},{");
arrayProducts[0] = arrayProducts[0].substring(2);
let iEnd = arrayProducts.length-1;
arrayProducts[iEnd]= arrayProducts[iEnd].slice(0,-2);
let jsonProduc = JSON.parse(strProduct);//Arreglo obtenido de localStorage.
let total = calculateTotal(jsonProduc);
paintCheckout(jsonProduc);//Pintar la cuenta de los productos seleccionados.
counterItems.innerText = jsonProduc.length + ' items';

return jsonProduc
}//fin de función getObjLocalStorage()

function paintTotal () {
  let strTotal = localStorage.getItem('total');
  strTotal=parseInt(strTotal);
  console.log(strTotal);
  return drawCheckComplet(strTotal);
}//Fin de la función paintTotal()

function paintCheckout (array) {

  let templateOneProduct ='';
    for (product of array) {
      templateOneProduct += drawChekout(product);
    }
  let conteinerCheck = document.querySelector('#conteiner-check');
  let templateBill = paintTotal();
  conteinerCheck.innerHTML = templateOneProduct+templateBill;
}//fin de función paintCheckout(array).


//Llamando a la función que detonara el evento que preguntará la cantidad que de un producto se ha elegido.
let control = document.getElementsByClassName('control');
giveEventControl(control);

 function quantityProducts (quantity) {
   console.log(quantity);
 }//Fin de la función quantityProducts


function cartProductPop (array) {
  let contentCart = document.querySelector('#cart');
  let templatePopComplet = '';
  for (product of array) {

    templatePopComplet +=   cartPop(product);//Función que pinta en el carrito local.
    //console.log(templatePopComplet);
  }

  let templateCartBtn = `<div class="text-right">
  <a id="vaciar" class="btn btn-primary">Vaciar carrito</a>
 </div>
`;
  contentCart.innerHTML = templatePopComplet+templateCartBtn;


}//Fin de la función cartPop(array).



function payPal(total) {
  console.log(total);
  paypal.Button.render({

    env: 'sandbox', // sandbox | production


        style: {
            label: 'paypal',
            size:  'medium',    // small | medium | large | responsive
            shape: 'rect',     // pill | rect
            color: 'black',     // gold | blue | silver | black
            tagline: false    
        },

    // PayPal Client IDs - replace with your own
    // Create a PayPal app: https://developer.paypal.com/developer/applications/create
    client: {
        sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
        production: 'AdHnjwFAeSTLUjemTdVWMfo0P0kcfj6NXUorLoZk5qUWwGEuNvTTxpp6yimhrSoJ4zZK49oxQQnNMUOX'
    },

    // Show the buyer a 'Pay Now' button in the checkout flow
    commit: true,

    // payment() is called when the button is clicked
    payment: function(data, actions) {

        // Make a call to the REST api to create the payment
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: total, currency: 'MXN' }
                    }
                ]
            }
        });
    },

    // onAuthorize() is called when the buyer approves the payment
    onAuthorize: function(data, actions) {

      // Make a call to the REST api to execute the payment
      return actions.payment.execute().then(/*function(data) {
          console.log(data);
          window.alert('Payment Complete!');
          
          return data;
      }*/ getData);
     
      //console.log(data);
    printReceipt(data);
      
  }

}, '#paypal-button-container');
}


function getData(data) {
  console.log(data);
  printReceipt(data);
}

/* ---- Funcion para Comprobante de Pago de Paypal -----*/
function printReceipt(data) {
  console.log(data);

  // let containerPage = document.getElementById("conteiner-paypal");
  let templatePayPal = ``;

  let dataId = data.id;
  console.log(dataId);

  let dataCreateTime = data.create_time;
  console.log(dataCreateTime);

  let firstName =  data["payer"]["payer_info"].first_name;
  console.log(firstName);

  let lastName = data["payer"]["payer_info"].last_name;
  console.log(lastName);

  let state = data["payer"]["payer_info"]["billing_address"].state;
  console.log(state);

  let totalAmount = data.transactions[0]["amount"].total;
  console.log(totalAmount);

  let currency = data.transactions[0]["amount"].currency;
  console.log(currency);

  let approved = data.state;
  console.log(approved);
  
 
  
  templatePayPal = `<div class="sale-product">
  <h1>Comprobante de Pago</h1>
    <div style="font-size:15px">
      <em>No.de Transaccion:</em>
      <strong class="dataId" style="color:#FA7FA6"><span></span>${dataId}</strong>
    </div>
    <div style="font-size:15px">
      <em >Cantidad:</em>
      <strong class="price" style="color:#FA7FA6"><span>$</span>${totalAmount} ${currency}</strong>
    </div>
    <div style="font-size:15px">
      <em>Nombre:</em>
      <strong class="price" style="color:#FA7FA6"><span></span>${firstName} ${lastName}</strong>
    </div>
    <div style="font-size:15px">
      <em>Fecha y Lugar de transaccion:</em>
      <strong class="price"  style="color:#FA7FA6"><span></span>${dataCreateTime}</strong>
     <center> <strong class="price2" style="color:#FA7FA6"><span></span>${state}</strong></center>
    </div>
    <div>
    <strong class="price" style="color:#FA7FA6"><h2>${approved}</h2></strong>
    </div>
</div>
`;


// containerPage.innerHTML = templatePayPal;
let containerPage = document.getElementById("cont-table-complete");
 containerPage.innerHTML= "";
 let finalContainer = document.createElement("div");
 finalContainer.className = "col text-center";
 finalContainer.innerHTML = templatePayPal;
 containerPage.appendChild(finalContainer);
  
}