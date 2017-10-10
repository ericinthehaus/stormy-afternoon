var xpos= 50;
var ypos=  0;
var xsize = 20;

var ground=0;

var num;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {

    background(50);
 
    
    fill(200);
    ellipse (0,0, 600,200);
    ellipse (550,0, 700,300);
    ellipse (windowWidth, 0, 400,200);
    fill (130,160,5);
    rect (-10, windowHeight-100, windowWidth+20, 300);
    
    

    num= random(0,windowWidth);
    
    
    fill(0, 0, 255);  
    
    ellipse(xpos, ypos, size, size);
    
    ypos= ypos +50;
    xpos= xpos-7;

    if(ypos >= windowHeight){
        
        ypos=0;
        xpos= num;
        size= random (10, 30);
    }
    
}
