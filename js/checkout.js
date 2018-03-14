

let counterItems = document.querySelector('#counter-items');
// let eventCheckout = document.querySelector('#checkout');
// eventCheckout.addEventListener('click', getObjLocalStorage);
let json = getObjLocalStorage();//LLamando la inf almacenada en localStorage.
console.log(json);
cartProductPop(json);


function calculateTotal(array) {
  let priceTotal = 0;
  for (let product of array) {
    priceTotal += parseInt(product.price);
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
   <a href="checkout.html" class="btn btn-default">Ver carrito</a>
   <a id="checkout" href="checkout.html" class="btn btn-primary">Checkout</a>
 </div>
`;
  contentCart.innerHTML = templatePopComplet+templateCartBtn;


}//Fin de la función cartPop(array).



function payPal(total) {
  console.log(total);
  paypal.Button.render({

    env: 'sandbox', // sandbox | production

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
        return actions.payment.execute().then(function(data) {
            console.log(data);
            
            window.alert('Payment Complete!');
        });
    }

}, '#paypal-button-container');
  
}