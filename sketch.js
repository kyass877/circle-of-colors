let cnv;
let d;
//let g;
let r,g,b;
function setup() {
  cnv = createCanvas(600, 600);
  cnv.mousePressed(changeColor); // attach listener for
  // canvas click only
  d = 10;
 // g = 100;
    r = random(255);
     g = random(255);
     b = random(255);
}

function draw() {
  background(r, g, b);
    fill("orange");
  ellipse(width / 2, height / 2, d, d);
}

// this function fires with any click anywhere
function mousePressed() {
    if ( d < 700){
  d = d + 50;
    } else {
        d = 10;
    }
}

// this function fires only when cnv is clicked
function changeColor() {
  g = random(0, 255);
}
var select = function(s) {
  return document.querySelector(s);
},
  icons = select('#icons'),
  button = select('.button'),
  buttonText = document.getElementById("button-text")

// Morph the Download icon into the Checkmark icon
var buttonTl = new TimelineMax({paused:true});
buttonTl.to('#download', 1, {
  morphSVG:{shape:'#checkmark'},
  ease:Elastic.easeInOut
})

// On button click, play the animation
button.addEventListener('click', function() {
  if (buttonTl.time() > 0) {
    buttonTl.reverse();
    
  } else {
    buttonTl.play(0);
  }
})

// On button click, swap out the button text
button.addEventListener('click', function() {  
  if (button.classList.contains("saved")) {
    button.classList.remove("saved");
    buttonText.innerHTML = "Download";
  } else {
    button.classList.add("saved");
    buttonText.innerHTML = "Saved!";
  }
}, false);