let time=0;
let timeElapsed=0;
let targets=[];
let targets2=[];
let targets3=[];
let targets4=[];
let targets4_1=[];
let targets5=[];
let Lose_scrren_effect=[];
let Current_Weapon=1;
let w1; //weapon System
let h1; //hud system;
let d1; //honey tip;
let w2; 
let Current_background=220;
let mainSence;
let CreditScene;
let OptionScene;
let GameScene;
let Lose_Scene;
let current_sense= Main_Menu; //Game_Screen
let current_crosshair=1;
let phase1_img;
let phase2_img;
let myFont;


function preload() {
  
 
  bullet_img = loadImage('Image/bulletpng.png');
  target1_img = loadImage('Image/target1.png');
  target2_img=loadImage('Image/target2.png');
  target3_img=loadImage('Image/target3.png');
  target4_img=loadImage('Image/target4.png');
  target4_1_img=loadImage('Image/target4_1.png');
  cross_hair=loadImage('Image/pinpng.com-crosshairs-png-279597.png');
  cross_hair2=loadImage('Image/Cross_hair2.png');
  boom_img=loadImage('Image/IMGBIN_explosion-bomb-nuclear-weapon-png_3NTL60w6.png');
   myFont = loadFont('Font/Nathaniel-19.otf');
  phase1_img=loadImage('Image/sky7.png');
  phase2_img=loadImage('Image/Sky Paint1.png');
  phase3_img=loadImage('Image/Sky4.png');
  Mainmenu_img=loadImage('Image/Sky Paint5.png');
  Lose_Screen_img=loadImage('Image/Sky Paint1.3.png');
  Game_music=loadSound('Sound/bensound-jazzyfrenchy.mp3');
  explosion_music1=loadSound('Sound/Explosion3.wav');
  explosion_music2=loadSound('Sound/Explosion4.wav');
  Boom_explosion_music=loadSound('Sound/BoomExplosion.wav')
  pistole_music=loadSound('Sound/40_smith_wesson_single-mike-koenig.wav');

  

  
}












function setup() {
 imageMode(CENTER);
 createCanvas(1000, 1000);
 w1=new Weapon1bullet();
 h1=new playerHud();
 d1=new DeveloperHoneyTip();

 mainSence = new MainMenu(); 
 gameSence =new GameScreen();
 LoseSence =new LoseScreen();
 OptionSence= new OptionScreen();
 CreditScene= new  CreditScreen();
 Game_music.loop();
 Game_music.setVolume(0.1); 
 textFont(myFont, 36);
  

   
}

function draw() { 
  push();
  imageMode(CORNER);
  background(Current_background);
  pop();
   
  
  switch(current_sense)
  {
    case Main_Menu :
    noCursor();
    mainSence.Update();
    mainSence.Draw();
    DrawCrosshair();   
    break;
    case Game_Screen:
    gameSence.Update();  
    break;
     
     
     case Lose_Screen:
     push();
     noCursor();   
     LoseSence.Update(); 
     LoseSence.Draw(); 
     pop();
     break;
    
    case Option_Menu :
    OptionSence.Update();
    OptionSence.Draw(); 
    break;
    
    case Credits_Menu :
    CreditScene.Update();  
    CreditScene.Draw();
    break;
     
  
      
  }
     
   
}
  function mousePressed()
{
  if(w1.bulletNumber<=1)
  {
   return ; 
  }
  pistole_music.setVolume(0.05); 
  pistole_music.play();
}




 
  



