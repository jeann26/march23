var cWidth = 1000;
var cHeight = 1000;
var i = 0; 



function setup(){
    createCanvas (cWidth,cHeight);
    background (61, 145, 58);
    frameRate(30);
    angleMode(DEGREES);
    frameRate(30);
    createLoop({duration:3, gif:true})

}

function draw() {

push();
noFill();
stroke(132, 245, 66);
ellipse (cWidth / 2 , cHeight / 2 , 100 + (i * 50), 500) 
i++; 
pop();

push();
noFill();
stroke(132, 245, 66);
ellipse (cWidth / 1 , cHeight / 1 , 60 + (i * 200), 500) 
i++; 
pop();

push();
noFill();
stroke(132, 245, 66);
ellipse (cWidth / -1 , cHeight / 90 , 60 + (i * 90), 500) 
i++; 
pop();

translate (100,850);
fill(225, 252, 88);
text("C",0,0);
textSize (1000);





if(millis() % 2000 > 0 && millis() % 2000 < 100){
restart();
}
console.log(millis());

}

function restart(){
    i = 0;
    setup();
}