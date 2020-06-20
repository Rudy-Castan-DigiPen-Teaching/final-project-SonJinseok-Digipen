let p1;



function setup() {
  createCanvas(800, 800);
  //p1=new Explode();
  //p1.reset(createVector(400,400))
  p1=new targetmaker();
  p1.reset(5); // 파라미터넣은 수에 따라서 타겟을 생성함 
  
 
}

function draw() {
  background(220);

  p1.Update();
  //p1.Draw()
  
  //noLoop();
  
  
}


