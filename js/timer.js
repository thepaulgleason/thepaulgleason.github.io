//timer functionality code
//show this code if user is logged in.
//so we need to see if it is logged in
//also automate this task: open visual studio, powershell, tomato-timer.com(or thepaulgleason.github.io/focusTomato when I got that running)

var minutes = 25;
var seconds = 0;
var myVar = setTimeout(myTimer, 1000);

//accept user input eventually
//for now just set time at 25 minutes

function myTimer() {
  if (seconds == 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
      document.getElementById("time").textContent.concat(n(minutes), ":", n(seconds));
  } else if (seconds == 0 && minutes == 0) {
      window.clearTimeout(myVar);
  } else {
      seconds -= 1;
       document.getElementById("time").textContent.concat(n(minutes), ":", n(seconds));
  }
  
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function n(n){
    return n > 9 ? "" + n: "0" + n;
}

