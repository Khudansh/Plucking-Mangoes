class Stone{

    constructor(x,y,width,height){
      var options={
          isStatic:true
      }

      this.stone=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.stone);
      this.image=loadImage("stone.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.stone.position.x,this.stone.position.y,this.width,this.height);

    }
}