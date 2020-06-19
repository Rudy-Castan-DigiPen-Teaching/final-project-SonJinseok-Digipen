//파티클의 처음 포지션이랑 속력이랑 생존시간을 설정함


class particle
{
  
   constructor() //initialize what kind of variavle in this class 
  {
   this.position=createVector();
   this.velocity=createVector();
   this.scale=random(10,20);
   this.lifeTime=0;
   this.CountDonw=1;
   this.IsDead=false;
    
    
  }
  Set_value(position,velocity)  //set_value of each array 
  {
  this.position=position;
  this.velocity=velocity;
  this.lifeTime=20;
       
  }
  
  
  Draw()
  {
    circle(this.position.x,this.position.y,this.scale);
  }
  
   
}