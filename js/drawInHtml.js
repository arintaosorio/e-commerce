const drawProducts = (id, image, name, price, rating, sold, originalPrice,arrayProducts) => {
    console.log(arrayProducts);

  //   <h3>${product.title}</h3>
  let contentProducts = document.querySelector('#container-products');//Elemento al que se le pintará la cuenta los productos agregados.
  let templateProduct = '';
  for (var i = 0; i < 10; i++) {


        templateProduct += `  <div class="col-md-3 sale-product">
          <div class="owl-item active" style="width: 188px; margin-right: 0px;"><div>
          <div class="product-item">
          <div class="pi-img-wrapper">
          <img src=${image} class="img-responsive" alt=${name}>
          <div>
          <a href=${image} class="btn btn-default fancybox-button">Zoom</a>
          <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
          </div>
          </div>
          <h3><a href="#">${name}</a></h3>
          <div class="pi-price">${price}</div>
          <a data-id=${id} data-name=${name} data-image = ${image} data-price=${price} class="btn btn-default add2cart btnAddRemove">Add to cart</a>
          <div class="sticker sticker-sale"></div>
          </div>
          </div></div></div>
          `;
    }
   //console.log(templateProduct);
     contentProducts.innerHTML = templateProduct;
}//Fin de función drawProducts(array).


//drawProducts();
