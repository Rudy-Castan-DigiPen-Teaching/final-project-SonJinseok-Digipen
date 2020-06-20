class target
{
  constructor()
  {
   this.position=createVector(random(0,400),random(0,400));
   this.radius=20;
   this.Isbig=false;
   this.mouseIsOver=false;
   this.ExplodeEffect=new Explode();
   this.ExplodeEffect.reset(this.position);
   this.time=millis();
   this.timeElapsed=0;
   this.mouseWasPressed=false;
   this.clickcount=0;
  
   
  }
  
    
  Update()
  {
   this.ClickCount();
   this.timeElapsed += (millis() - this.time) / 1000
   //console.log(this.timeElapsed);
   this.time = millis() 
       
   this.radius+=deltaTime/100;
    
   if(this.timeElapsed>10)
   {
     this.Isbig=true;
     
   }
   
    //decide how many click destory 
   if(this.clickcount==4)
   {
     
     this.Isbig=true;
   } 
    
     }
      
  Click()
  {
  let within_x= mouseX>this.position.x-this.radius/2 && mouseX<this.position.x+this.radius/2;
  let within_y=mouseY>this.position.y-this.radius/2 && mouseY<this.position.y+this.radius/2
  this.mouseIsOver=within_x && within_y;
  const clicked_it = this.mouseIsOver && this.mouseWasPressed && !mouseIsPressed;
  this.mouseWasPressed = mouseIsPressed;
  
  
  return clicked_it;
  }
    
   
  ClickCount()
  {
    if(this.Click())
    {
      this.clickcount++;
    }
          
  }
   
  
  
  Draw()
  {
  if(this.Isbig)
  {
    
    this.ExplodeEffect.Update();
    this.ExplodeEffect.Draw();
  }
  if(this.Isbig)
  {
    
    this.ExplodeEffect.Update();
    this.ExplodeEffect.Draw();
  }  
    
  else 
  circle(this.position.x,this.position.y,this.radius);
        
  }
   
  
}