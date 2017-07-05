var joint1 = new Joint(300,300);
var joint2 = new Joint();
var joint3 = new Joint();
var joint4 = new Joint();
var joint5 = new Joint();
var joint6 = new Joint();
var element1 = new BodyPart(joint1,joint2,40);
var element2 = new BodyPart(joint2,joint3, 80);
var element3 = new BodyPart(joint3,joint4, 30);
var element4 = new BodyPart(joint4,joint5, 50);
var element5 = new BodyPart(joint5,joint6, 60);

function setup() {
    createCanvas(1366, 768);
    
    background('gray');
}

function draw() {
    background('gray');
    joint1.arc += 0.02;
    joint2.arc += 0.05;
    joint3.arc += 0.01;
    joint4.arc += 0.03;
    joint5.arc += 0.1;
    element1.draw();
    element2.draw();
    element3.draw();
    element4.draw();
    element5.draw();
}