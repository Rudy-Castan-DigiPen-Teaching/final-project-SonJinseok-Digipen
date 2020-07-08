# Programming Concept

Author Jinseok Son

course :CS099

### Shapes

P5.js provide its own function to draw shapes such as circular square arcs.

Programmers can draw shapes with different attributes by changing the parameter values of the function that draws the shapes.  

Using shapes is very important. Because if we can't use shapes to draw objects, it's very difficult to draw objects that we want to draw.

code snippet

```
   push();
   rectMode(CORNER)
   fill(255,0,0);
   rect(this.haahthbarleft+15,this.healthbartop+5,this.healthbarwidth,50);
   pop();
```



### Colors

In P5.js, colors are expressed in RGB values or in hexadecimal numbers.  and css style

If programmer assigned a color to the value of RGB, programmer can use the fill() function to fill in the color in the following format. fill(red,green,blue) The value in red,green,blue must have a value between 0 and 255.  

Programmers can also use color as a hexadecimal value.  For example, you can use it like 
'#000000',  

Programmers can also use color as a css style. For example like '#Ivory' 

4th parameter of  fill() decide  color transparency 

```
Draw()
  {
    for(let i=0; i<this.particles.length; i++)
    {
    if(this.particles[i].IsDead)
    
     return; 
    }
      
    for(let i=0; i<this.particles.length; i++)
    {
      push();
      let posx=this.particles[i].position.x;
      let posy=this.particles[i].position.y;
    fill('#498598');
    rect(posx,posy,10,8);
      pop();
    }
```



#### Variables

Variables are space for storing data In P5.js. Variables can store data such as numbers and letters true or false array.  Generally the variable only works within the enclosed range of {}.

However, if a global variable is declared, it will work anywhere, regardless of the area of {}.

In P5.js, the variables declared before the setup() function became global variables.

To use variables in P5.JS, programmers must declare them. To declare a variable, programmers must use the let or var keyword.

Programmers must named the variable after Programmers use the var or let keyword.    

For example like let CS099;    

After the variable is named, programmers need to decide which data to store in the variable.

Using variables is very important. Because if we use variables, we just use variables whenever we have to use the same values. Using variables makes code less complex.

Variable can store any value;

```
let time=0;
let timeElapsed=0;
let isDead=false;
let targets2=[];
let targets3=[];
let targets4=[];
let targets4_1=[];
let targets5=[];
```



### Conditional Statements

The conditional statement determines in which situation the code will run. P5.JS has 3 conditional  statements. If,  if-else if, switch

By using conditional statements ,we can make our code logical    

Conditional statement executes the code in the parentheses of the conditional statement if the condition is true, and skips the code if the condition is false 

Double conditional statements are also frequently used. Double conditional statement is a conditional statement that is  executed only when both conditions are true 

The switch conditional statement executes the code for each case if each case is true 

else if conditional statement is an extension of the if statement 

conditional statement only executes when the condition is true

```
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
```

   



### Loop  

Loop  allow programmers to repeat code as many times as they want.

In p5.js we usually use two loops . For loop and while loop 

By using loop, we can prevent the indiscriminate spamming of certain codes.

To use for loop programmer need to decide staring point of the loop and end point of the loop  

After setting the start and end point the code in  parentheses is finally executed

When the conditional expression of while statement is true the code in  parentheses is executed

When programmers make a for loop of while loop , programmers must set the conditions well so that no infinite loop occurs

```
  for(let i=0; i<5; i++)  
  {
  targets4.push(new target4()) 
  }
```



### Function

There are two functions in p5.js. Functions created by p5.js for users and functions created by programmers themselves.  Functions such as frameRate() shape() map() are functions created by p5.js to facilitate programmers' convenience. but  Programmers also can make codes for their own convenience.

```
function  Hello ()
{
 console.log("Hello");
return false;
 }
```

this is a Example of a function created by a programmer

When programmer first declare a function, programmers must use the function keyword and programmers have to named the function and decide parameter of function 

name of function cannot be keyword name. for example circle, rect noFill

The parameters of the function determine how the function will behave.

If the parameter of a function is set, programmers can use it as a variable inside the function.

If a function's return value is set, the function is run and returns that value.

It is important to use a function. Because programmers have to make and use functions that are not supported by p5.js.

programmers can increase the efficiency of code by making the function well.

```
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
```





### Class

A class is a collection of variables and functions that have the same concept. By using classes, we can easily manage variables and functions  with the same properties.

To use the class, constructor() must be declared in the class.

The constructor() stores data that will be used like variables in the class.

in the constructor(), you can store everything, such as number, string ,Boolean,array, functions,other class

The class method is a function created with the variables declared in the class construct.

To use the class, programmers must create an instance of the class. If an instance of a class is not created, class cannot be used.

The method of the class can also be a parameter of the function.

During this final project, I thought that if I make the class well, I can make the code very efficiently.

```
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
```







### Array

Array is the type of data used to collect and manage the associated data.

Arrays can store any kind of data.

The two-dimensional array is the re-declaration of the array for each element of the one-dimensional array.

Array allows programmers to effectively manage many kinds of variables.

It prevents the arrangement. Programmers spam the same type of variable.

I will use Array in my game project for make many particles 

There are some special methods for array in p5.js for example .push .splice

this special method make programmers can easily control array 

```
 for(let i=0; i<length; i++)
    {
    this.particles.push(new particle());
    }
```



