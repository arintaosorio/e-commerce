
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

let tag = document.querySelector('.category');
let textTag = tag.innerText;
console.log(textTag);
tag.addEventListener('click',select(textTag));
const select = (category) => {
    if (category == 'Makeup'){
        let search = 'MLM1248';
        endpoint = `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/categories/${search}`;
        apiProduct(endpoint);
    }if (category == 'Piel') {
        let search = 'MLM1253';
        endpoint = `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/categories/${search}`;
        apiProduct(endpoint);
    }if (category == 'Cabello') {
        let search = 'MLM1263';
        endpoint = `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/categories/${search}`;
        apiProduct(endpoint);
    }if (category == 'Higiene') {
        let search = 'MLM187663';
        endpoint = `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/categories/${search}`;
        apiProduct(endpoint);
    } 
  
// MLM1253 Cuidado de la Piel
// MLM1263 Cuidado del Cabello
// MLM187663 Higiene Personal
// MLM1248 Makeup
      
}


const apiProduct = (endpoint) =>{
    fetch(endpoint)
    .then(function(response) {
        response.json().then(function(result) {
            console.log(result);
    });
})
    .catch(function(err) {
        console.log(err);
    });

};

apiProduct();




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

