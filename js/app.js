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

drawProducts(id, image, name, price, rating, sold, originalPrice);

}

//*Funcionamiento del carrito de compras*////

const arrayProductAdd = [];//Arreglo que guardará los productos de manera local.
const btnCheckout = document.querySelector('#checkout');
/*
window.onload = () => {
  btnCheckout.addEventListener('click', saveLocalS);//Guardando en localStorage cuando se da click en el botón checkout.
}
*/
/*////
addToCart(id,arrayProducts);//Sus parametros son id del product seleccionado y la data de todos los prductos.
removeFromCart(id,arrayProducts);//Sus parametros son id del product seleccionado y la data de todos los prductos.
/*////

function addToCart(id,arrayProducts) {
  for (var i = 0; i < 50; i++) {
    let idProduct = arrayProducts[i].id;//Recorriendo el id de la data de products para encontrar objeto del product.
    if (idProduct == id) {
      arrayProductAdd.push(arrayProducts[i]);//Si coincide, se agrega el objeto de información del producto al arreglo.
    }
  }
  increaseCounter();//Llamando función que incrementa contador.
  saveLocalS();//Guardando el producto en el carrito.
}//Fin de función addToCart(id)

function removeFromCart(id,arrayProducts) {
  for (var i = 0; i < 50; i++) {
    let idProduct = arrayProducts[i].id;//Recorriendo el id de la data de products para encontrar objeto del product.
    if (idProduct == id) {
      let indexArray = arrayProductAdd.indexOf( arrayProducts[i].id );
      arrayProductAdd.splice( indexArray, 1 );//Removiendo el objeto que sea igual al id que fue seleccionado.
    }
  }
  decreaseCounter();//Llamando función que decrementa contador.
  saveLocalS();//Actualizando los productos del carrito.
}//Fin de función removeFromCart()

function increaseCounter() {
  let tagCounter = document.querySelector("#counterItems");
  let counter = parseInt(tagCounter.innerText);
  counter = counter + 1;
  tagCounter.innerText =  counter.toString() + 'items'; //Agregando el nuevo valor al HTML.
}//Fin de función increaseCounter()

function decreaseCounter() {
  let tagCounter = document.querySelector("#counterItems");
  let counter = parseInt(tagCounter.innerText);
  counter = counter - 1;
  tagCounter.innerText =  counter.toString() + 'items'; //Agregando el nuevo valor al HTML.
}//Fin de función decreaseCounter()

function changeButtonStatus(arrayResults, button) {
//Necesito pasarle como parametro el id que este concatenado a la hora de introducir el template para esta vista.!
  let status = button.innerText.toLowerCase();//El status del botón en minúsculas.
  if (status == "ADD TO CART") {
    button.innerText = "REMOVE TO CART"
    addToCart( id, arrayResults )
  }else {
    button.innerText = "ADD TO CART";
    removeFromCart( id, arrayResults )
  }
}//Fin de función changeButtonStatus(button, id)

function saveLocalS () {
  let stringArray = JSON.stringify(arrayProductAdd)
  console.log(stringArray);
  localStorage.setItem('product', stringArray);
}//Fin de función saveLocalS().





//***************************************
const form = document.getElementById("search-form");
const searchThing = document.getElementById("search-keyword");
const containerProducts = document.getElementById('container-products');
let searchedForText;

const apiMercadolibre = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/users/307324513/`)
        .then(function(response) {
            response.json().then(function(result) {
                console.log(result);
        });
    })
        .catch(function(err) {
            console.log(err);
        });
};

apiMercadolibre();
//***************************************



// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     containerProducts.innerHTML="";
//     searchedForText=searchThing.value;
//    apiLoad();
// })

// const apiLoad = () => {
//     // fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLM/search?q=${searchedForText}` )
//     // fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/categories/MLA1246`)

//     .then(function(response) {
//             response.json().then(function(result) {
//                 console.log(result);
//                 paintItems (result);
//         });
//     })
//         .catch(function(err) {
//             console.log(err);
//         });
// };






// const paintItems = (result) => {


//     let containerProducts = document.getElementById('site-container');
//     let templateProducts = ``;

//      result.forEach((item) => {

//         const addres=item.address.state_name;
//          const image=item.thumbnail;
//         templateProducts += `<div class="col s12 m3">
//         <div class="card">
//             <div class="card-image">
//                 <img src="${image}">
//                 </div>
//             <div class="card-content">
//                 <h3 class="card-title">${item.title}</h3>
//                 <p>${item.price} MXN</p>
//             </div>
//             <div class="card-action">
//                 <button id="" class="btn waves-effect" type="" name="action">Agregar a carrito</button>
//             </div>
//         </div>
//     </div>`

// //console.log(available);

//      });

//      containerProducts.innerHTML = templateProducts;

// }
