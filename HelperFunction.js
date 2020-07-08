/*Author : Jinseok Son
Assignment name :Final-Project 
Course : CS099
Semester : Spring-2020
*/


function Phase1_SpawnBoom1()
{
  
  if (frameCount % 90== 0)  //60프레임 기준 1초
  {
    targets.push(new target1())
  }  
  
 
}


function Phase2_SpawnBoom1()
{
  
  if (frameCount % 42== 0)  //60프레임 기준 1초
  {
  
    targets.push(new target1())
    
  }  
  
 
}

function Phase3_SpawnBoom1()
{
  
  if (frameCount % 30== 0)  //60프레임 기준 1초
  {
     targets.push(new target1())
    
  }  
  
 
}


function Phase4_SpawnBoom1()
{
  
  if (frameCount % 60== 0)  //60프레임 기준 1초
  {
    for(let i=0; i<2; i++)
    {
     targets.push(new target1())
    }
    
  }  
  
 
}

function Phase5_SpawnBoom1()
{
  
  if (frameCount % 180== 0)  //60프레임 기준 1초
  {
    for(let i=0; i<3; i++)
    {
     targets.push(new target1())
    }
    
  }  
  
 
}


////SpawnBoom2

function Phase1_SpawnBoom2()
{
  
  if (frameCount % 420== 0)  
  {
  targets2.push(new target2()) 
  }
  
}


function Phase2_SpawnBoom2()
{
  
  if (frameCount % 300== 0)  
  {
  targets2.push(new target2()) 
  }
  
}


function Phase3_SpawnBoom2()
{
  
  if (frameCount % 240== 0) 
  {
  targets2.push(new target2()) 
  }
  
}

function Phase4_SpawnBoom2()
{
  
  if (frameCount % 120== 0)  
  {
  targets2.push(new target2()) 
  }
  
}


function Phase5_SpawnBoom2()
{
  
  if (frameCount % 60== 0)  
  {
  targets2.push(new target2()) 
  }
  
}



//SpawnBoom3
function Phase1_SpawnBoom3()
{
  
  if (frameCount % 600 == 0)  //60프레임 기준 20초
  {
  targets3.push(new target3()) 
  }
  
}

function Phase2_SpawnBoom3()
{
  
  if (frameCount % 420 == 0)  //60프레임 기준 20초
  {
  targets3.push(new target3()) 
  }
  
}

function Phase3_SpawnBoom3()
{
  
  if (frameCount % 420 == 0)  //60프레임 기준 20초
  {
  targets3.push(new target3()) 
  }
  
}

function Phase4_SpawnBoom3()
{
  
  if (frameCount % 360 == 0)  //60프레임 기준 20초
  {
  targets3.push(new target3()) 
  }
  
}

function Phase5_SpawnBoom3()
{
  
  if (frameCount % 300 == 0)  //60프레임 기준 20초
  {
  targets3.push(new target3()) 
  }
  
}


//spawn boom4
function Phase1_SpawnBoom4()
{
  
  if (frameCount % 420 == 0)  //60프레임 기준 20초
  {
  targets4.push(new target4()) 
  }
  
}


function Phase2_SpawnBoom4()
{
  
  if (frameCount % 360 == 0)  //60프레임 기준 20초
  {
  for(let i=0; i<2; i++)
  {
  targets4.push(new target4()) 
  }
  }
  
}

function Phase3_SpawnBoom4()
{
  
  if (frameCount % 360 == 0)  //60프레임 기준 20초
  {
    for(let i=0; i<3; i++)
    {
    targets4.push(new target4()) 
    }
  }
}

function Phase4_SpawnBoom4()
{
  
  if (frameCount % 360 == 0)  //60프레임 기준 20초
  {
  for(let i=0; i<4; i++)  
  {
  targets4.push(new target4()) 
  }
  }
}


function Phase5_SpawnBoom4()
{
  
  if (frameCount % 360 == 0)  //60프레임 기준 20초
  {
  for(let i=0; i<5; i++)  
  {
  targets4.push(new target4()) 
  }
  }
}



