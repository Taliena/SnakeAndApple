import {SnakePart} from "./SnakePart";
import Container = PIXI.Container;
import {Apple} from "./Apple";
import {Config} from "./Config";


export class Snake {
    public partList: Array<SnakePart> = [];
    public parent: Container;
    public apple: Apple;
    public direction: string;
    public app:PIXI.Application;

    constructor(parent: Container, apple: Apple, app:PIXI.Application) {
        this.parent = parent;
        this.app=app;
        this.partList.push(new SnakePart(true));
        this.partList.push(new SnakePart(false));
        this.partList.push(new SnakePart(false));
        this.partList.push(new SnakePart(false));
        let i = 0;
        for (let part of this.partList) {
            part.draw();
            part.x = 200;
            part.y = 200 + i * part.height;
            i++;
            this.parent.addChild(part);
        }
        this.apple = apple;


    }

    public move(direction: string) {
        for (let i = this.partList.length - 1; i > 0; i--) {
            this.partList[i].x = this.partList[i - 1].x;
            this.partList[i].y = this.partList[i - 1].y;
        }
        switch (direction) {
            case 'left':
                this.partList[0].x -= this.partList[0].width;
                this.direction = "left";
                break;
            case 'right':
                this.partList[0].x += this.partList[0].width;
                this.direction = "right";
                break;
            case 'up':
                this.partList[0].y -= this.partList[0].height;
                this.direction = "up";
                break;
            case 'down':
                this.partList[0].y += this.partList[0].height;
                this.direction = "down";
                break;
        }
        this.check();
        this.endGame();

    }

    public check() {
        if (this.partList[0].x > this.apple.x && this.partList[0].x < (this.apple.x + this.apple.width) && this.partList[0].y > this.apple.y && this.partList[0].y < (this.apple.y + this.apple.height)) {
            this.apple.generateNewPosition();
            this.addNewPart();
        }

    }

    public addNewPart() {
        this.partList.push(new SnakePart(false));
        this.partList[this.partList.length - 1].draw();
        this.parent.addChild(this.partList[this.partList.length - 1]);
        switch (this.direction) {
            case 'left':
                this.partList[this.partList.length - 1].x = this.partList[this.partList.length - 2].x - this.partList[this.partList.length - 2].width;
                this.partList[this.partList.length - 1].y = this.partList[this.partList.length - 2].y;
                break;
            case 'right':
                this.partList[this.partList.length - 1].x = this.partList[this.partList.length - 2].x + this.partList[this.partList.length - 2].width;
                this.partList[this.partList.length - 1].y = this.partList[this.partList.length - 2].y;
                break;
            case 'up':
                this.partList[this.partList.length - 1].x = this.partList[this.partList.length - 2].x;
                this.partList[this.partList.length - 1].y = this.partList[this.partList.length - 2].y + this.partList[this.partList.length - 2].height;
                break;
            case 'down':
                this.partList[this.partList.length - 1].x = this.partList[this.partList.length - 2].x;
                this.partList[this.partList.length - 1].y = this.partList[this.partList.length - 2].y + this.partList[this.partList.length - 2].height;
                break;
        }
    }
    public endGame(){
        if (this.partList[0].x<=0||this.partList[0].y<=0||this.partList[0].x+this.partList[0].width>=1270||this.partList[0].y+this.partList[0].height>=720){console.log('Game over');

            //this.app.renderer.backgroundColor = 0xff0000;
            this.parent.removeChild(this.apple);
            let i = 0;
            for (let part of this.partList) {
                part.draw();
                part.x = 200;
                part.y = 200 + i * part.height;
                i++;
                this.parent.removeChild(part);
            }
        }
    }
}