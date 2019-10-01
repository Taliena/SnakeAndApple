import Graphics = PIXI.Graphics;
import Container = PIXI.Container;

export class SnakePart extends Container{
    public isHead:boolean;
    public graphic:Graphics;

    constructor(isHead){
        super();
        this.graphic=new Graphics();
        this.addChild(this.graphic);
        this.isHead=isHead;
        this.height=20;
        this.width=20;

    }
    public draw(){
        this.graphic.clear();
        this.graphic.lineStyle(4, 0xFF3300, 1);
        this.graphic.beginFill(this.isHead ? 0xff0000 : 0x66CCFF);
        this.graphic.drawRect(0, 0, 20, 20);
        this.graphic.endFill();

    }
}