function Phase1_SpawnBoom5()
{
  
  if (frameCount % 600 == 0)  //60프레임 기준 20초
  {
  targets5.push(new target5()) 
  }
  
}


function Phase2_SpawnBoom5()
{
  
  if (frameCount % 480 == 0)  //60프레임 기준 20초
  {
  targets5.push(new target5()) 
  }
  
}


function Phase3_SpawnBoom5()
{
  
  if (frameCount % 480 == 0)  //60프레임 기준 20초
  {
  targets5.push(new target5()) 
  }
  
}


function Phase4_SpawnBoom5()
{
  
  if (frameCount % 420 == 0)  //60프레임 기준 20초
  {
  targets5.push(new target5()) 
  }
  
}


function Phase5_SpawnBoom5()
{
  
  if (frameCount % 360 == 0)  //60프레임 기준 20초
  {
  targets5.push(new target5()) 
  }
  
}



function BoomTriger()
{
  for(let i of targets)
  {
   if(w1.bulletNumber<1)
   {
    i.IsDead=true; 
   }
    
    if(w1.bulletNumber>1)
   {
    i.IsDead=false; 
   } 
   i.Update();
   i.Draw();
  
   }
  
}
  
  
  
  function BoomTriger2()
{
    
  for(let i of targets2)
  {
    if(w1.bulletNumber<0)
   {
    i.IsDead=true; 
   }
    
    if(w1.bulletNumber>0)
   {
    i.IsDead=false; 
   } 
   i.Update();
   i.Draw();
    
        
  }
 

  
}

 function BoomTriger3()
{
    
  for(let i of targets3)
  {
    if(w1.bulletNumber<0)
   {
    i.IsDead=true; 
   }
    
    if(w1.bulletNumber>0)
   {
    i.IsDead=false; 
   } 
   i.Update();
   i.Draw();
    
        
  }
 
}


 function BoomTriger4()
{
    
  for(let i of targets4)
  {
    if(w1.bulletNumber<1)
   {
    i.IsDead=true; 
   }
    
    if(w1.bulletNumber>0)
   {
    i.IsDead=false; 
   } 
   i.Update();
   i.Draw();
    
        
  }
 
}


function BoomTriger4_1()
{
    
  for(let i of targets4_1)
  {
    if(w1.bulletNumber<1)
   {
    i.IsDead=true; 
   }
    
    if(w1.bulletNumber>0)
   {
    i.IsDead=false; 
   } 
   i.Update();
   i.Draw();
    
        
  }
 
}

function BoomTriger5()
{
    
  for(let i of targets5)
  {
    if(w1.bulletNumber<1)
   {
    i.IsDead=true; 
   }
    
    if(w1.bulletNumber>0)
   {
    i.IsDead=false; 
   } 
   i.Update();
   i.Draw();
    
        
  }
 
}



 function DisplayHud()
{
  h1.Update();
  h1.Draw()    
  
}
  
function WeaponSystem1()
{
  w1.Update();
  w1.Draw();
}


function WeaponSystem2()
{
  w2.Update();
  w2.Draw(); 
}

function DisplayHoneytip()
{
  d1.Update();
  d1.Draw();
}


function DrawCrosshair()
{ 
  if(current_crosshair==1)
  {
  image(cross_hair,mouseX,mouseY,50,50)
  }
  
  if(current_crosshair==2)
  {
  image(cross_hair2,mouseX,mouseY,80,80)
  }
  
}

function Killall()
{
       for(let i of targets)
      {
        i.IsExploding=true;
      }
      
      for(let i of targets2)
      {
        i.IsExploding=true;
      }
      
       for(let i of targets3)
      {
        i.IsExploding=true;
      }
      
       for(let i of targets4)
      {
        i.IsExploding=true;
      }
     
      
       for(let i of targets4_1)
      {
        i.IsExploding=true;
      }
  
      for(let i of targets5)
      {
        i.IsExploding1=true;
      }
      
  
  
}
