//database
(function(){
      // FIREBASE
  

  const preObject = document.getElementById('object');

  const db = firebase.firestore();

  db.settings({timestampsInSnapshots: true});

  db.on('value', snap => console.log(snap.val()));




}());
  

