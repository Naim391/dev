/* Declaration des variables necessaires au programme */
var positionX;

function setup() {
    createCanvas(300, 300);
    positionX = 0; 
    angleMode(DEGREES);
}


function draw(){ 
    background(-5) ; 
    square(positionX,128,50);  
    positionX = positionX +6;
   
}
        