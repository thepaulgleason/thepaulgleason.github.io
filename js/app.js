
//each time a new user is created:
//add db reference. then add a document

//get the name of the user from authentication and enter it in the name and last name field.
//add if the user has never been there before
//edit the data field if the user has been there before

//for now just assume authentication has already happened
//1. just deal with one user: me (Paul)
var currentUser = db.collection("users").where("firstName", "==", "Paul").where("lastName", "==", "Gleason");

//2. which activity is selected? create a button/ form to select which activity you are working on
//to the activityList document and list each activity in a table
//a. get to the subcollection the get document
db.collection("users").where("firstName", "==", "Paul").where("lastName", "==", "Gleason");.collection("activityList").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.get("activityName", "none"));
  });
});
//3. every 5 minutes, add to the time worked on the activity
//4. display how much time has been worked on for each activity

//install authenitcatiocd then



/*db.collection("users").add({
  firstName: "Robert",
  last: "Paulson"
})
db.collection("users").add
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
*/
  
  





  

