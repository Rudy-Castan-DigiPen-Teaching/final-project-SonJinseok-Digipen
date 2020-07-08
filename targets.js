/*Author : Jinseok Son
Assignment name :Final-Project 
Course : CS099
Semester : Spring-2020
*/




class target1
{
  constructor()
  {
   this.position=createVector(random(100,800),random(230,800));
   this.velocity=createVector(); 
   this.radius=60;
   this.Isbig=false;
   this.mouseIsOver=false;
   this.ExplodeEffect1=new Explode();
   this.ExplodeEffect1.reset(this.position);
   this.ExplodeEffect2=new Explode2();
   this.ExplodeEffect2.reset(this.position); 
   this.mouseWasPressed=false;
   this.keyWasPressed=false;
   this.Isdie=false;
   this.clickcount=0;
   this.IsDead=false;
   this.bullet=new Weapon1bullet();
   this.IsExploding=false;
   this.time=millis();
   this.timeElapsed=0;   
  }
  
  
  
  
  Update()
  {
  this.ClickCount();
 
  this.timeElapsed += (millis() - this.time) / 1000
  this.time = millis()   
    
    
   this.radius+=deltaTime/100;
  
   if(this.clickcount==1) 
   {
   this.IsExploding=true;
    }
    
    
  
  if(this.IsExploding==false)
  {
  if(this.timeElapsed>6&&this.timeElapsed<6.3)
  {
   this.IsExploding1=true
   
    h1.healthpoint-=0.1;
  }
  }
   

    
  } 
  
  
  
  
 
      
  Click()
  {
  if(this.IsDead)
  {
   return; 
  }
    
  let within_x= mouseX>this.position.x-this.radius/2 && mouseX<this.position.x+this.radius/2;
  let within_y=mouseY>this.position.y-this.radius/2 && mouseY<this.position.y+this.radius/2;
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
      if(this.clickcount==1)
      {
       explosion_music1.setVolume(0.7);  
       explosion_music1.play(); 
       h1.score+=10;
      }
      
    }
            
  }
   
  Draw()
  {
   
    
  if(this.IsExploding)
  
  {
    this.ExplodeEffect1.Update();
    this.ExplodeEffect1.Draw();
    
     
  }
    
    
  else if(this.IsExploding1)
  
  {
    this.ExplodeEffect2.Update();
    this.ExplodeEffect2.Draw();
  
  }  
    
    
       
  else
 
 image(target1_img,this.position.x,this.position.y,this.radius,this.radius);  
 
    
  
  }
    
  
}


class target2
{
  constructor()
  {
   this.position=createVector(random(0,800),random(230,800));
   this.radius=40;
   this.Isbig=false;
   this.mouseIsOver=false;
   this.ExplodeEffect=new Explode();
   this.ExplodeEffect.reset(this.position);
   this.ExplodeEffect2=new Explode4();
   this.ExplodeEffect2.reset(this.position); 
   this.time=millis();
   this.timeElapsed=0;
   this.mouseWasPressed=false;
   this.keyWasPressed=false;
   this.Isdie=false;
   this.clickcount=0;
   this.IsDead=false;
   this.IsExploding=false;
   this.IsExploding1=false 
   this.Xspeed=3;
   this.Yspeed=-3;
   this.BounceNumber=0;
   
        
  }
  
  
  
  
  Update()
  {
   
   this.ClickCount();
   this.timeElapsed += (millis() - this.time) / 1000
   this.time = millis()
    
   this.Bounce();
     
   this.position.x+=this.Xspeed;
   this.position.y+=this.Yspeed;
   
  if(this.clickcount==1)
  {
   this.Xspeed=0;
   this.Yspeed=0;
    
  }
    
   
 if(this.IsExploding==false)
 {
   if(this.clickcount==1) 
   {
    this.IsExploding=true;
   
   }
 }
  
 
 if(this.IsExploding==false)
 {
  if(this.timeElapsed>6 && this.timeElapsed<6.3)
  {
  this.IsExploding1=true
  }
 }
  
    
  }  
  
