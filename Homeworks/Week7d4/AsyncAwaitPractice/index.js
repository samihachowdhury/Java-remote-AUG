console.log("Hello world");

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();

  req.open("GET", "https://kevinrollins.com/helloclass/hello.php");

  req.onreadystatechange = function () {
    if (req.status == 200) {
      console.log("State changed");
      console.log(this);
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  };
  console.log("Before send:");
  console.log(req);
  req.send();
}

getFile(myDisplayer);


function makeBold(query) {
  query.style.fontWeight = "bold";
  // console.log(query);
}

function kevinDisplay(format) {
  let tee = document.getElementById("t1");
  format(tee);
}

kevinDisplay(makeBold);

// Change color

let button = document.querySelector("button");
let form = document.querySelector("form");
let requestText = document.getElementById("demo");

// Random integer from 0 to upperBound
function randomInt(upperBound) {
  return Math.floor(Math.random() * upperBound);
}

// Random RBG color
function randomColor() {
  return `rgb(${randomInt(255)},${randomInt(255)},${randomInt(255)})`;
}

function scDisplay(eventObject) {
  eventObject.preventDefault();
  newColor = randomColor();
  requestText.style.color = newColor;
  document.title = `w7d3; color: ${newColor}`;
}

form.addEventListener("submit", scDisplay);