/* ++++++++++++ Initialize Firebase ++++++++++ */
function inicializarFirebase() {

    var config = {
        apiKey: "AIzaSyCwR9OlPt5Pa1AY_W8ag73arkSa_sZ8JZU",
        authDomain: "e-commer.firebaseapp.com",
        databaseURL: "https://e-commer.firebaseio.com",
        projectId: "e-commer",
        storageBucket: "e-commer.appspot.com",
        messagingSenderId: "988965089361"
      };
      firebase.initializeApp(config);
  }
  
  var provider = new firebase.auth.GoogleAuthProvider();
  
  /* ++++++++++++ Ingresa el Usuario por medio de Cuenta GMAIL ++++++++++ */
  $('#login').click(function() {
    firebase.auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result.user);
        saveDate(result.user);
        $('#login').hide();
        $('#photo').append("<img width='50px' src='" + result.user.photoURL + "''/>");
        $('#name').append(result.user.displayName);
        $('#email').append(result.user.email);
      })
  });
  
  /* ++++++++ Funcion guarda automaticamente al usuario en la BD en firebase (crea rama)+++++ */
  function saveDate(user) {
    var usuario = {
      uid: user.uid,
      nombre: user.displayName,
      email: user.email,
      foto: user.photoURL
    }
    firebase.database().ref("pruebas/" + user.uid)
      .set(usuario) //modifica la llave
      var usuarios = localStorage.getItem('usuario');
      console.log(JSON.parse(usuarios));

  }

  
  /* ++++++++++++ Carga pagina ++++++++++ */
  window.load = inicializar;
  
  function inicializar() {
  
    inicializarFirebase();
  
  }