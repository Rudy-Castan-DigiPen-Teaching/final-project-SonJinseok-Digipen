class target
{
  constructor()
  {
   this.position=createVector(random(0,400),random(0,400));
   this.radius=20;
   this.scale=random(1,2);
   this.Isbig=false;
   this.ExplodeEffect=new Explode();
   this.ExplodeEffect.reset(this.position);
  }
  
  
 
  
  Update()
  {
   
   if(this.radius>40)
   {
     this.Isbig=true;
     
   }
   this.radius+=1; 
  }
  
  Draw()
  {
  if(this.Isbig)
  {
    
    this.ExplodeEffect.Update();
    this.ExplodeEffect.Draw();
  }
  else 
  circle(this.position.x,this.position.y,this.radius);
        
  }
   
  
}