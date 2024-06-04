// SPRITE DEMO START CODE

// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 600;

// Load Spritesheet (Clip Size: 567 x 556)
let spriteSheet = document.createElement("img");
spriteSheet.src = "imgs/robot-spritesheet.png";

// Animation Loop
requestAnimationFrame(animate);

function animate() {
  // LOGIC

  // DRAW
  ctx.clearRect(0, 0, cnv.width, cnv.height); // Clear Background

  ctx.drawImage(spriteSheet, 0, 0);

  // LOOP
  requestAnimationFrame(animate);
}