  Bounce()
  {
   if(this.position.x>width || this.position.x<0)
  {
      this.Xspeed=-this.Xspeed;
      this.BounceNumber++;
  }
   
    if(this.position.y>height || this.position.y<220)
  {
     this.Yspeed=-this.Yspeed
     this.BounceNumber++;
  } 
     
    
  }
  
   
      
  Click()
  {
  if(this.IsDead)
  {
   return; 
  }
    
  let within_x= mouseX>this.position.x-50 && mouseX<this.position.x+50
  let within_y=mouseY>this.position.y-25 && mouseY<this.position.y+25
  this.mouseIsOver=within_x && within_y;
  const clicked_it = this.mouseIsOver && this.mouseWasPressed && !mouseIsPressed;
  this.mouseWasPressed = mouseIsPressed;
  console.log("hi");
  
  return clicked_it;
  }
    
   
  ClickCount()
  {
           
    if(this.Click())
    {
      this.clickcount++;
      if(this.clickcount==1)
     {
      w1.bulletNumber=10;
      h1.score+=30 
      explosion_music2.setVolume(0.7);   
      explosion_music2.play(); 
     }
    }
            
  }
   
  Draw()
  {

  if(this.IsExploding)
  {
    this.ExplodeEffect.Update();
    this.ExplodeEffect.Draw();
    
  }


 else if(this.IsExploding1)
  {
    this.ExplodeEffect2.Update();
    this.ExplodeEffect2.Draw();
    
  }  

    
    
  else
  image(target2_img,this.position.x,this.position.y,120,120);  

  }
  
 
   
  
}


class target3
{
  constructor()
  {
   this.position=createVector(random(0,800),random(230,800));
   this.radius=40;
   this.Isbig=false;
   this.mouseIsOver=false;
   this.ExplodeEffect=new Explode();
   this.ExplodeEffect.reset(this.position);
   this.time=0;
   this.timeElapsed=0;
   this.mouseWasPressed=false;
   this.keyWasPressed=false;
   this.Isdie=false;
   this.clickcount=0;
   this.IsDead=false;
   this.IsExploding=false;
   this.size=150 
   this.timer=0; 
   this.sinX=random(100,800);
   this.sinY=random(400,800); 
           
  }
  Update()
  {
  this.position.x = sin(frameCount / 25) * 200;
  this.position.y = cos(frameCount / 50) * 100; 
  this.position.x+=this.sinX;
  this.position.y+=this.sinY; 
    
    
   this.ClickCount();
   this.timeElapsed += (millis() - this.time) / 1000
   this.time = millis() 
   //this.radius+=deltaTime/100;
     
 if(this.IsExploding==false)
 {
   if(this.clickcount==1) 
   {
     
    this.IsExploding=true;
   
   }
 }
   
   if(this.IsExploding) 
   {
    
    if(frameCount % 60 == 0 && this.timer >=0) 
   { 
    this.timer=this.timer+1;
   }   
    
   } 
        
    
  
   if(this.IsExploding&&this.timer<=1)
   {
     h1.healthpoint+=0.5;
   }
   
    
  }  
        
  Click()
  {
  if(this.IsDead)
  {
   return; 
  }
    
  let within_x= mouseX>this.position.x-this.size/2 && mouseX<this.position.x+this.size/2;
  let within_y=mouseY>this.position.y-this.size/2 && mouseY<this.position.y+this.size/2;
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
      if(this.clickcount==1)
     {
       explosion_music2.setVolume(0.7); 
       explosion_music2.play()
       h1.score+=30; 
       h1.healthpoint+=25;
     }
    }
     
 
      
      
    }
            
  
   
  Draw()
  {
  if(this.IsExploding)
  {
    this.ExplodeEffect.Update();
    this.ExplodeEffect.Draw();
    
  }
  else
  image(target3_img,this.position.x,this.position.y,this.size,this.size);  

  }
  
    
}

