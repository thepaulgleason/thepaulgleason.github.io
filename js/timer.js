//timer functionality code
//show this code if user is logged in.
//so we need to see if it is logged in


var running = false
var time = 25

=

function start(){
    status = true;
    document.getElementById("startBtn").disabled = true
    
}

function stop(){
    status = false;
    document.getElementById("startBtn").disabled = true;
}

functions reset(){
    status = false;
    time = 25;
}

function myTimer() {
  time--;
  var min = Math.floor(time/100/60);
  var sec = Math.floor(time/100);

if(min<10){
    min = "0" + min;
}
if(sec>=60){
    sec = sec % 60;
}
if (sec<10){
    sec = "0" + sec;
}
document.getElementById("timerLabel").innerHTML = min + ":" + sec + ":"

}

function n(n){
    return n > 9 ? "" + n: "0" + n;
}

