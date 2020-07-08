/*Author : Jinseok Son
Assignment name :Final-Project 
Course : CS099
Semester : Spring-2020
*/


  class Weapon1bullet
{
    constructor()
  {
    this.bulletNumber=11;
          
  }
    
  Update()
  {
      
  if(this.Click())
  {
    this.bulletNumber--;
    console.log(this.bulletNumber);
   
  }
   
  if(this.Reload())
  {
    if(this.bulletNumber>0)
    {
      return;
    }
    
    
    this.bulletNumber=11;
    
  } 
    
  
  }
  Click()
  {
  const clicked_it = this.mouseWasPressed && !mouseIsPressed;
  this.mouseWasPressed = mouseIsPressed;
  return clicked_it;
  }
  
  
 Reload()
  {
  const reload_it=this.keyWasPressed && !keyIsPressed;
  this.keyWasPressed=keyIsPressed; 
  return reload_it;
  }
  
  
  
  Draw()
  {
    for(let i=1; i<this.bulletNumber; ++i)
    {
      let x=i*45;
      let y=170;
    
   
      image(bullet_img,x-14,y+18,200,100);
      
    }
    
   }
    
    
    
    
    
    
    
    
    
    
    
}
  
  
  
  
  
  
  


  
  
