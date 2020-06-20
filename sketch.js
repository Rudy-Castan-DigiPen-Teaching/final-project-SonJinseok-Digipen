let p1;



function setup() {
  createCanvas(800, 800);
  //p1=new Explode();
  //p1.reset(createVector(400,400))
    p1=new target();
    
  
 
}

function draw() {
  background(220);
  
  p1.Update();
  p1.Draw()
  console.log(p1);
  //noLoop();
  
  
}