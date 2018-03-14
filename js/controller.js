
const giveEventTag = collection => {
  let tagCategory = Array.from(collection);
  tagCategory.forEach(a => {
    let textTag = a.innerText;
    a.addEventListener('click', getDetailsCharacters );
  })
}//Fin de función giveEventList(collection).

const getDetailsCharacters = e => {
  e.preventDefault();
  let tag = e.target;
  let urlId = tag.innerText;
  select(urlId);//Función que accede al endpoint de Mercado libre.
};//Fin de función getDetailsCharacters().


const giveEventBtn = (collection,arrayProducts) => {
  let list = Array.from(collection);
  list.forEach(li => {
    li.addEventListener('click', getInfBtn);
   })
}//Fin de función giveEventList(collection)
const getInfBtn = (e) => {
  e.preventDefault();
  let tag = e.target;
  //let textBtn = tag.innerText;
  let idSelected = tag.dataset.id;
  let name = tag.dataset.name;
  let image = tag.dataset.image;
  let price = tag.dataset.price;

  //console.log(idSelected);
  //console.log(textBtn);
  changeButtonStatus(idSelected, name, image, price, tag)

};//Fin de función getDetailsCharacters().

//Evento del botón que controla la cantidad de productos a comprar.
const giveEventControl = collection => {
  let tagCategory = Array.from(collection);
  tagCategory.forEach(input => {
  //  console.log(input);
    input.addEventListener('change', getDetailsQuantity );
  })
}//Fin de función giveEventList(collection).

const getDetailsQuantity = e => {
  e.preventDefault();
  let tag = e.target;
  console.log(tag);
  let quantity = tag.innerText;
  quantityProducts(quantity);//Función que accede al endpoint de Mercado libre.
};//Fin de función getDetailsCharacters().
