import {type} from "os";
import Graphics = PIXI.Graphics;
import {Keyboard} from "../common/Keyboard";
import {Key} from "../common/Key";
import {Apple} from "../common/Apple";
import {Snake} from "../common/Snake";
import {Config} from "../common/Config";

export class PixiStart {
    public app: PIXI.Application;
    //public cat:PIXI.Sprite;
    public rectangle: Graphics;
    public left: Keyboard;
    public x: number;
    public stepX: number = 0;
    public stepY: number = 0;
    public apple: Apple;
    public snake: Snake;
    public direction: string = "down";
    public itterationCounter: number = 0;
    public width:number;
    public height:number;


    public activate() {
        let type = "WebGL"
        if (!PIXI.utils.isWebGLSupported()) {
            type = "canvas"
        }
        PIXI.utils.sayHello(type);

        this.blackSquare();
        this.width=document.getElementsByTagName('canvas')[0].width;
        this.height=document.getElementsByTagName('canvas')[0].height;




    }

    public blackSquare() {
        //Create a Pixi Application
        this.app = new PIXI.Application({width:Config.SCENEWIDTH, height:Config.SCENEHEIGHT});
        this.width=this.app.renderer.width;
        this.height=this.app.renderer.height;

        //Add the canvas that Pixi automatically created for you to the HTML document
        document.body.appendChild(this.app.view);
        this.app.renderer.backgroundColor = 0x061639;
        PIXI.loader
            .add("/assets/images/apple.png")
            .load(this.setup.bind(this));


    }



    public setup() {
        //this.cat = new PIXI.Sprite(PIXI.loader.resources["/assets/images/cat.png"].texture);
        this.apple = new Apple();
        this.apple.generateNewPosition();
        //this.app.stage.addChild(this.cat);
        this.rectangle = new Graphics();
        this.rectangle.lineStyle(4, 0xFF3300, 1);
        this.rectangle.beginFill(0x66CCFF);
        this.rectangle.drawRect(60, 0, 64, 64);
        this.rectangle.endFill();
        this.snake = new Snake(this.app.stage, this.apple, this.app);

        //this.app.stage.addChild(this.rectangle);
        this.app.stage.addChild(this.apple);
        this.app.ticker.add(delta => this.gameLoop(2));


        //Capture the keyboard arrow keys
        let left = this.keyboard("ArrowLeft"),
            up = this.keyboard("ArrowUp"),
            right = this.keyboard("ArrowRight"),
            down = this.keyboard("ArrowDown");


        //Left arrow key `press` method
        left.press = () => {
            //Change the cat's velocity when the key is pressed
            this.stepX = -5;
            this.stepY = 0;
            setInterval(this.snake.move("left"), 200);
            this.direction = "left";

        };

        //Left arrow key `release` method
        left.release = () => {
            //If the left arrow has been released, and the right arrow isn't down,
            //and the cat isn't moving vertically:
            //Stop the cat
            if (!right.isDown && this.stepY === 0) {
                this.stepX = 0;
            }
        };

        //Up
        up.press = () => {
            this.stepY = -5;
            this.stepX = 0;
            this.snake.move("up");
            this.direction = "up";

        };
        up.release = () => {
            if (!down.isDown && this.stepX === 0) {
                this.stepY = 0;
            }
        };

        //Right
        right.press = () => {

            this.snake.move("right");
            this.direction = "right";


        };
        /* right.release = () => {
             if (!left.isDown&&this.stepY===0) {
                 this.stepX = 0;
             }
         };*/

        //Down
        down.press = () => {
            this.stepY = 5;
            this.stepX = 0;
            this.snake.move("down");
            this.direction = "down";

        };
        /* down.release = () => {
             if (!up.isDown && this.stepX === 0) {
                 this.stepY = 0;
             }

         };*/


    }

    public keyboard(value) {
        let key = new Key();
        key.value = value;
        key.isDown = false;
        key.isUp = true;
        key.press = undefined;
        key.release = undefined;
        //The `downHandler`
        key.downHandler = event => {
            if (event.key === key.value) {
                if (key.isUp && key.press) key.press();
                key.isDown = true;
                key.isUp = false;
                event.preventDefault();
            }
        };

        //The `upHandler`
        key.upHandler = event => {
            if (event.key === key.value) {
                if (key.isDown && key.release) key.release();
                key.isDown = false;
                key.isUp = true;
                event.preventDefault();
            }
        };

        //Attach event listeners
        const downListener = key.downHandler.bind(key);
        const upListener = key.upHandler.bind(key);

        window.addEventListener(
            "keydown", downListener, false
        );
        window.addEventListener(
            "keyup", upListener, false
        );

        // Detach event listeners
        key.unsubscribe = () => {
            window.removeEventListener("keydown", downListener);
            window.removeEventListener("keyup", upListener);
        };

        return key;
    }


    public gameLoop(delta) {
        if (this.itterationCounter == 10) {
            this.snake.move(this.direction);
            this.itterationCounter = 0;
        }
        this.itterationCounter++;


    }

}



