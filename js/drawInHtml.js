let contentProducts = document.getElementById('container-products');//Elemento al que se le pintará la cuenta los productos agregados.
let templateProduct = ``;
const drawProducts = (id, image, name, price, rating, sold, originalPrice, currency, chainText) => {

  console.log(name, price);
  
      templateProduct += `  
      
      <div class="col-md-4 sale-product">
        <div class="owl-item active" ><div>
        <div class="product-item">
        <div class="pi-img-wrapper">
        <center><img src=${image} class="img-responsive" alt=${name}></center>
        <div>
        <a href=${image} class="btn btn-default fancybox-button">Zoom</a>
        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
        </div>
        </div>
        <h3><a href="#">${chainText}</a></h3>
        <div  class="pi-price">$${price}${currency}</div>
        <a  data-product-id=${id} href="javascript:;" class="btn btn-default add2cart btnAddRemove">Add to cart</a>
        <div class="sticker sticker-sale"></div>
        </div>
        </div></div></div>
        `;

 
  
   //console.log(templateProduct);
     contentProducts.innerHTML = templateProduct;

}//Fin de función drawProducts(array).


//drawProducts();
//
const drawProductsHome = (imagen, nombre, precio) => {
//   <h3>${product.title}</h3>
let contentProducts = document.getElementById('container-products');//Elemento al que se le pintará la cuenta los productos agregados.
let templateProduct = '';
for (var i = 0; i < 10; i++) {
      templateProduct += `  <div class="col-md-3 sale-product">
        <div class="owl-item active" style="width: 188px; margin-right: 0px;"><div>
        <div class="product-item">
        <div class="pi-img-wrapper">
        <img src=${imagen} class="img-responsive" alt=${nombre}>
        <div>
        <a href=${imagen} class="btn btn-default fancybox-button">Zoom</a>
        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">Ver</a>
        </div>
        </div>
        <h3><a href="#">${nombre}</a></h3>
        <div class="pi-price">${precio}</div>
        <a  href="javascript:;" class="btn btn-default add2cart btnAddRemove">Añadir a carrito</a>
        <div class="sticker sticker-sale"></div>
        </div>
        </div></div></div>
        `;
  }}
 console.log(contentProducts    );
   contentProducts.innerHTML = templateProduct;