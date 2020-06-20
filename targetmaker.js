class targetmaker
{
  constructor()
  {
    this.targets=[];
              
  }
  
  reset(number)
  {
    for(let i=0; i<number; i++)
    {
      this.targets.push(new target())
    }
        
   }
  Update()
  {
    for(let i=0; i<this.targets.length; i++)
    {
      this.targets[i].Update();
      this.targets[i].Draw();
    }
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
}