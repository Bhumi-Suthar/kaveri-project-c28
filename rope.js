class Rope {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    attach(newBodyA){
        this.rope.bodyA = newBodyA;
    }

    display(){

        if(this.rope.bodyA) {
            var pointA = this.bodyA.position;
            strokeWeight(2);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }

    
}