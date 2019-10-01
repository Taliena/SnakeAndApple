import {PixiStart} from "../pixi-start/PixiStart";
import {Config} from "./Config";

export class ResizeManager{
    public x:number;
    public parent:PixiStart;
    public windowWidth:number;
    public windowHeight:number;
    constructor(parent:PixiStart){
        this.parent=parent;
    }
    public resize(){
        this.x=Config.SCENEHEIGHT/Config.SCENEWIDTH;
        if (window.innerWidth<1270){
        this.windowWidth=window.innerWidth;
        document.getElementsByTagName('canvas')[0].width=this.windowWidth;
        this.windowHeight=this.windowWidth*this.x;
        document.getElementsByTagName('canvas')[0].height=this.windowWidth*this.x;
        document.getElementsByTagName('canvas')[0].style.position='absolute';

        }
        else{
            this.windowWidth=1270;
            document.getElementsByTagName('canvas')[0].width=1270;
            this.windowHeight=720;
            document.getElementsByTagName('canvas')[0].height=720;
        }
        document.getElementsByTagName('canvas')[0].style.top=(window.innerHeight-document.getElementsByTagName('canvas')[0].height)/2+'px';
        this.parent.app.renderer.resize(this.windowWidth, this.windowHeight );
    }

}