class target4
{
  constructor()
  {
   this.position=createVector(random(400,700),random(400,700));
   this.radius=40;
   this.Isbig=false;
   this.mouseIsOver=false;
   this.ExplodeEffect=new Explode();
   this.ExplodeEffect.reset(this.position);
   this.mouseWasPressed=false;
   this.keyWasPressed=false;
   this.Isdie=false;
   this.clickcount=0;
   this.IsDead=false;
   this.IsExploding=false;
   this.IsExploding1=false
   this.time=millis();
   this.timeElapsed=0;
   this.sinX=random(100,800);
   this.sinY=random(400,800);
        
  }
  
  
  
  
  Update()
  {
    
  this.position.x = sin(frameCount / 25) * 100;
  this.position.y = cos(frameCount / 50) * 200; 
  this.position.x+=this.sinX;
  this.position.y+=this.sinY;
    
    
  this.ClickCount() 
  this.timeElapsed += (millis() - this.time) / 1000
  this.time = millis()   
  this.radius+=deltaTime/100;
   
  if(!this.IsDead)
  {
   if(this.clickcount==1) 
   {
  
   this.IsExploding=true;
   
   }
 
  }
 
   if(!this.IsExploding)
   {
   if(this.timeElapsed>=4 && this.timeElapsed<=4.1)
   {
    this.IsExploding1=true; 
   
   }
   else   
   this.IsExploding1=false;   
   }
   else   
   this.IsExploding1=false; 
    
    
  if(this.IsExploding1)
  {
  
   targets4_1.push(new target4_1());
  }
    
  }
   
  
    
    
    
  
  
  
 
      
  Click()
  {
  if(this.IsDead)
  {
   return; 
  }
    
  let within_x= mouseX>this.position.x-35 && mouseX<this.position.x+35
  let within_y=mouseY>this.position.y-35 && mouseY<this.position.y+35;
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
   if(this.clickcount==1) 
   {
   explosion_music1.setVolume(0.7);   
   explosion_music1.play()  
   h1.score+=50;      
   }
    }
            
  }
   
  Draw()
  {
       
  if(this.IsExploding)
  {
    this.ExplodeEffect.Update();
    this.ExplodeEffect.Draw();
    
  }
  else
  image(target4_img,this.position.x,this.position.y,70,70);  

  }
  
 
   
  
}




class target4_1
{
  constructor()
  {
   this.position=createVector(random(100,800),random(230,800));
   this.velocity=createVector(); 
   this.radius=60;
   this.Isbig=false;
   this.mouseIsOver=false;
   this.ExplodeEffect1=new Explode();
   this.ExplodeEffect1.reset(this.position);
   this.ExplodeEffect3=new Explode3();
   this.ExplodeEffect3.reset(this.position); 
   this.mouseWasPressed=false;
   this.keyWasPressed=false;
   this.Isdie=false;
   this.clickcount=0;
   this.IsDead=false;
   this.bullet=new Weapon1bullet();
   this.IsExploding=false;
   this.time=millis();
   this.timeElapsed=0;   
   this.timer=0; 
  }
  
  
  
  
  Update()
  {
  this.ClickCount();
 
  this.timeElapsed += (millis() - this.time) / 1000
  this.time = millis()   
  this.radius+=deltaTime/100; 
    
   if(this.clickcount>=1) 
   {
   this.IsExploding=true;
  
   }
    
    
  
  if(this.IsExploding==false)
  {
  if(this.timeElapsed>6&&this.timeElapsed<6.3)
  {
   this.IsExploding1=true
   
    h1.healthpoint-=0.1;
  }
  
  }
   
    /*
  if(this.IsExploding1)
  {
    this.IsExploding=false;
  }
  */
    
  } 
  
  
  
  
 
      
  Click()
  {
  if(this.IsDead)
  {
   return; 
  }
    
  let within_x= mouseX>this.position.x-this.radius/2 && mouseX<this.position.x+this.radius/2;
  let within_y=mouseY>this.position.y-this.radius/2 && mouseY<this.position.y+this.radius/2;
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
      if(this.clickcount==1)
      {
        explosion_music1.setVolume(0.7); 
        explosion_music1.play()  
       h1.score+=10;
      }
      
    }
            
  }
   
  Draw()
  {
   
    
  if(this.IsExploding)
  
  {
    this.ExplodeEffect1.Update();
    this.ExplodeEffect1.Draw();
     
  }
    
    
  else if(this.IsExploding1)
  
  {
    this.ExplodeEffect3.Update();
    this.ExplodeEffect3.Draw();
  
  }  
    
    
       
  else
 
  
  image(target4_1_img,this.position.x,this.position.y,this.radius,this.radius);  
  
    
  
  }
    
  
}


