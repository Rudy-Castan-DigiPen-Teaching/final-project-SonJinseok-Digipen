/*Author : Jinseok Son
Assignment name :Final-Project 
Course : CS099
Semester : Spring-2020
*/





class LoseScreen
{
  
  constructor()
  {
    this.retryButton= new button(width/2-50,550,"Play Again")
    this.GoMainButton= new button(width/2-50,650,"Back Mainmenu")
  }
  
  Update()
  
  {
     noCursor(); 
    Current_background=Lose_Screen_img;    
   
    if(this.retryButton.DidClickedButton())
    {
       Killall();
      current_sense=Game_Screen
      h1.timer=0;
      h1.healthpoint=100;
      h1.score=0;
      w1.bulletNumber=11;
    
      
    }
    
    if(this.GoMainButton.DidClickedButton())
    {
      Killall()
      current_sense=Main_Menu;
      h1.timer=0;
      h1.healthpoint=100;
      h1.score=0;
      w1.bulletNumber=11;
       
    }
    push();
    DrawCrosshair();  
    pop();
    
  
  }
  Draw()
  {
    this.retryButton.DrawButton();
    this.GoMainButton.DrawButton();
   push();
   textSize(50); 
   text('Your Score'+' '+ h1.score,width/2-120,height/2);
   pop();
    
    
  }
  
  
  

  
}
