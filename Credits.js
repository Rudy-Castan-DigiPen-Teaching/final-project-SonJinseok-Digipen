/*Author : Jinseok Son
Assignment name :Final-Project 
Course : CS099
Semester : Spring-2020
*/


class CreditScreen
{
  
  constructor()
  {
    this.MainButton= new button(width/2-50,550,"Main_menu")
    
  }
  
  Update()
  
  {
    noCursor(); 
    Current_background=Lose_Screen_img;    
   
    if(this.MainButton.DidClickedButton())
    {
    current_sense=Main_Menu
    }
    push();
    DrawCrosshair();  
    pop();
    
  
  }
  Draw()
  {
   this.MainButton.DrawButton();
   push();
   textSize(50); 
   text('This gmae was Created by JinseokSon',50,height/2);
   pop();
    
    
  }
  
  
  

  
}
