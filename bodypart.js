function BodyPart(startingJoint,endingJoint,length) {
    this.startingJoint = startingJoint;
    this.endingJoint = endingJoint;
    this.length = length;


    this.draw = function() {
        endingJoint.x =  startingJoint.x + cos(startingJoint.arc) * length;
        endingJoint.y = startingJoint.y + sin(startingJoint.arc) * length;
        line(startingJoint.x, startingJoint.y, endingJoint.x, endingJoint.y);
        ellipse(startingJoint.x, startingJoint.y, 20, 20);
        ellipse(endingJoint.x, endingJoint.y, 5, 5);

    }


}