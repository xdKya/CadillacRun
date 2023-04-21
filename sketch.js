var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player, game;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
}

//muda a imagem de fundo de tamanho , de acordo com a tela
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
