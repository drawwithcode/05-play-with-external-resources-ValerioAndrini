var mySong;
var analyzer;
var myImage;
var colors = ['#E78380',
  '#B67BA2',
  '#4568DA',
  '#8072BB',
]

function preload() {
  mySong = loadSound("./assets/fade_alan_walker.mp3");
  myImage = loadImage("./assets/sfondo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(180);
  // Two lines of magic code. The "analyzer" is a sort of "function"
  // able to perform measurements on the song and give back values
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  var volume = 0;
  if (mouseX > width / 2) {
    //background(255,0,0);
    image(myImage, 0, 0, myImage.width, myImage.height);
    //background(0,255,0);
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
    // get the volume and remap it to a bigger value
    volume = analyzer.getLevel();
    volume = map(volume, 0, 1, 1, height / 5);
  } else {
    image(myImage, 0, 0, myImage.width, myImage.height);
    mySong.pause();
  }
  var j = 60
  var inc = 15;
  var inc2 = 15;
  //ellipse(width/2,height/2,400);
  for (var i = 0; i < 20; i++) {
    push();
    noStroke();
    fill(255, 255, 255, 50);
    rect(15 + inc, height, 10, -volume - inc / 2);
    inc += 60;
    pop();
  }
  for (var j = 0; j < 20; j++) {
    push();
    noStroke();
    fill(255, 255, 255, 50);
    rect(15 + inc2, height, 10, -volume - inc / 2);
    inc2 += 60;
    inc -= 60;
    pop();
  }
  // put drawing code here

  // for (var x = 25; x < width; x += 50) {
  //   for (var y = 25; y < width; y += 50) {
  //
  //     noStroke();
  //     fill(random(colors));
  //     ellipse(x, y, volume);
  //   }
  // }

  // translate(width / 2, height / 2);
  // for (var i= 0; i<10; i++) {
  //
  //   rect(0 + j,0, 50, -volume);
  //   j += 60;
  // }
  // push();
  // strokeWeight(2);
  // noFill();
  // ellipse(0,0, volume);
  // pop();
}
