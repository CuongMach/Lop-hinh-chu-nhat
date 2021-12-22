class Rectangle{
    x;
    y;
    width;
    height;
    constructor(x,y,width,height) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    getArea(){
        return this.width*this.height
    }
    getPerimeter(){
        return (this.width+this.height)*2
    }
}