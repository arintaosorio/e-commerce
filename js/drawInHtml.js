
const drawProducts = (id, image, name, price, rating, sold, originalPrice,arrayProducts, templateProduct) => {
        templateProduct = `  <div class="col-md-3 sale-product">
          <div class="owl-item active" style="height: 280px;width: 188px; margin-right: 0px;"><div>
          <div class="product-item">
          <div class="pi-img-wrapper">
          <img src=${image} class="img-responsive" alt=${name}>
          <div>
          <a href=${image} class="btn btn-default fancybox-button">Zoom</a>
          <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
          </div>
          </div>
          <h3><a href="#">${name}</a></h3>
          <div class="pi-price">$ ${price} MXN</div>
          <a data-id=${id} data-name=${name} data-image = ${image} data-price=${price} class="btn btn-default add2cart btnAddRemove">Add to cart</a>
          </div>
          </div></div></div>
          `;
   return templateProduct
//     contentProducts.innerHTML = templateProduct;

}//Fin de función drawProducts(array).

const drawProductsHome = (imagen, nombre, precio) => {

     let templateProduct = `  <div class="col-md-3 sale-product">
        <div class="owl-item active"  style="height: 280px;width: 188px; margin-right: 0px;"><div>
        <div class="product-item">
        <div class="pi-img-wrapper">
        <img src=${imagen} class="img-responsive" style="height:150px;width: 100px;  alt=${nombre}>
        <div>
        <a href=${imagen} class="btn btn-default fancybox-button">Zoom</a>
        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">Ver</a>
        </div>
        </div>
        <h3><a href="#">${nombre}</a></h3>
        <div class="pi-price">${precio} MXN</div>
<a data-name=${nombre} data-image = ${imagen} data-price=${precio} class="btn btn-default add2cart btnAddRemove">Add to cart</a>
        <div class="sticker sticker-sale"></div>
        </div>
        </div></div></div>
        `;
    return templateProduct
}//Fin de función drawProducts(array).

//Template de Checkout.
let conteinerCheck = document.querySelector('#conteiner-check');

const drawChekout = (products) => {
  //let conteinerCheck = document.querySelector('#conteiner-check');
  let urlImg = products.url;
  let name = products.name;
  let id = products.id;
  let priceUnit = products.price;
  let wholesalePrice = products.price;//Ver como multiplicar
  let templateCheck = `<div class="table-wrapper-responsive">
  <table summary="Shopping cart">
  <tbody><tr>
  <th class="goods-page-image">Imagen del producto</th>
  <th class="goods-page-description">Descripción</th>
  <th class="goods-page-ref-no">No Ref</th>
  <th class="goods-page-quantity hidden">Cantidad</th>
  <th class="goods-page-price">Precio unitario</th>
  <th class="goods-page-total" colspan="2">Total</th>
  </tr>
  <tr>
  <td class="goods-page-image">
  <a href="javascript:;"><img src=${urlImg} alt=${name}></a>
  </td>
  <td class="goods-page-description">
  <em><strong>${name}</strong></em>
  </td>
  <td class="goods-page-ref-no">${id}
  </td>
  <td class="goods-page-quantity hidden">
  <div class="product-quantity">
  <div class="input-group bootstrap-touchspin input-group-sm"><span class="input-group-btn"><button class="btn quantity-down bootstrap-touchspin-down" type="button"><i class="fa fa-angle-down"></i></button></span><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span><input id="product-quantity" type="text" value="1" readonly="" class="form-control input-sm control" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span><span class="input-group-btn"><button class="btn quantity-up bootstrap-touchspin-up" type="button"><i class="fa fa-angle-up"></i></button></span></div>
  </div>
  </td>
  <td class="goods-page-price">
  <strong><span>$</span>${priceUnit} MXN</strong>
  </td>
  <td class="goods-page-total">
  <strong><span>$</span>${wholesalePrice} MXN</strong>
  </td>
  <td class="del-goods-col hidden">
  <a class="del-goods" href="javascript:;">&nbsp;</a>
  </td>
  </tr>
  </tbody></table>
  </div>
  `;
//Aquien necesito sumar para sacar el precio final es a wholesalePrice.
//conteinerCheck.innerHTML = templateCheck;
//console.log(templateCheck);
return templateCheck
//  drawCheckComplet(templateCheck);
}//Fin de la función drawChekout().

const drawCheckComplet = (subtotal) => {
  //let subtotal = 47.00;
  let save = (subtotal*0.05).toFixed(2);
  let total = subtotal - save;
  let templateTotal = `<div class="shopping-total">
    <ul>
      <li>
        <em>Sub total</em>
        <strong class="price"><span>$</span>${subtotal} MXN</strong>
      </li>
      <li>
        <em>Usted ahorro</em>
        <strong class="price"><span>-$</span>${save} MXN</strong>
      </li>
      <li class="shopping-total-price">
        <em>Total a pagar</em>
        <strong class="price"><span>$</span>${total} MXN</strong>
      </li>
    </ul>
  </div>
`;
//console.log(templateTotal);
payPal(total);
//conteinerCheck.innerHTML = templateTotal;
return templateTotal

}
//Ejecutando la función que pinta la tabla de precios.
//drawChekout();

const cartPop = (product) => {
  let image = product.url;
  let name = product.name;
  let price = product.price;
  let templateCartPop = `<ul class="scroller" style="height: 50px; overflow: hidden; width: auto;">
                <li>
                  <a href="#"><img src=${image} alt="Rolex Classic Watch" width="37" height="34"></a>
                  <span class="cart-content-count">x 1</span>
                  <strong><a href="#">${name}</a></strong>
                  <em>$ ${price}</em>
                  <a href="javascript:void(0);" class="del-goods hidden">&nbsp;</a>
                </li>
              </ul>
  `;
  return templateCartPop
}//Fin de la función cartPop (product).
