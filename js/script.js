/**************************************************
Interactive Canvas
Sharon Ku

Here is a description of this template p5 project.

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
  x: 700,
  y: 500,
  // size
  width: 50,
  height: 50,
  // stroke
  strokeFill: 0,
  strokeWeight: 5,
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
  x: 700,
  y: 550,
  // size
  width: 50,
  height: 50,
  // stroke
  strokeFill: 0,
  strokeWeight: 5,
  // fill
  fill: {
    r: 255,
    g: 255,
    b: 255,
    alpha: 255,
  },
};

// Artwork
let artwork = {
  x: 50,
  y: 50,
  width: 600,
  height: 650,
  fill: 255,
  image: undefined,
};

// preload()
//
// Preload assets
function preload() {
  // Load artwork image
  artwork.image = loadImage(`assets/images/artwork.jpg`);
}

// setup()
//
// Create canvas, set no stroke
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
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
  // If current turn is an even number, update dropBox1 color
  if (currentTurn % 2 == 0) {
    dropBox1.fill.r = colorValue[0];
    dropBox1.fill.g = colorValue[1];
    dropBox1.fill.b = colorValue[2];
    dropBox1.fill.alpha = colorValue[3];
  }
  // Or else, if odd number, update dropBox2 color
  else {
    dropBox2.fill.r = colorValue[0];
    dropBox2.fill.g = colorValue[1];
    dropBox2.fill.b = colorValue[2];
    dropBox2.fill.alpha = colorValue[3];
  }

  // Add 1 to number of turns
  currentTurn++;
}
