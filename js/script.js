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

// Contains JSON file
let rectangle;

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
  },
};

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
  },
};

let artwork = {
  x: 50,
  y: 50,
  width: 600,
  height: 650,
  fill: 255,
};

let artworkImage = undefined;

// preload()
//
// Preload JSON file
function preload() {
  rectangle = loadJSON(`assets/data/rectangles.json`);

  artworkImage = loadImage(`assets/images/artwork.jpg`);
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
  background(0);

  // Display black area for artwork
  // push();
  // fill(artwork.fill);
  // // artwork.y = height / 2 - artwork.height / 2;
  // rect(artwork.x, artwork.y, artwork.width, artwork.height);
  // pop();

  // Display artwork image
  push();
  image(artworkImage, artwork.x, artwork.y);
  pop();

  // Display color picker
  push();
  strokeWeight(10);
  stroke(0);
  noFill();
  ellipse(mouseX, mouseY, 80);
  stroke(get(mouseX, mouseY));
  noFill();
  ellipse(mouseX, mouseY, 75);
  pop();

  // Drop box 1
  drawDropBox(dropBox1);

  // Drop box 2
  drawDropBox(dropBox2);

  let locationIndex = 0;
  // Property from specific rectangle in JSON file
  for (
    let i = 0;
    i < rectangle.rectangleProperties[locationIndex].rectangles.length;
    i++
  ) {
    let rectangleProperties =
      rectangle.rectangleProperties[locationIndex].rectangles[i];

    displayRect(rectangleProperties);

    if (checkOverlap(rectangleProperties)) {
      // If current turn is an even number, update dropBox1 color
      if (currentTurn % 2 == 0) {
        dropBox1.fill = rectangleProperties.fill;
      }
      // Or else, if odd number, update dropBox2 color
      else {
        dropBox2.fill = rectangleProperties.fill;
      }
    }
  }
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

// Display a rectangle using given arguments
function displayRect(rectangle) {
  push();
  rectMode(CENTER);
  fill(rectangle.fill.r, rectangle.fill.g, rectangle.fill.b);
  rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  pop();
}

function mouseDragged() {
  // // If mouse overlaps with rectangle, drag rectangle
  // if (
  //   mouseX > rect1.x - rect1.size / 2 &&
  //   mouseX < rect1.x + rect1.size / 2 &&
  //   mouseY > rect1.y - rect1.size / 2 &&
  //   mouseY < rect1.y + rect1.size / 2
  // ) {
  //   rect1.x = mouseX;
  //   rect1.y = mouseY;
  // }
}

function checkOverlap(rectangle) {
  if (
    mouseX > rectangle.x - rectangle.width / 2 &&
    mouseX < rectangle.x + rectangle.width / 2 &&
    mouseY > rectangle.y - rectangle.height / 2 &&
    mouseY < rectangle.y + rectangle.height / 2
  ) {
    return true;
  } else {
    return false;
  }
}

function mouseReleased() {
  // Add 1 to number of turns
  currentTurn++;

  // if (
  //   rect1.x < dropBox1.x + dropBox1.width / 2 &&
  //   rect1.x > dropBox1.x - dropBox1.width / 2 &&
  //   rect1.y < dropBox1.y + dropBox1.width / 2 &&
  //   rect1.y > dropBox1.x - dropBox1.width / 2
  // ) {
  //   dropBox1.fill = rect1.fill;
  // }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
