var joint1 = new Joint(300,300);
var joint2 = new Joint();
var joint3 = new Joint();
var element1 = new BodyPart(joint1,joint2,40);
var element2 = new BodyPart(joint2,joint3, 80);

function setup() {
    createCanvas(1366, 768);
    
    background('gray');
}

function draw() {
    background('gray');
    joint1.arc += 0.02;
    joint2.arc += 0.05;
    element1.draw();
    element2.draw();
}