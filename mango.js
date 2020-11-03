class Mango{
    constructor(x,y,width,height){
      var options={
            isStatic:true
        }
      this.mango=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.mango);
      this.width=width;
      this.height=height;
      this.image=loadImage("mango.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.mango.position.x,this.mango.position.y,this.width,this.height);
    }
}