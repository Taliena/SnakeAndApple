import {Key} from "./Key";

export class Keyboard{
    public key: Key;
    public keyboard(value) {
        let key = new Key();
        key.value = value;
        key.isDown = false;
        key.isUp = true;

    }

   public RegisterKeyPress(input: string){
            document.getElementById(input).addEventListener('keypress', (e: KeyboardEvent) =>{
                console.log(e.keyCode);
            });
        }








        //The `downHandler`
        /*key.downHandler = event => {
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
    }*/
}