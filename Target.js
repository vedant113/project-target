class Target{
    constructer(x,y){
        var options = {
            // isStatic: false,
            restitution:1,
            friction:2,
            density:4
            }
            this.body = Bodies.circle(x,y,25,options);
            World.add(world,this.body);

    }
    display(){
        push();
        translate (this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0,0,25,25);
        pop();
        }
}