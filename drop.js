class drop{
    constructor(x,y){
       var options = {
           isStatic:false,
           friction:0.001,
           restitution:0.1
               }
        this.rain = Bodies.circle(x,y,2.5,options);
        World.add(world,this.rain);
    }
updateDrop(){
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}
    display(){
        fill("blue");
        push();
        translate(this.rain.position.x,this.rain.position.y);
        ellipseMode(CENTER);
        ellipse(0,0,5);
        pop();
    }
}