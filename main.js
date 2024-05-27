// SPRITE DEMO START CODE

// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 600;

// Load Image
let spriteSheet = document.createElement("img");
spriteSheet.src = "images/robot-spritesheet2.png";

// Sprite Sheet Data
// Clip Size: 567 x 556

let spriteStates = {
  idle: {
    w: 392,
    h: 98,
    frames: 10,
    frameX: 0,
    frameY: 0,
  },
  run: {
    w: 392,
    h: 98,
    frames: 8,
    frameX: 0,
    frameY: 1,
  },
  slide: {
    w: 392,
    h: 98,
    frames: 10,
    frameX: 0,
    frameY: 2,
  },
  jump: {
    w: 392,
    h: 98,
    frames: 10,
    frameX: 0,
    frameY: 3,
  },
};

let sprite = spriteStates.idle;

let player = {
  x: 50,
  y: 200,
  w: sprite.w,
  h: sprite.h,
  dy: 0,
  a: 0.5,
};

let gameFrame = 0;
let staggerFrames = 5;

let running = true;

// Animation Loop
requestAnimationFrame(animate);

function animate() {
  // UPDATE

  player.dy += player.a;
  player.y += player.dy;
  if (player.y + player.h > 400) {
    player.y = 400 - player.h;
    player.dy = 0;
  }

  if (gameFrame % staggerFrames === 0) {
    sprite.frameX++;
    if (sprite.frameX == sprite.frames) {
      sprite.frameX = 0;
    }
  }

  // DRAW
  ctx.clearRect(0, 0, cnv.width, cnv.height); // Clear Background

  ctx.drawImage(
    spriteSheet,
    sprite.frameX * sprite.w,
    sprite.frameY * sprite.h,
    sprite.w,
    sprite.h,
    player.x,
    player.y,
    player.w,
    player.h
  );

  // LOOP
  gameFrame++;
  requestAnimationFrame(animate);
}

// EVENTS
document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
  if (e.code == "ArrowUp" && running) {
    player.dy = -10;
    sprite = spriteStates.jump;
    running = false;
    setTimeout(backToRun, 833);
  } else if (e.code == "ArrowDown" && running) {
    sprite = spriteStates.slide;
    running = false;
    setTimeout(backToRun, 833);
  }
}

function backToRun() {
  sprite = spriteStates.run;
  running = true;
}
