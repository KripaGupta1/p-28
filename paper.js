class Paper {
    constructor(x,y,radius){
        var options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2 
        }

        this.pa = loadImage("sprites/paper.png");
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        image(this.pa,paperObject.x,paperObject.y);
        var pos = this.body.position;
        var angle = this.body.angle;
        fill(255,0,128);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}