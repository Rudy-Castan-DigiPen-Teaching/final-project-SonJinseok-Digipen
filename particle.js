//파티클의 처음 포지션이랑 속력이랑 생존시간을 설정함


class particle
{
  
   constructor() //initialize what kind of variavle in this class 
  {
   this.position=createVector();
   this.velocity=createVector();
   this.scale=random(3,5);
   this.lifeTime=0;
   this.CountDonw=1;
   this.IsDead=false;
    
    
  }
  Set_value(position,velocity)  //set_value of each array 
  {
  this.position=position;
  this.velocity=velocity;
  this.lifeTime=40
       
  }
 
    
}


class Explode
{
  constructor()
  {
   this.particles=[];
   this.Isdead=true;
  }
  
  reset(center) //center is Vector
  {
    let length=random(20,30);
    for(let i=0; i<length; i++)
    {
    this.particles.push(new particle());
    }
    
    for(let i=0; i<this.particles.length; i++)
    {
    let angle=random(TWO_PI)
    this.particles[i].Set_value(center,p5.Vector.fromAngle(angle,3))  
    //console.log(this.particles[i]);
    }
  }
   
  Update()
  {
    
      for(let i=0; i<this.particles.length; i++)
      {
        
      this.particles[i].velocity=p5.Vector.mult(this.particles[i].velocity,0.98);
      this.particles[i].position=p5.Vector.add(this.particles[i].position,this.particles[i].velocity);  
      this.particles[i].lifeTime=this.particles[i].lifeTime-this.particles[i].CountDonw;
      if(this.particles[i].lifeTime<0)
      {
        this.particles[i].IsDead=true;
        
      }
     
    
    }
      
  }
  
  Draw()
  {
    for(let i=0; i<this.particles.length; i++)
    {
    if(this.particles[i].IsDead)
    
     return; 
    }
      
    for(let i=0; i<this.particles.length; i++)
    {
      push();
      let posx=this.particles[i].position.x;
      let posy=this.particles[i].position.y;
    fill(random(0,255),random(0,255),random(0,255));
    rect(posx,posy,10,8);
      pop();
    }
    
    
            
  }
    
}
  
  
class Explode2
{
  constructor()
  {
   this.particles=[];
   this.Isdead=true;
  }
  
  reset(center) //center is Vector
  {
    let length=random(20,30);
    for(let i=0; i<length; i++)
    {
    this.particles.push(new particle());
    }
    
    for(let i=0; i<this.particles.length; i++)
    {
    let angle=random(TWO_PI)
    this.particles[i].Set_value(center,p5.Vector.fromAngle(angle,3))  
    //console.log(this.particles[i]);
    }
  }
   
  Update()
  {
    
      for(let i=0; i<this.particles.length; i++)
      {
        
      this.particles[i].velocity=p5.Vector.mult(this.particles[i].velocity,0.98);
      this.particles[i].position=p5.Vector.add(this.particles[i].position,this.particles[i].velocity);  
      this.particles[i].lifeTime=this.particles[i].lifeTime-this.particles[i].CountDonw;
      if(this.particles[i].lifeTime<0)
      {
        this.particles[i].IsDead=true;
        
      }
     
    
    }
      
  }
  
  Draw()
  {
    for(let i=0; i<this.particles.length; i++)
    {
    if(this.particles[i].IsDead)
    
     return; 
    }
      
    for(let i=0; i<this.particles.length; i++)
    {
      push();
      let posx=this.particles[i].position.x;
      let posy=this.particles[i].position.y;
    fill('#ec1db6');
    rect(posx,posy,10,8);
      pop();
    }
    
    
            
  }
}
  
  class Explode3
{
  constructor()
  {
   this.particles=[];
   this.Isdead=true;
  }
  
  reset(center) //center is Vector
  {
    let length=random(20,30);
    for(let i=0; i<length; i++)
    {
    this.particles.push(new particle());
    }
    
    for(let i=0; i<this.particles.length; i++)
    {
    let angle=random(TWO_PI)
    this.particles[i].Set_value(center,p5.Vector.fromAngle(angle,3))  
    //console.log(this.particles[i]);
    }
  }
   
