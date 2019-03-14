
const activityList = document.querySelector('#activity-list')

function renderUser(doc){
let li = document.createElement('li');
let activityName = document.createElement('span');
let totalFocusTimeWorked = document.createElement('span');

li.setAttribute('data-id', doc.id);
name.textContext = doc.data().userActivity;
totalFocusTimeWorked.textContent = doc.data().totalFocusTimeWorked;

li.appendChild(activityName);
li.appendChild(totalFocusTimeWorked);

activityList.appendChild(li);

}

db.collection('user').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderUser(doc);
  });;
})
  
  





  

