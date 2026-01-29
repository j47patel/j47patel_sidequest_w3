const furButtons = [
  { x: 150, y: 450, w: 170, h: 80, label: "YELLOW" },
  { x: 325, y: 450, w: 170, h: 80, label: "BLACK" },
  { x: 500, y: 450, w: 170, h: 80, label: "BROWN" },
  { x: 675, y: 450, w: 170, h: 80, label: "WHITE" },
];

function drawFur() {
  background(245);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(34);
  text("Choose a Fur Colour", width / 2, 200);

  for (const btn of furButtons) drawGameButton(btn);

  cursor(furButtons.some(isHover) ? HAND : ARROW);
}

function furMousePressed() {
  for (const btn of furButtons) {
    if (isHover(btn)) {
      chosenFur = btn.label;
      currentScreen = "final";
    }
  }
}
