let backOut;
function preload(){
  backOut= loadFont('assets/BackOut.otf');
}

function setup() {
  let cnv = createCanvas(300, 150);
  let x = 0;
  let y = windowHeight - height;
  textFont(backOut);
  textSize(width / 3);
  fill(0)
  textAlign(CENTER, CENTER);

}

function draw() {
  background(233, 197, 118);
  let play = 'play me';
  let time = millis;
  // rotateX = (time/1000);
  text = (play, 0, 0);
}