  Update()
  {
    
      for(let i=0; i<this.particles.length; i++)
      {
        
      this.particles[i].velocity=p5.Vector.mult(this.particles[i].velocity,0.98);
      this.particles[i].position=p5.Vector.add(this.particles[i].position,this.particles[i].velocity);  
      this.particles[i].lifeTime=this.particles[i].lifeTime-this.particles[i].CountDonw;
      if(this.particles[i].lifeTime<0)
      {
        this.particles[i].IsDead=true;
        
      }
     
    
    }
      
  }
  
  Draw()
  {
    for(let i=0; i<this.particles.length; i++)
    {
    if(this.particles[i].IsDead)
    
     return; 
    }
      
    for(let i=0; i<this.particles.length; i++)
    {
      push();
      let posx=this.particles[i].position.x;
      let posy=this.particles[i].position.y;
    fill('#75CF7D');
    rect(posx,posy,10,8);
      pop();
    }
    
    
            
  }
  
}


 class Explode4
{
  constructor()
  {
   this.particles=[];
   this.Isdead=true;
  }
  
  reset(center) //center is Vector
  {
    let length=random(20,30);
    for(let i=0; i<length; i++)
    {
    this.particles.push(new particle());
    }
    
    for(let i=0; i<this.particles.length; i++)
    {
    let angle=random(TWO_PI)
    this.particles[i].Set_value(center,p5.Vector.fromAngle(angle,3))  
    //console.log(this.particles[i]);
    }
  }
   
  Update()
  {
    
      for(let i=0; i<this.particles.length; i++)
      {
        
      this.particles[i].velocity=p5.Vector.mult(this.particles[i].velocity,0.98);
      this.particles[i].position=p5.Vector.add(this.particles[i].position,this.particles[i].velocity);  
      this.particles[i].lifeTime=this.particles[i].lifeTime-this.particles[i].CountDonw;
      if(this.particles[i].lifeTime<0)
      {
        this.particles[i].IsDead=true;
        
      }
     
    
    }
      
  }
  
  Draw()
  {
    for(let i=0; i<this.particles.length; i++)
    {
    if(this.particles[i].IsDead)
    
     return; 
    }
      
    for(let i=0; i<this.particles.length; i++)
    {
      push();
      let posx=this.particles[i].position.x;
      let posy=this.particles[i].position.y;
    fill('#498598');
    rect(posx,posy,10,8);
      pop();
    }
    
    
            
  }
  
  
  
  
  
  
}


 class Explode5
{
  constructor()
  {
   this.particles=[];
   this.Isdead=true;
  }
  
  reset(center) //center is Vector
  {
    let length=random(20,30);
    for(let i=0; i<length; i++)
    {
    this.particles.push(new particle());
    }
    
    for(let i=0; i<this.particles.length; i++)
    {
    let angle=random(TWO_PI)
    this.particles[i].Set_value(center,p5.Vector.fromAngle(angle,3))  
    //console.log(this.particles[i]);
    }
  }
   
  Update()
  {
    
      for(let i=0; i<this.particles.length; i++)
      {
        
      this.particles[i].velocity=p5.Vector.mult(this.particles[i].velocity,0.98);
      this.particles[i].position=p5.Vector.add(this.particles[i].position,this.particles[i].velocity);  
      this.particles[i].lifeTime=this.particles[i].lifeTime-this.particles[i].CountDonw;
      if(this.particles[i].lifeTime<0)
      {
        this.particles[i].IsDead=true;
        
      }
     
    
    }
      
  }
  
  Draw()
  {
    for(let i=0; i<this.particles.length; i++)
    {
    if(this.particles[i].IsDead)
    
     return; 
    }
      
    for(let i=0; i<this.particles.length; i++)
    {
      push();
      let posx=this.particles[i].position.x;
      let posy=this.particles[i].position.y;
    fill(0);
    rect(posx,posy,10,8);
      pop();
    }
    
    
            
  }


}


















