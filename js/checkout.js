let json = getObjLocalStorage();//LLamando la inf almacenada en localStorage.
console.log(json);


function calculateTotal(array) {
  let priceTotal = 0;
  for (let product of array) {
    priceTotal += product.price;
  }
  return priceTotal;
}

function getObjLocalStorage () {
let strProduct = localStorage.getItem('product');
let arrayProducts = strProduct.split("},{");
arrayProducts[0] = arrayProducts[0].substring(2);
let iEnd = arrayProducts.length-1;
arrayProducts[iEnd]= arrayProducts[iEnd].slice(0,-2);
let jsonProduc = JSON.parse(strProduct);//Arreglo obtenido de localStorage.
console.log(jsonProduc);
paintCheckout(jsonProduc);
//let total = calculateTotal(jsonProduc);
//paintTotal (total);
//console.log(total);
return jsonProduc

}//fin de función getObjLocalStorage()
/*
function paintTotal (total) {
  let tableResult = document.querySelector('#table-result');//Elemento al que se le pintará la cuenta los productos agregados.
  let templateResult = `<tr>
    <td>${total}</td>
  </tr>`
  tableResult.innerHTML = templateResult;
  console.log(total);
}
*/



function paintCheckout (array) {
  let tableCheck = document.querySelector('#table-checkout');//Elemento al que se le pintará la cuenta los productos agregados.
  let templateProduct = '';

  for (product of array) {
      templateProduct += `
      <tr>
        <th scope="row">${product.title}</th>
        <td>${product.price}</td>
      </tr>
        `;
  }

  //let total =4000;
  let total = calculateTotal(array);
  console.log(total);
  let strTotal = localStorage.setItem('total',total);

  let templateComplet = `
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
  ${templateProduct}
  <tr>
    <td></td>
    <td></td>
    <td>${total}</td>
  </tr>
  </tbody>
          `;

  tableCheck.innerHTML = templateComplet;
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
          return actions.payment.execute().then(function() {
              window.alert('Payment Complete!');
          });
      }

  }, '#paypal-button-container');
