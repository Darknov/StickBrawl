var joint1 = new Joint(500,380);
var joint2 = new Joint();
var joint3 = new Joint();
var joint4 = new Joint();
var joint5 = new Joint();
var joint6 = new Joint();
var joint7 = new Joint();
var joint8 = new Joint();


var acceleration = 0;
var element1 = new BodyPart(joint1,joint2,60,0 + Math.PI/4);
var element2 = new BodyPart(joint1,joint3, 60, 3*Math.PI/4);

var element3 = new BodyPart(joint2,joint4,40,0 + Math.PI/4);
var element4 = new BodyPart(joint2,joint5, 40, 3*Math.PI/4);

var element5 = new BodyPart(joint3,joint6,40,0 + Math.PI/4);
var element6 = new BodyPart(joint3,joint7, 40, 3*Math.PI/4);

var element7 = new BodyPart(joint7,joint8, 50, 3*Math.PI/4);


var pointsX = [];
var pointsY = [];

function setup() {
    createCanvas(1366, 768);
    
    background('gray');
}

function draw() {
    background('gray');
    joint1.arc += 0.01;
    joint2.ownArc -=0.01;
    element1.draw();
    element2.draw();
        element3.draw();
    element4.draw();
        element5.draw();
    element6.draw();
    element7.draw();

    //acceleration += 0.000001 + 0.000001 * acceleration;
}