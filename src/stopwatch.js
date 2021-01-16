import "./stopwatchStyles.css";
//variables
var interval;
var started = false;
let counter = 0;
let time = 0;
let pastTimes = document.getElementById("pastTimes");
//function execution
setup();

//function definitions

function setup() {
  document.getElementById("timer").innerHTML = 0;
  startStop();
  resetWatch();
  recordTime();
}

function startStop() {
  //start/ stop functioning
  //on mouse hover, button color changes to 'cyan'.
  document
    .getElementById("togglestart")
    .addEventListener("mouseenter", function () {
      this.style.background = "cyan";
    });
  //if mouse moved out of button, color changes to default..
  document
    .getElementById("togglestart")
    .addEventListener("mouseleave", function () {
      this.style.background = "";
    });

  document.getElementById("togglestart").addEventListener("click", function () {
    if (started === false) {
      interval = setInterval(function () {
        counter++;
        time = counter / 100;
        document.getElementById("timer").innerHTML = time.toFixed(2);
      }, 10);
      started = true;
    } else {
      clearInterval(interval);
      started = false;
    }
  });
  // if 's' key is pressed on keyboard start/stop button works
  document.addEventListener("keypress", function (e) {
    if (e.key === "s") {
      document.getElementById("togglestart").click();
    }
  });
}

function resetWatch() {
  //on mouse hover, button color changes to 'cyan'.
  document.getElementById("reset").addEventListener("mouseenter", function () {
    this.style.background = "cyan";
  });
  //on mouse moved out of button, color changes to 'default'.
  document.getElementById("reset").addEventListener("mouseleave", function () {
    this.style.background = "";
  });
  //reset functioning
  document.getElementById("reset").addEventListener(
    "click",
    function () {
      clearInterval(interval);
      counter = 0;
      time = 0;
      started = false;
      document.getElementById("timer").innerHTML = 0;
      while (pastTimes.firstChild) {
        pastTimes.removeChild(pastTimes.firstChild);
      }
    },
    1000
  );
  //if 'r' is pressed on keyboard reset stopwatch gers reset.
  document.addEventListener("keypress", function (e) {
    if (e.key === "r") {
      document.getElementById("reset").click();
    }
  });
}

function recordTime() {
  //on mouse hover, button color changes to 'cyan'.
  document.getElementById("record").addEventListener("mouseenter", function () {
    this.style.background = "cyan";
  });
  //on mouse moved out of button, color changes to 'default'.
  document.getElementById("record").addEventListener("mouseleave", function () {
    this.style.background = "";
  });
  //time gets recorded.
  document.getElementById("record").addEventListener("click", function () {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(time.toFixed(2)));
    pastTimes.appendChild(li);
  });
  //if 't' is pressed on keyboard recording starts.
  document.addEventListener("keypress", function (e) {
    if (e.key === "t") {
      document.getElementById("record").click();
    }
  });
}
