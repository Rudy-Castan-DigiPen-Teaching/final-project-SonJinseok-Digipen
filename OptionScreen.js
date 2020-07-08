/*Author : Jinseok Son
Assignment name :Final-Project 
Course : CS099
Semester : Spring-2020
*/




class OptionScreen
{
  
  constructor()
  {
    this.Crosshair1= new button(width/2-350,550,"Crosshair1")
    this.Crosshair2= new button(width/2+100,550,"Crosshair2")
    this.Main= new button(width/2-120,700,"MainMenu")
    this.Main.width=200;
    this.Main.height=100;
  }
  
  Update()
  
  {
   
   
    
    
    Current_background=Mainmenu_img;    
   
    if(this.Crosshair1.DidClickedButton())
    {
    current_crosshair=1;
    }
    
    if(this.Crosshair2.DidClickedButton())
    {
    current_crosshair=2;
       
    }
    
    if(this.Main.DidClickedButton())
    {
      current_sense=Main_Menu;
   
       
    }
   
    
  
  
  }
  Draw()
  {
    
    this.Crosshair1.DrawButton();
    this.Crosshair2.DrawButton();
    this.Main.DrawButton();
   push();
   textSize(50); 
   pop();
   image(cross_hair,250,430,150,150)
   image(cross_hair2,700,430,200,200) 
   DrawCrosshair(); 
    
  }
  
  
  

  
}
