
db.collection("users").add({
  firstName: "Robert",
  last: "Paulson"
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});

  
  





  

