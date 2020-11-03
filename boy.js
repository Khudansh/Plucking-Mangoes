class Boy{

    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.boy=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.boy);
        this.width=width;
        this.height=height;
        this.image=loadImage("boy.png");
        this.image.scale=0.3;

    }

    display(){
      imageMode(CENTER)
      image(this.image,this.boy.position.x,this.boy.position.y);
    }
}