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

//Función que se ejecuta cuando se carga el tipo de data por categoria.
const giveEventBtn = (data) => {
  let btnCollection = document.getElementsByClassName('btnAddRemove');
  let tagBtn = Array.from(btnCollection);
  tagBtn.forEach(a => {
    let arrayResults = data.results;
    a.addEventListener('click', getStatusProduct(arrayResults) );
  })
}//Fin de función giveEventList(collection).

const getStatusProduct = (arrayResults, e) => {
  e.preventDefault();
  let tag = e.target;
  //let urlId = tag.innerText;
  //Necestio parasar como parametro al id que se va a concatenar
  // en el template!, para que pueda hacer la comparaqción la función
  // que se encuentra más adelante.
  changeButtonStatus(arrayResults, tag);//Función que
};//Fin de función getDetailsCharacters().
