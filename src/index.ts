
import {PixiStart} from "./pixi-start/PixiStart";
import {ResizeManager} from "./common/ResizeManager";

window.onload = function() {
    console.log("snakegame");
    let lesson1=new PixiStart();
      lesson1.activate();

      document.getElementsByTagName('canvas')[0].style.top=(window.innerHeight-document.getElementsByTagName('canvas')[0].height)/2+'px';
      window.onresize = function(){let rm=new ResizeManager(lesson1);
      rm.resize();}
}




