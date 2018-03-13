let tagCollection = document.getElementsByClassName('category');
giveEventTag(tagCollection);//Función que asigna evento click a cada enlace de categoria.

const showProducts = (arrayProducts) => {
console.log(arrayProducts[0]);
let id = arrayProducts[0].id;
let image = arrayProducts[0].thumbnail;
let name = arrayProducts[0].title;
let price = arrayProducts[0].price;
let originalPrice = arrayProducts[0].original_price;
let sold = arrayProducts[0].sold_quantity;
let rating = arrayProducts[0].reviews.rating_average;
console.log(image, name, price,originalPrice);

drawProducts(id, image, name, price, rating, sold, originalPrice, arrayProducts[0]);
let tagCollectionBtn = document.getElementsByClassName('btnAddRemove');
giveEventBtn(tagCollectionBtn, arrayProducts);//Función que asigna evento click a cada enlace de categoria.


}

//*Funcionamiento del carrito de compras*////

const arrayProductAdd = [];//Arreglo que guardará los productos de manera local.
const btnCheckout = document.querySelector('#checkout');
console.log(btnCheckout);
btnCheckout.addEventListener('click', saveLocalS);//Guardando el producto en el carrito.

function addToCart(id, objProduct) {
  arrayProductAdd.push(objProduct);//Si coincide, se agrega el objeto de información del producto al arreglo.
  increaseCounter();//Llamando función que incrementa contador.
}//Fin de función addToCart(id)

function removeFromCart(id, objProduct) {
  let indexArray = arrayProductAdd.indexOf( objProduct.id );
  arrayProductAdd.splice( indexArray, 1 );//Removiendo el objeto que sea igual al id que fue seleccionado.
  decreaseCounter();//Llamando función que decrementa contador.
}//Fin de función removeFromCart()

function increaseCounter() {
  let tagCounter = document.querySelector("#counterItems");
  let counter = parseInt(tagCounter.innerText);
  counter = counter + 1;
  tagCounter.innerText =  counter.toString() +' items'; //Agregando el nuevo valor al HTML.
}//Fin de función increaseCounter()

function decreaseCounter() {
  let tagCounter = document.querySelector("#counterItems");
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
console.log(objProduct);

//Necesito pasarle como parametro el id que este concatenado a la hora de introducir el template para esta vista.!
  let status = button.innerText;//El status del botón en minúsculas.
  console.log(status);
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
