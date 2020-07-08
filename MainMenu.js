/*Author : Jinseok Son
Assignment name :Final-Project 
Course : CS099
Semester : Spring-2020
*/





class MainMenu
{
  constructor()
  {
   const center_x=width/2; 
   
   this.play =new button(center_x-90,height*2/5,"play");
   this.options= new button(center_x-90,height*3/5,"options")
   this.credits= new button(center_x-90,height*4/5,"Credits")
          
  }
  
  Update()
  {
    Current_background=Mainmenu_img;
    
    
    if(this.play.DidClickedButton())
    {
      current_sense=Game_Screen
      console.log("play");
      
    }
    
    if(this.options.DidClickedButton())
    {
      console.log("options");
      current_sense=Option_Menu;
    }
    if(this.credits.DidClickedButton())
    {
      current_sense=Credits_Menu;
      console.log("Credits");
    }
  }
    
  Draw()
  {

    this.play.DrawButton();
    this.options.DrawButton();
    this.credits.DrawButton();
    push();
    textSize(120);
    text('F',240,220);
    textSize(100);
    text('l',290,220);
    textSize(100);
    text('i',340,220);
    textSize(100);
    text('c',390,220);
    textSize(100);
    text('k',440,220);
    
    
    textSize(120);
    text('S',500,220);
    textSize(100);
    text('h',550,220);
    textSize(100);
    text('o',600,220);
    textSize(100);
    text('t',650,220);
    pop();
    
    image(target1_img,200,320,100,100)
    image(target2_img,330,320,100,100)
    image(target3_img,460,320,100,100);
    image(target4_img,590,320,100,100); 
    image(target4_1_img,720,320,100,100);
    image(boom_img,740,170,100,100);
    image(boom_img,190,170,100,100);
    
  }

    
    
    
    
    
    
  }
  
  
  
