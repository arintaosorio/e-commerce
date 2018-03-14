//***************************************
const apiMercadolibre = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/users/307324513/`)
        .then(function(response) {
            response.json().then(function(result) {
//              console.log(result);
        });
    })
        .catch(function(err) {
            console.log(err);
        });
};

apiMercadolibre();
//***************************************


const select = (category) => {
    if (category == 'MAQUILLAJE'){
        let search = 'MLM1248';
        endpoint = `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLM/search?category=${search}`;
        apiProduct(endpoint);
    }if (category == 'PIEL') {
        let search = 'MLM1253';
        endpoint = `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLM/search?category=${search}`;
        apiProduct(endpoint);
    }if (category == 'CABELLO') {
        let search = 'MLM1263';
        endpoint = `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLM/search?category=${search}`;
        apiProduct(endpoint);
    }if (category == 'HIGIENE') {
        let search = 'MLM187663';
        endpoint = `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLM/search?category=${search}`;
        apiProduct(endpoint);
    }

}// Fin de la función select(category).


const apiProduct = (endpoint) => {
    fetch(endpoint)
    .then(function(response) {
        response.json().then(function(responseJSON) {
            showProducts(responseJSON.results);

            //giveEventBtn(responseJSON)
    });
})
    .catch(function(err) {
        console.log(err);
    });

};//Fin de la función apiProduct(endpoint).