class target5
{
  constructor()
  {
   this.position=createVector(random(100,800),random(230,800));
   this.velocity=createVector(); 
   this.radius=100;
   this.Isbig=false;
   this.mouseIsOver=false;
   this.ExplodeEffect1=new Explode();
   this.ExplodeEffect1.reset(this.position);
   this.ExplodeEffect2=new Explode5();
   this.ExplodeEffect2.reset(this.position); 
   this.mouseWasPressed=false;
   this.keyWasPressed=false;
   this.Isdie=false;
   this.clickcount=0;
   this.IsDead=false;
   this.bullet=new Weapon1bullet();
   this.IsExploding=false;
   this.IsExploding1=false; 
   this.time=millis();
   this.timeElapsed=0;  
   this.timer=0;
   this.sinY=0;
  }
  
  
  
  
  Update()
  {
  this.ClickCount();
   this.timeElapsed += (millis() - this.time) / 1000
  this.time = millis()   
 // this.radius+=deltaTime/100;
  this.position.x+=1;
  this.sinY=sin(frameCount*0.1) *100;
 
  if( this.IsExploding1==false)
  {
   if(this.clickcount>=1) 
   {
   this.IsExploding=true;
   if(frameCount % 60 == 0 && this.timer >=0) 
   {  
    this.timer=this.timer+1;
   }     
   } 
  }
    
      
  
  if(this.IsExploding==false)
  {
  if(this.timeElapsed>6&&this.timeElapsed<6.3)
  {
   this.IsExploding1=true
   
    
  }
  }
   
    if(this.IsExploding&&this.timer<=1)
    {
      for(let i of targets)
      {
        i.IsExploding=true;
      }
      
      for(let i of targets2)
      {
        i.IsExploding=true;
      }
      
       for(let i of targets3)
      {
        i.IsExploding=true;
      }
      
       for(let i of targets4)
      {
        i.IsExploding=true;
      }
     
      
       for(let i of targets4_1)
      {
        i.IsExploding=true;
      }
      
    }
    

  } 
  
  
  
  
 
      
  Click()
  {
  if(this.IsDead)
  {
   return; 
  }
    
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
      if(this.clickcount==1)
      {
       h1.score+=10;
       h1.healthpoint-=25;
       Boom_explosion_music.setVolume(0.7) 
       Boom_explosion_music.play(); 
      }
      
    }
            
  }
   
  Draw()
  {
   
    
  if(this.IsExploding)
  
  {
    this.ExplodeEffect1.Update();
    this.ExplodeEffect1.Draw();
     
  }
    
    
  else if(this.IsExploding1)
  
  {
    this.ExplodeEffect2.Update();
    this.ExplodeEffect2.Draw();
  
  }  
    
    
       
  else
  
  
  image(boom_img,this.position.x,this.position.y+this.sinY,this.radius,this.radius);
 
    
  
  }
    
  
}













