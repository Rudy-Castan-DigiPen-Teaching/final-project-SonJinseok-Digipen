class playerHud
{
 constructor()
 {
  this.healthpoint=100;
  this.left=0;
  this.top=0;
  this.width=505;
  this.height=220;
  this.haahthbarleft=170;
  this.healthbartop=25;
  this.healthbarwidth=300;
  this.healthbarheight=50;
  this.timer=0;
  this.score=0;
 
 }
  
 Update()
  {
    
    if(this.healthpoint<0)
    {
      Killall(); 
      current_sense=Lose_Screen; 
      
    }
    
     if(this.healthpoint>=100)
    {
      
     this.healthpoint=100; 
    
    }
   
    
   //health 
   for(let i=0; i<targets.length; i++)
   {
    
     if(targets[i].IsExploding==false)
     {
        this.healthpoint= this.healthpoint-0.01;
        
        
     }
     
       if(targets[i].IsExploding==true)
     {
        this.healthpoint= this.healthpoint+0;
          
     }
 
   
        
    
     

   }
    
    
    //health
   for(let i=0; i<targets2.length; i++)
   {
    
     if(targets2[i].IsExploding==false)
     {
        this.healthpoint= this.healthpoint-0.01;
     }
     
       if(targets2[i].IsExploding==true)
     {
        this.healthpoint= this.healthpoint+0;
       
     }
 
     

   }  
    
   
      for(let i=0; i<targets3.length; i++)
   {
    
     if(targets3[i].IsExploding==false)
     {
        this.healthpoint= this.healthpoint-0.01;
     }
     
       if(targets3[i].IsExploding==true)
     {
        this.healthpoint= this.healthpoint+0;
       
     }
 
     

   } 
    
    for(let i=0; i<targets4.length; i++)
   {
    
     if(targets4[i].IsExploding==false)
     {
        this.healthpoint= this.healthpoint-0.01;
     }
     
       if(targets4[i].IsExploding==true)
     {
        this.healthpoint= this.healthpoint+0;
       
     }
 
     

   } 
    
    
    
    
    
     for(let i=0; i<targets4_1.length; i++)
   {
    
     if(targets4_1[i].IsExploding==false)
     {
        this.healthpoint= this.healthpoint-0.01;
     }
     
       if(targets4_1[i].IsExploding==true)
     {
        this.healthpoint= this.healthpoint+0;
       
     }
 
     

   } 
    
    
        
    
    
    
    
    
    
    //time   
  this.healthbarwidth=map(this.healthpoint,100,0,300,0);
 
     
  if (frameCount % 60 == 0 && this.timer >=0) 
  { 
    this.timer=this.timer+1;
  }  
    
  }
  
  Draw()
  {
    push();
    noStroke();
    fill('#45a6e3');
    
    textSize(30);
    pop();
    text("PLAYER HP ",10,65);
    text("Time :",10,120);
    text(this.timer,120,120);
    text(this.score,190,120);
    if(w1.bulletNumber<=1)
    {
    textSize(40);
    push();
    fill(255,0,0);
    text("No bullet",5,190);
    pop();
    }
   push();
   rectMode(CORNER)
   fill(255,0,0);
   rect(this.haahthbarleft+15,this.healthbartop+5,this.healthbarwidth,50);
   pop();
    
  }
  
} 