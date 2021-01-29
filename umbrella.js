class umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
                }

        this.body = Bodies.circle(x,y,160,options);
        this.image = loadImage("walking_1.png");
        World.add(world,this.body);
    }

    display(){
     push();
     translate(this.body.position.x,this.body.position.y);
     imageMode(CENTER);
     image(this.image,0,0,220);
     pop();
    }
}