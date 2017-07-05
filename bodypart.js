function BodyPart(startingJoint,endingJoint,length,arc = 0) {
    this.startingJoint = startingJoint;
    this.endingJoint = endingJoint;
    this.arc = arc;
    this.length = length;


    this.draw = function(ob = this) {
        endingJoint.arc = endingJoint.ownArc + startingJoint.arc;
        endingJoint.x =  startingJoint.x + cos(startingJoint.arc + ob.arc) * length;
        endingJoint.y = startingJoint.y + sin(startingJoint.arc + ob.arc) * length;
        
        line(startingJoint.x, startingJoint.y, endingJoint.x, endingJoint.y);
        ellipse(startingJoint.x, startingJoint.y, 10, 10);
        ellipse(endingJoint.x, endingJoint.y, 5, 5);

    }


}