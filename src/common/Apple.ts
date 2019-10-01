export class Apple extends PIXI.Sprite{
    constructor(){
        super(PIXI.loader.resources["/assets/images/apple.png"].texture);
        this.width=50;
        this.height=50;
    }
    public generateNewPosition(){
        this.x=Math.random()*(document.getElementsByTagName('canvas')[0].width-this.width);
        this.y=Math.random()*(document.getElementsByTagName('canvas')[0].height-this.height);
    }


}