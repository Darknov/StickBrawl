var joint1 = new Joint(683,384);
var joint2 = new Joint();
var joint3 = new Joint();
var joint4 = new Joint();
var joint5 = new Joint();
var joint6 = new Joint();
var acceleration = 0;
var element1 = new BodyPart(joint1,joint2,40);
var element2 = new BodyPart(joint2,joint3, 80);
var element3 = new BodyPart(joint3,joint4, 50);
var element4 = new BodyPart(joint4,joint5, 100);
var element5 = new BodyPart(joint5,joint6, 80);

var pointsX = [];
var pointsY = [];

function setup() {
    createCanvas(1366, 768);
    
    background('gray');
}

function draw() {
    background('gray');
    joint1.arc += 0.01;
    joint2.arc += 0.02;
    joint3.arc += 0.03;
    joint4.arc += 0.04;
    joint5.arc += 0.3;
    element1.draw();
    element2.draw();
    element3.draw();
    element4.draw();
    element5.draw();
    pointsX.push(joint6.x);
    pointsY.push(joint6.y);
    for(var i = 1; i < pointsX.length; i++) {
        line(pointsX[i-1],pointsY[i-1],pointsX[i],pointsY[i]);
    }
    //acceleration += 0.000001 + 0.000001 * acceleration;
}