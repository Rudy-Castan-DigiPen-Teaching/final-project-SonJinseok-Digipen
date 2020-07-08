/*Author : Jinseok Son
Assignment name :Final-Project 
Course : CS099
Semester : Spring-2020
*/




class button{
  
constructor(the_left=0,the_top=0,button_lable="Clicked Me")
  {
   this.left=the_left;
   this.top= the_top;
   this.width=200;
   this.height=50;
   this.label=button_lable;
   this.MouseIsOver=false;
   this.MousewasPressed=false;
  } 
  
  DrawButton()
  {
    
    push();
    let fill_color =0;
    let label_offset = 0;
    if (this.mouseIsOver) 
    {
     
      {
        fill_color = 60;
      }
    }
    fill(fill_color);

    translate(this.left, this.top);
    rect(0, 0, this.width, this.height);

    textAlign(CENTER, CENTER);
    fill('#f0801b');
    noStroke();
    textSize(30)
    text(this.label, this.width / 2, this.height / 2);

    pop();
           
  }
  
  DidClickedButton()
  {
    const left = this.left;
    const top = this.top;
    const right = left + this.width;
    const bottom = top + this.height;

    const within_x = mouseX > left && mouseX < right;
    const within_y = mouseY > top && mouseY < bottom;

    this.mouseIsOver = within_x && within_y;

    const clicked_it = this.mouseIsOver && this.mouseWasPressed && !mouseIsPressed;

    this.mouseWasPressed = mouseIsPressed;

    return clicked_it;
  }
  
  
  
}
