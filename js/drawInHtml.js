const drawProducts = () => {
//  console.log(arrayProducts);

//   <h3>${product.title}</h3>
let contentProducts = document.querySelector('#container-products');//Elemento al que se le pintará la cuenta los productos agregados.
let templateProduct = '';
for (var i = 0; i < 50; i++) {
      templateProduct += `  <div class="col-md-3 sale-product">
        <div class="owl-item active" style="width: 188px; margin-right: 0px;"><div>
        <div class="product-item">
        <div class="pi-img-wrapper">
        <img src="assets/pages/img/products/model1.jpg" class="img-responsive" alt="Berry Lace Dress">
        <div>
        <a href="assets/pages/img/products/model1.jpg" class="btn btn-default fancybox-button">Zoom</a>
        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
        </div>
        </div>
        <h3><a href="#">Berry Lace Dress</a></h3>
        <div class="pi-price">$29.00</div>
        <a  href="javascript:;" class="btn btn-default add2cart btnAddRemove">Add to cart</a>
        <div class="sticker sticker-sale"></div>
        </div>
        </div></div></div>
        `;
  }
//  console.log(templateProduct);
   contentProducts.innerHTML = templateProduct;
}//Fin de función drawProducts(array).


drawProducts();
