var joint1 = new Joint(350,350);
var joint2 = new Joint();
var joint3 = new Joint();
var joint4 = new Joint();
var joint5 = new Joint();
var joint6 = new Joint();
var joint7 = new Joint();




var element1 = new BodyPart(joint1,joint2,60,0 + Math.PI/4);
var element2 = new BodyPart(joint2,joint3,60,0 + Math.PI/4);
var element3 = new BodyPart(joint3,joint4,60,0 + Math.PI/4);
var element4 = new BodyPart(joint4,joint5,60,0 - Math.PI/4);
var element5 = new BodyPart(joint4,joint6,60,0 + Math.PI/4);
var element6 = new BodyPart(joint6,joint7,20,0 + Math.PI/4);
var points1 = [];
var points2 = [];
var points3 = [];

function setup() {
    createCanvas(700, 700);
    
    background('gray');
}

function draw() {
    background('gray');
    joint1.arc += 0.001;
    joint2.ownArc -=0.05;
    //joint3.ownArc += 0.005;
    //joint3.ownArc +=0.1;
    //element4.arc += 0.1;
    //element5.arc -= 0.1;
    //element6.arc += 50;
    element1.draw();
    element2.draw();
    element3.draw();
    //element4.draw();
    element5.draw();
    //element6.draw();

    //points1.push({x: joint5.x, y: joint5.y});
    points2.push({x: joint6.x, y: joint6.y});
    //points3.push({x: joint7.x, y: joint7.y});

    for(var i = 1; i < points2.length; i++) {
        //line(points1[i-1].x, points1[i-1].y, points1[i].x,points1[i].y)
        line(points2[i-1].x, points2[i-1].y, points2[i].x,points2[i].y);
        //line(points3[i-1].x, points3[i-1].y, points3[i].x,points3[i].y);
    }


}