/*Author : Jinseok Son
Assignment name :Final-Project 
Course : CS099
Semester : Spring-2020
*/

class DeveloperHoneyTip
{
  
  constructor()
  {
    this.timer=0;
    this.left=505;
    this.top=0;
    this.width=500;
    this.height=220;
    this.IsDisplay=false;
    this.picker=1;
  }
  
  Update()
  {
 
    
  if (frameCount % 240 == 0) //10초에 한번씩 랜덤숫자 선택
  {
   this.picker++
  } 
  if(this.picker>7)
  {
   this.picker=1; 
  }
  
  
 
  
  
  }
   
  Draw()
  {
    
  push(); 
  noStroke();
  rectMode(CORNER);
  fill('#45a6e3');
  pop();
    
  switch(this.picker)
  {
    case 1:
    push();
    textAlign(CENTER);  
    textSize(35);
    text("If you don't have bullet",this.left+250,this.top+120)
    text("Press any key",this.left+250,this.top+150);
    pop();
    break;  
      
    case 2:
    push();
    textAlign(CENTER);  
    textSize(40);
    text("This Blue monster is ",this.left+250,this.top+120)
    text("reloaded for free.",this.left+250,this.top+150);
    pop();   
    break;  
    
    case 3:
    push();
    textAlign(CENTER);  
    textSize(40);
    text("This Orange monster is ",this.left+250,this.top+120)
    text("Heal for free.",this.left+250,this.top+150);
    pop();     
    break;
    
    case 4:
    push();
    textAlign(CENTER);  
    textSize(32);
    text("You can't reload your gun bullet ",this.left+250,this.top+120)
    textSize(32);  
    text("Untill spend all of bullet haha.",this.left+230,this.top+150);
    pop();     
    break;
    
    case 5:
    push();
    textAlign(CENTER);  
    textSize(34);
    text("Black Monster is most dangerous",this.left+220,this.top+120)
    textSize(34);  
    text("kill quick as much as possible.",this.left+230,this.top+150);
    pop();     
    break;
        
    
    case 6:
    push();
    textAlign(CENTER);  
    textSize(30);
    text("When the bomb explodes, all monsters ",this.left+240,this.top+90)
    textSize(30);  
    text("automatically die for 1 second after it explodes.",this.left+300,this.top+150);
    text("explodes.",this.left+40,this.top+210);  
    pop();     
    break;
    
    
    case 7:
    push();
    textAlign(CENTER);  
    textSize(34);
    text("Monsters do damage to players",this.left+220,this.top+120)
    textSize(34);  
    text("even if they are alive..",this.left+230,this.top+150);
    pop();     
    break;
    
    case 8:
    push();
    textAlign(CENTER);  
    textSize(34);
    text("When the bomb Explode,",this.left+220,this.top+120)
    textSize(34);  
    text("player also takes damage.",this.left+230,this.top+150);
    pop();     
    break;
    
    
      
  }
    
    
  }
  
  
  
  
  
  
  
  
  
  
}
