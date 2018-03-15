/* ++++++++++++ Initialize Firebase ++++++++++ */
function inicializarFirebase() {

    var config = {
      apiKey: "AIzaSyC0Mm77qD91FvT1x4YWY_3NEtSx3Hkbh4c",
      authDomain: "pruebas-3d15a.firebaseapp.com",
      databaseURL: "https://pruebas-3d15a.firebaseio.com",
      projectId: "pruebas-3d15a",
      storageBucket: "pruebas-3d15a.appspot.com",
      messagingSenderId: "437883428230"
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
  
  }
  
  /* ++++++++++++ Carga pagina ++++++++++ */
  window.load = inicializar;
  
  function inicializar() {
  
    inicializarFirebase();
  
  }