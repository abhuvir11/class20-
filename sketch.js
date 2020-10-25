var fixedrect,movingrect;



function setup() {

  createCanvas(800,400);
  
  fixedrect = createSprite(500,200,80,50);
  fixedrect.shapeColor = 'green'
    movingrect = createSprite(400,300,50,50);
    movingrect.shapeColor = 'green'
    movingrect.debug = true;
    fixedrect.debug = true;
}

function draw() {
  background('orange');  
  movingrect.x= mouseX;
  movingrect.y = mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.width/2) {
    movingrect.shapeColor = 'blue';
    fixedrect.shapeColor = 'blue';
  }
  else{
    movingrect.shapeColor = 'green';
    fixedrect.shapeColor = 'green';
  }
  drawSprites();
}