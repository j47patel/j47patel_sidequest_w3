const eyeButtons = [
  { x: 200, y: 450, w: 180, h: 80, label: "BLUE" },
  { x: 400, y: 450, w: 180, h: 80, label: "BLACK" },
  { x: 600, y: 450, w: 180, h: 80, label: "BROWN" },
];

function drawEyes() {
  background(220, 235, 255);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(34);
  text("Choose an Eye Colour", width / 2, 200);

  for (const btn of eyeButtons) drawGameButton(btn);

  cursor(eyeButtons.some(isHover) ? HAND : ARROW);
}

function eyesMousePressed() {
  for (const btn of eyeButtons) {
    if (isHover(btn)) {
      chosenEyes = btn.label;
      currentScreen = "fur";
    }
  }
}
