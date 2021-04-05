/**************************************************
Interactive Canvas
Sharon Ku

Here is a description of this template p5 project.
**************************************************/

"use strict";

// Count turn we are at
let currentTurn = 0;

let rectangle1;

let rect1 = {
  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
  x: 100,
  y: 100,
  width: 50,
  height: 50,
};

let rect2 = {
  fill: {
    r: 0,
    g: 255,
    b: 0,
  },
  x: 200,
  y: 100,
  width: 50,
  height: 50,
};

let dropBox1 = {
  x: 700,
  y: 500,
  width: 50,
  height: 50,
  fill: {
    r: 255,
    g: 255,
    b: 255,
  },
};

let dropBox2 = {
  x: 700,
  y: 550,
  width: 50,
  height: 50,
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

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  push();
  fill(artwork.fill);
  // artwork.y = height / 2 - artwork.height / 2;
  rect(artwork.x, artwork.y, artwork.width, artwork.height);
  pop();

  // Drop box 1
  push();
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);
  fill(dropBox1.fill.r, dropBox1.fill.g, dropBox1.fill.b);
  rect(dropBox1.x, dropBox1.y, dropBox1.width, dropBox1.height);
  pop();

  // Drop box 2
  push();
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);
  fill(dropBox2.fill.r, dropBox2.fill.g, dropBox2.fill.b);
  rect(dropBox2.x, dropBox2.y, dropBox2.width, dropBox2.height);
  pop();

  // Red rect1
  displayRect(rect1);

  // Green rect2
  displayRect(rect2);
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
  if (checkOverlap(rect1)) {
    // If current turn is an even number, update dropBox1 color
    if (currentTurn % 2 == 0) {
      dropBox1.fill = rect1.fill;
    }
    // Or else, if odd number, update dropBox2 color
    else {
      dropBox2.fill = rect1.fill;
    }
  } else if (checkOverlap(rect2)) {
    // If current turn is an even number, update dropBox1 color
    if (currentTurn % 2 == 0) {
      dropBox1.fill = rect2.fill;
    }
    // Or else, if odd number, update dropBox2 color
    else {
      dropBox2.fill = rect2.fill;
    }
  }
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
