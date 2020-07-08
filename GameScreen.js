/*Author : Jinseok Son
Assignment name :Final-Project 
Course : CS099
Semester : Spring-2020
*/


class GameScreen
{
  constructor()
  {
     
  }
  
  Update()
  {
    
  noCursor();    
  Current_background=Mainmenu_img;
  Current_background=phase1_img;
  DisplayHud();
  DisplayHoneytip(); 
  WeaponSystem1();
    
  //phase1
  if(h1.timer>=0 && h1.timer<20)
  {
  Current_background=phase1_img;  
  Phase1_SpawnBoom1()
  Phase1_SpawnBoom2()
  Phase1_SpawnBoom3()  
  Phase1_SpawnBoom4();
  Phase1_SpawnBoom5()  
  }
  //phase 2 
 if(h1.timer>20 && h1.timer<60)
 {
  Current_background=phase2_img 
  Phase2_SpawnBoom1()
  Phase2_SpawnBoom2()
  Phase2_SpawnBoom3()
  Phase2_SpawnBoom4(); 
  Phase2_SpawnBoom5();
     
 }
  //phase 3
  if(h1.timer>=60 && h1.timer<90)
 {
  Current_background= phase3_img  
  Phase3_SpawnBoom1()
  Phase3_SpawnBoom2()
  Phase3_SpawnBoom3()
  Phase3_SpawnBoom4(); 
  Phase3_SpawnBoom5();
     
 }   
  //phase 4  
  if(h1.timer>=90 && h1.timer<120)
 {
  Current_background= phase3_img  
  Phase4_SpawnBoom1()
  Phase4_SpawnBoom2()
  Phase4_SpawnBoom3()
  Phase4_SpawnBoom4(); 
  Phase4_SpawnBoom5();   
    
 
  }
    
    
 //phase 5   
 if(h1.timer>=120)
 {
  Current_background= phase3_img  
  Phase4_SpawnBoom1()
  Phase4_SpawnBoom2()
  Phase4_SpawnBoom3()
  Phase4_SpawnBoom4(); 
  Phase4_SpawnBoom5();   
  }
  BoomTriger5(); 
  BoomTriger4_1() ;
  BoomTriger4() 
  BoomTriger3()
  BoomTriger2()
  BoomTriger();   
  DrawCrosshair()   
  
  }
    


    
    
    
    
    
    
  
  
}
