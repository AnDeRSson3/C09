var ball;
function setup() {

  createCanvas(600,600);
  
  //create a sprite

 ball = createSprite(300,300,15,15);
ball.shapeColor="blue";

}

function draw() 
{
  background(30);

  if (keyIsDown(UP_ARROW)){
    ball.y-=3
  }
  if (keyIsDown(DOWN_ARROW)){
    ball.y+=3
  }
  if (keyIsDown(LEFT_ARROW)){
    ball.x-=3
  }
  if (keyIsDown(RIGHT_ARROW)){
    ball.x+=3
  }
  drawSprites();

}




