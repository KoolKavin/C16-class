var box 
function setup() 
{
  createCanvas(400, 400);
  box = new Box(200,200,30,30,1,1);
}
function draw() 

{
background(220);
box.show()
box.moveup()
}

