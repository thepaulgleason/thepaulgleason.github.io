//database
(function(){
      // FIREBASE
  var config = {
    apiKey: "AIzaSyCZzcxxtq48xiWnjKu5AbtmqbZYD0VyIYI",
    authDomain: "focustomato.firebaseapp.com",
    databaseURL: "https://focustomato.firebaseio.com",
    projectId: "focustomato",
    storageBucket: "focustomato.appspot.com",
    messagingSenderId: "958241018007"
  };
  firebase.initializeApp(config);
  

  const preObject = document.getElementById('object');

  const dbRefObject = firebase.database().ref().child('object');

  dbRefObject.on('value', snap => console.log(snap.val()));




}());
  

