// Button object for return
const returnBtn = {
  x: 400, // center of canvas width = 800 / 2
  y: 600,
  w: 260,
  h: 90,
  label: "RETURN TO START",
};

// Your own drawGameButton copied here, exactly as in game.js
function drawGameButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();

  fill(hover ? color(180, 220, 255, 220) : color(200, 220, 255, 190));

  rect(x, y, w, h, 14);

  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// The draw function for the final screen
function drawFinal() {
  background(200, 255, 220);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("Congratulations!", width / 2, 220);

  textSize(22);
  text(
    `You created a ${chosenFur.toLowerCase()} ${chosenPet.toLowerCase()}
with ${chosenEyes.toLowerCase()} eyes.`,
    width / 2,
    300,
  );

  drawGameButton(returnBtn);

  cursor(isHover(returnBtn) ? HAND : ARROW);
}

// The mouse pressed handler for the final screen
function finalMousePressed() {
  if (isHover(returnBtn)) {
    chosenPet = null;
    chosenEyes = null;
    chosenFur = null;
    currentScreen = "start";
  }
}
