














class Explode
{
  constructor()
  {
   this.particles=[];
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
    this.particles[i].Set_value(center,p5.Vector.fromAngle(angle,7))  
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
      let posx=this.particles[i].position.x;
      let posy=this.particles[i].position.y;
    
      circle(posx,posy,30);
    }
    
    
            
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}