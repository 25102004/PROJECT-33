class Snow {

constructor(x,y,r){

    var options = {

    restitution: 0.5,
    density: 2,
    friction: 2
    
    };

  this.x = x;
  this.y = y;
  this.r = r;
  this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
  World.add(world,this.body);
  this.image = loadImage("snow4.webp");


}

display(){

var snowpos = this.body.position;
push();
translate(snowpos.x,snowpos.y);
rectMode(CENTER);
fill(255,0,255);
imageMode(RADIUS);
image(this.image,0,0,this.r*2,this.r*2);
pop();

}

}