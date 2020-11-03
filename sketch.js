var snake1, snake2;
var snakeImage;
var middle_border;
var top_border;
var bottom_border
var right_side_border
var left_side_border
var maze_object1;
var maze_object2;
var maze_object3;
var maze_object4;
var maze_object5;
var maze_object6;
var maze_object7;
var maze_object8;
var maze_object9;
var maze_object10;
var maze_object11;
var maze_object12;
var maze_object13;
var maze_object14;
var maze_object15;
var maze_object16;
var maze_object17;
var maze_object18;
var maze_object19;
var maze_object20;

var dummyCoinLeft;

var snakeGroup = createGroup();
var coinsGroup = createGroup();
var mazeGroup = createGroup();

function setup() {
  createCanvas(2000,1000);
  snakeImage = loadImage("snake.jpeg");
}

function draw() {
  background(0,0,0);  

  text(mouseX + "," + mouseY, mouseX, mouseY);

  snake1 = createSprite(200,300);
  snake2 = createSprite(1200,300);

  snake1.addImage(snakeImage);
  snake1.scale = 0.3;
  snake2.addImage(snakeImage);
  snake2.scale = 0.3;

  middle_border = createSprite(1000,500,10,1000)
  top_border = createSprite(1000,5,2000,10);
  bottom_border = createSprite(1000,995,2000,10);
  right_side_border = createSprite(1995,500,10,1000);
  left_side_border = createSprite(5,500,10,1000);

  middle_border.shapeColor = "blue";
  top_border.shapeColor = "red";
  bottom_border.shapeColor = "red";
  right_side_border.shapeColor = "yellow";
  left_side_border.shapeColor = "yellow";
//left side
  maze_object1 = createSprite(380,268,400,5);
  maze_object2 = createSprite(335,330,310,5);
  maze_object3 = createSprite(580,480.5,5,620);
  maze_object4 = createSprite(490,602.5,5,550);
  maze_object5 = createSprite(600,875,216,5);
  maze_object6 = createSprite(705.5,640,5,700);
  maze_object7 = createSprite(705.5,173,251,5);
  maze_object8 = createSprite(830,530.5,5,720);
  maze_object9 = createSprite(852.75,988,296,5);
  maze_object10 = createSprite(1000,500,5,981);

  maze_object20 = createSprite(1380,268,400,5);
  maze_object19 = createSprite(1335,330,310,5);
  maze_object18 = createSprite(1580,480.5,5,620);
  maze_object17 = createSprite(1490,602.5,5,550);
  maze_object16 = createSprite(1600,875,216,5);
  maze_object15 = createSprite(1705.5,640,5,700);
  maze_object14 = createSprite(1705.5,173,251,5);
  maze_object13 = createSprite(1830,530.5,5,720);
  maze_object12 = createSprite(1852.75,988,296,5);
  maze_object11 = createSprite(1998,500,5,981);

  dummyCoinLeft = createSprite()

  mazeGroup.add(maze_object1);
  mazeGroup.add(maze_object2);
  mazeGroup.add(maze_object3);
  mazeGroup.add(maze_object4);
  mazeGroup.add(maze_object5);
  mazeGroup.add(maze_object6);
  mazeGroup.add(maze_object7);
  mazeGroup.add(maze_object8);
  mazeGroup.add(maze_object9);
  mazeGroup.add(maze_object10);
  mazeGroup.add(maze_object11);
  mazeGroup.add(maze_object12);
  mazeGroup.add(maze_object13);
  mazeGroup.add(maze_object14);
  mazeGroup.add(maze_object15);
  mazeGroup.add(maze_object16);
  mazeGroup.add(maze_object17);
  mazeGroup.add(maze_object18);
  mazeGroup.add(maze_object19);
  mazeGroup.add(maze_object20);

  spawnCoinsLeft();
  drawSprites();
}

function spawnCoinsLeft() {
  
  var randomX = random(10,995);
  var randomY = random(10,990);
  var coins = createSprite(randomX,randomY,7,7);
  coinsGroup.add(coins);
}

function coinSpawnsOnMaze_Left() {
  if(coinsGroup.isTouching(mazeGroup)) {
    spawnCoinsLeft();
  }
}