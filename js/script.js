/**************************************************
Color Playground
Sharon Ku

The goal is to try matching the colored squares together to learn more about colors!
**Note: some squares do not have a matching pair (tricky tricky!)

** Attributions **
Code for color picker from: https://www.youtube.com/watch?v=8fJ2xGq5e7s&ab_channel=geeknrd
"how to make an eyedropper tool in p5.js" by geeknrd
**************************************************/

"use strict";

// Count turn we are at
let currentTurn = 0;

// Stores RGBA value of color picker
let colorValue = undefined;

// Color picker
let colorPicker = {
  outsideDiameter: 60,
  insideDiameter: 55,
  strokeWeight: 7,
  outerStrokeFill: 0,
};

// Box 1 to drop color into
let dropBox1 = {
  // position
  x: 750,
  y: 470,
  // size
  width: 80,
  height: 80,
  // stroke
  strokeFill: 0,
  strokeWeight: 0,
  // fill
  fill: {
    r: 255,
    g: 255,
    b: 255,
    alpha: 255,
  },
};

// Box 2 to drop color into
let dropBox2 = {
  // position
  x: 750,
  y: 555,
  // size
  width: 80,
  height: 80,
  // stroke
  strokeFill: 0,
  strokeWeight: 0,
  // fill
  fill: {
    r: 255,
    g: 255,
    b: 255,
    alpha: 255,
  },
};

// Arrow
let arrow = undefined;
// Store arrow image
let arrowImage = undefined;
// Arrow positions
let arrowX = undefined;
let arrowY = undefined;
// Arrow will be positioned relative to this drop box
let dropBoxToPosition = undefined;

// Artwork
let artwork = {
  x: 50,
  y: 50,
  width: 600,
  height: 600,
  fill: 255,
  image: undefined,
};

// preload()
//
// Preload assets
function preload() {
  // Load artwork image
  artwork.image = loadImage(`assets/images/artwork.jpg`);
  // Load arrow image
  arrowImage = loadImage(`assets/images/arrow.png`);
}

// setup()
//
// Create canvas, set no stroke
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // Defined initlal arrow image positions
  arrowX = dropBox1.x + 70;
  arrowY = dropBox1.y;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  // Set bg color
  background(0);

  // Display artwork image
  push();
  image(artwork.image, artwork.x, artwork.y);
  pop();

  // Store RGBA color value of pixel in image
  colorValue = get(mouseX, mouseY);
  console.log(colorValue);

  // Display arrow image
  push();
  imageMode(CENTER);
  image(arrowImage, dropBox1.x + 70, dropBoxToPosition);
  pop();

  // console.log(colorValue);

  // Display color picker
  push();
  strokeWeight(colorPicker.strokeWeight);
  stroke(colorPicker.outerStrokeFill);
  noFill();
  ellipse(mouseX, mouseY, colorPicker.outsideDiameter);
  stroke(colorValue);
  noFill();
  ellipse(mouseX, mouseY, colorPicker.insideDiameter);
  pop();

  // Drop box 1
  drawDropBox(dropBox1);

  // Drop box 2
  drawDropBox(dropBox2);

  // // If current turn is an even number:
  // if (currentTurn % 2 == 0) {
  //   // Update dropBox1 color
  //   dropBox1.fill.r = colorValue[0];
  //   dropBox1.fill.g = colorValue[1];
  //   dropBox1.fill.b = colorValue[2];
  //   dropBox1.fill.alpha = colorValue[3];
  // }
  // // Or else, if odd number, update dropBox2 color
  // else {
  //   dropBox2.fill.r = colorValue[0];
  //   dropBox2.fill.g = colorValue[1];
  //   dropBox2.fill.b = colorValue[2];
  //   dropBox2.fill.alpha = colorValue[3];
  // }
}

// Draw dropboxes
function drawDropBox(dropBox) {
  push();
  rectMode(CENTER);
  stroke(dropBox.strokeFill);
  strokeWeight(dropBox.strokeWeight);
  fill(dropBox.fill.r, dropBox.fill.g, dropBox.fill.b);
  rect(dropBox.x, dropBox.y, dropBox.width, dropBox.height);
  pop();
}

function mouseReleased() {
  // If current turn is an even number:
  if (currentTurn % 2 == 0) {
    // Update dropBox1 color
    dropBox1.fill.r = colorValue[0];
    dropBox1.fill.g = colorValue[1];
    dropBox1.fill.b = colorValue[2];
    dropBox1.fill.alpha = colorValue[3];
    // Update arrow position
    dropBoxToPosition = dropBox2.y;
    // // Update strokeweight
    // dropBox1.strokeWeight = 5;
    // dropBox2.strokeWeight = 0;
    dropBox1.width = 80;
    dropBox1.height = 80;
    dropBox2.width = 90;
    dropBox2.height = 90;
  }
  // Or else, if odd number, update dropBox2 color
  else {
    dropBox2.fill.r = colorValue[0];
    dropBox2.fill.g = colorValue[1];
    dropBox2.fill.b = colorValue[2];
    dropBox2.fill.alpha = colorValue[3];
    // Update arrow position
    dropBoxToPosition = dropBox1.y;
    // // Update strokeweight
    // dropBox1.strokeWeight = 0;
    // dropBox2.strokeWeight = 5;
    dropBox1.width = 90;
    dropBox1.height = 90;
    dropBox2.width = 80;
    dropBox2.height = 80;
  }

  // Add 1 to number of turns
  currentTurn++;
}
