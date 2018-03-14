// let json = getObjLocalStorage();//LLamando la inf almacenada en localStorage.
// console.log(json);


// function calculateTotal(array) {
//   let priceTotal = 0;
//   for (let product of array) {
//     priceTotal += product.price;
//   }
//   return priceTotal;
// }

// function getObjLocalStorage () {
// let strProduct = localStorage.getItem('product');
// let arrayProducts = strProduct.split("},{");
// arrayProducts[0] = arrayProducts[0].substring(2);
// let iEnd = arrayProducts.length-1;
// arrayProducts[iEnd]= arrayProducts[iEnd].slice(0,-2);
// let jsonProduc = JSON.parse(strProduct);//Arreglo obtenido de localStorage.
// console.log(jsonProduc);
// paintCheckout(jsonProduc);
// //let total = calculateTotal(jsonProduc);
// //paintTotal (total);
// //console.log(total);
// return jsonProduc

// }//fin de función getObjLocalStorage()
// /*
// function paintTotal (total) {
//   let tableResult = document.querySelector('#table-result');//Elemento al que se le pintará la cuenta los productos agregados.
//   let templateResult = `<tr>
//     <td>${total}</td>
//   </tr>`
//   tableResult.innerHTML = templateResult;
//   console.log(total);
// }
// */



function paintCheckout (array) {
  let tableCheck = document.getElementById('table-checkout');//Elemento al que se le pintará la cuenta los productos agregados.
  let priceTotal = document.getElementById('price-total');
  let templateProduct = '';

  for (product of array) {
      templateProduct += `
      <tr>
      <td class="goods-page-image">
      <a href="javascript:;"><img src="assets/pages/img/products/model3.jpg" alt="Berry Lace Dress"></a>
    </td>
    <td class="goods-page-description">
      <h3><a href="javascript:;">Cool green dress with red bell</a></h3>
      <p><strong>Item 1</strong> - Color: Green; Size: S</p>
      <em>More info is here</em>
    </td>
    <td class="goods-page-ref-no">
      javc2133
    </td>
    <td class="goods-page-quantity">
      <div class="product-quantity">
          <input id="product-quantity" type="text" value="1" readonly class="form-control input-sm">
      </div>
    </td>
    <td class="goods-page-price">
      <strong><span>$</span>47.00</strong>
    </td>
    <td class="goods-page-total">
      <strong><span>$</span>47.00</strong>
    </td>
    <td class="del-goods-col">
      <a class="del-goods" href="javascript:;">&nbsp;</a>
    </td>
  </tr>
        `;
  }


  //let total = 4000;
  let total = calculateTotal(array);
  console.log(total);
  let strTotal = localStorage.setItem('total',total);

  let templateComplet = `
 
  
  <ul>
    <li class="shopping-total-price">
      <em>Total</em>
      <strong class="price"><span>$</span>${total}</strong>
    </li>
  </ul>

          `;

  priceTotal.innerHTML = templateComplet;
}//fin de función paintCheckout(array).

let strTotal = localStorage.getItem('total');
strTotal=parseInt(strTotal);
console.log(strTotal);



  paypal.Button.render({

      env: 'sandbox', // sandbox | production

      // PayPal Client IDs - replace with your own
      // Create a PayPal app: https://developer.paypal.com/developer/applications/create
      client: {
          sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
          production: 'AXogq8X2C5u1kEiDR8P8KHsbQfS3YgiyxFd1Ovvjenv8nD-10pOhb4M9xOc_G6T1Adc3HKsdg5iEw1S9'
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
                          amount: { total: `${strTotal}`, currency: 'USD' }
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



function getData(data) {
  console.log(data);
  printReceipt(data);
}

function printReceipt(data) {
  console.log(data);
  let dataId = data.id;
  console.log(dataId);
  let firstName =  data["payer"]["payer_info"].first_name;
  console.log(firstName);
  let lastName = data["payer"]["payer_info"].last_name;
  console.log(lastName);
  let totalAmount = data.transactions[0]["amount"].total;
  console.log(totalAmount);
  let currency = data.transactions[0]["amount"].currency;
  console.log(totalAmount);
 
  let templateReceipt = ``;
  templateReceipt = `
 <h4>${dataId} </h4>
 <p>Nombre : ${firstName} ${lastName}<p>
 <h5> Cantidad total: </h5>
 <p>$${totalAmount} ${currency}</p>
`;

let containerPage = document.getElementById("cont-table-complete");
containerPage.innerHTML= "";
let finalContainer = document.createElement("div");
finalContainer.className = "col text-center";
finalContainer.innerHTML = templateReceipt;
containerPage.appendChild(finalContainer);
  
}