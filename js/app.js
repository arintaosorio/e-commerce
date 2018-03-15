let tagCollection = document.getElementsByClassName('category');
giveEventTag(tagCollection);//Función que asigna evento click a cada enlace de categoria.

let contentProducts = document.querySelector('#container-products');//Elemento al que se le pintará la cuenta los productos agregados.
let productInHtml = template => contentProducts.innerHTML = template;

const showProducts = (arrayProducts) => {
//console.log(arrayProducts[0]);
let templateProduct = '';
let templateComplet = '';
for (product of arrayProducts) {
  let id = product.id;
  let image = product.thumbnail;
  let name = product.title;
  let price = product.price;
  let originalPrice = product.original_price;
  let sold = product.sold_quantity;
  let rating = product.reviews.rating_average;
  templateComplet += drawProducts(id, image, name, price, rating, sold, originalPrice, arrayProducts, templateProduct);
}
//console.log(templateComplet);
productInHtml (templateComplet);


let tagCollectionBtn = document.getElementsByClassName('btnAddRemove');
giveEventBtn(tagCollectionBtn, arrayProducts);//Función que asigna evento click a cada enlace de categoria.
//console.log(image, name, price,originalPrice);



}

/*Funcionamiento del carrito de compras*/

const arrayProductAdd = [];//Arreglo que guardará los productos de manera local.

const btnCheckout = document.querySelector('#checkout');
console.log(btnCheckout);
btnCheckout.addEventListener('click', saveLocalS);//Guardando el producto en el carrito.

function addToCart(id, objProduct) {
  arrayProductAdd.push(objProduct);//Si coincide, se agrega el objeto de información del producto al arreglo.
  increaseCounter();//Llamando función que incrementa contador.
  console.log(arrayProductAdd);
  cartProductPop(arrayProductAdd);
  calculateTotal(arrayProductAdd);

}//Fin de función addToCart(id)

function removeFromCart(id, objProduct) {
  let indexArray = arrayProductAdd.indexOf( objProduct.id );
  arrayProductAdd.splice( indexArray, 1 );//Removiendo el objeto que sea igual al id que fue seleccionado.
  decreaseCounter();//Llamando función que decrementa contador.
  console.log(arrayProductAdd);
  cartProductPop(arrayProductAdd);
  calculateTotal(arrayProductAdd);

}//Fin de función removeFromCart()

function increaseCounter() {
  let tagCounter = document.querySelector("#counter-items");
  let counter = parseInt(tagCounter.innerText);
  counter = counter + 1;
  tagCounter.innerText =  counter.toString() +' items'; //Agregando el nuevo valor al HTML.
}//Fin de función increaseCounter()

function decreaseCounter() {
  let tagCounter = document.querySelector("#counter-items");
  let counter = parseInt(tagCounter.innerText);
  counter = counter - 1;
  tagCounter.innerText =  counter.toString() + 'items'; //Agregando el nuevo valor al HTML.
}//Fin de función decreaseCounter()

function changeButtonStatus(id, name, image, price, button) {
const objProduct = {
  id:id,
  name: name,
  url: image,
  price: price,
}
function calculateTotal(arrayProductAdd) {
  let total= document.querySelector('#total');  
  let priceTotal = 0;
  for (let product of array) {
    priceTotal += parseInt(product.price);
    total.innerText = '$' + priceTotal; 
  }
  console.log(priceTotal);
  let strTotal = localStorage.setItem('total',priceTotal);
  return priceTotal;
}
//console.log(objProduct);

//Necesito pasarle como parametro el id que este concatenado a la hora de introducir el template para esta vista.!
  let status = button.innerText;//El status del botón en minúsculas.
//  console.log(status);
  if (status == "ADD TO CART") {
    button.innerText = "REMOVE"
    addToCart( id, objProduct )
  }else {
    button.innerText = "ADD TO CART";
    removeFromCart( id, objProduct )
  }
}//Fin de función changeButtonStatus(button, id)

function saveLocalS () {
  let stringArray = JSON.stringify(arrayProductAdd)
  console.log(stringArray);
  localStorage.setItem('product', stringArray);
}//Fin de función saveLocalS().
//Función para que el carrito local sea visualizado.
function cartProductPop (array) {
  let contentCart = document.querySelector('#cart');
  let templatePopComplet = '';
  for (product of array) {
    templatePopComplet +=   cartPop(product);//Función que pinta en el carrito local.
  //  console.log(templatePopComplet);
  }

  let templateCartBtn = `    <div class="text-right">
        <a id="checkout" href="checkout.html" class="btn btn-primary">Checkout</a>
      </div>
`;
  contentCart.innerHTML = templatePopComplet+templateCartBtn;

}//Fin de la función cartPop(array).
