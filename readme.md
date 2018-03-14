Readme
Este proyecto consiste en desarrollar una app e-commerce que sea SPA.
![Tienda online](./assets/imagesProductosData/ecommerce.jpg)
En este proyecto se aplican los siguientes conceptos.
-Templating
-Routing (URLs)(segundo alcance)
-DOM
-Patrón de arquitectura de software (MVC)
-En todo el código se utiliza ECMAScript v6
Desarrollo del proyecto:
1.- Se utilizó un template para la maqueta de la ecommerce, el cuál solo se modificó de acuerdo a las necesidades del proyecto.
2.- Se realizó un llamado a la API de mercadolibre con el metodo fetch,el cual nos regresa un json de todos los productos con los siguientes datos:nombre del producto, precio, id, e imagen, los cuáles iteramos para poderlos agregar a cada categoría del home por medio de DOM.
3.- Con la data obtenida de la api de mercadolibre se pintan de manera dinámica a través del DOM en las diversas categorías del home.
4.-Se utilizó la API de PayPal para el método de pago que se encuentra en la vista checkout, que es donde se muestran todos los productos a comprar, y una vez que se realiza el pago la api nos regresa un número de confirmación de pago con folio para poder rastrear la transacción.
5.-Como segundo alcance se desear implementar el routing de URLS para hacer más dinámica y rápida la página. 