
import Actor from "./actor";
import KozakM from "../model/kozak";
import StoneM from "../model/stone";
import DonateM from "../model/donate";
import NavalniyM from "../model/navalniy";
import ShotM from "../model/shot";
import UsmanovM from "../model/usmanov";
import Box from "../model/box";
import Sign from "../model/sign";
import DoshikM from "../model/doshik";


export default class Hit extends Actor {


    interaction(model1, model2) {
        if (model1 instanceof NavalniyM) {
            if (model2 instanceof StoneM) {

                if ((Math.abs(model1.pos.x - model2.pos.x) < 160) && model1.pos.y > 300) {
                    model1.onStoneJump();
                }
            }
            else if ((model2 instanceof KozakM)&&(model2.hit ===0)) {
                if ((Math.abs(model1.pos.x - model2.pos.x) < 50) && (Math.abs(model1.pos.y - model2.pos.y) < 50)) {
                    model1.life--;
                    this.map =  this.map.slice(this.map.indexOf(model2));
                    model1.life = Math.max(model1.life, 0);
                    model2.hit = 1;
                    model2.size = {x:0,y:0};
                }
            }
            else if ((model2 instanceof DonateM)&&(model2.hit ===0)) {
                if ((Math.abs(model1.pos.x - model2.pos.x) < 50) && (Math.abs(model1.pos.y - model2.pos.y) < 50)) {
                    model1.load++;
                    model1.load = Math.min(model1.load, 4);
                    model2.hit = 1;
                    this.map.splice(this.map.indexOf(model2),1);
                    model2.size = {x:0,y:0};
                }

            }
            else if ((model2 instanceof UsmanovM)) {
                if ((Math.abs(model1.pos.x - model2.pos.x) < 150) && (Math.abs(model1.pos.y - model2.pos.y) < 450)&&(model2.life>0)) {
                    model1.life--;
                }
            }
            else if(model2 instanceof Box){
                if((Math.abs(model2.pos.y - model1.pos.y)<50)&&(Math.abs(model2.pos.x - model1.pos.x)<70)) {
                    if((model2.pos.x - model1.pos.x)<0) {
                        model1.pos.x = model2.pos.x + 70;
                    }
                    else if((model2.pos.x - model1.pos.x)>0) {
                        model1.pos.x = model2.pos.x - 70;
                    }
                }
                else if ((Math.abs(model1.pos.x - model2.pos.x) < 70) && (model1.pos.y > 250)&& (model1.direction.y !== -6)) {
                    model1.pos.y = Math.max(model1.pos.y, 300);
                }
            }
            else if ((model2 instanceof Sign)) {
                if ((Math.abs(model1.pos.x - model2.pos.x) < 50) && (Math.abs(model1.pos.y - model2.pos.y) < 50)&&(model2.life>0)) {
                    model1.sg++;
                    model2.life = 0;
                    model2.size = {x:0,y:0};
                    this.map.splice(this.map.indexOf(model2),1);
                }
            }
            else if ((model2 instanceof DoshikM)) {
                if ((Math.abs(model1.pos.x - model2.pos.x) < 50) && (Math.abs(model1.pos.y - model2.pos.y) < 50)&&(model2.life >0)) {
                    model1.life++;
                    model1.life = Math.min(model1.life,3);
                    model2.life = 0;
                    this.map.splice(this.map.indexOf(model2),1);

                }
            }
          /*  else if(model2 instanceof Button) {
                if((Math.abs(model1.pos.x-model2.pos.x)<30)&&(Math.abs(model1.pos.y-model2.pos.y)<51)&&(model1.direction.y === 6)){
                    model2.activated = 1;
                   // debugger;

                }
            }*/
        }
        else if(model1 instanceof ShotM){
         if ((model2 instanceof KozakM)&&(model2.hit ===0)&&(model1.isHert === 1)) {
                if ((Math.abs(model1.pos.x - model2.pos.x) < 50) && (Math.abs(model1.pos.y - model2.pos.y) < 50)&&(model1.life === 3)) {
                    model1.life--;
                    model1.life = Math.max(model1.life, 0);
                    model2.hit = 1;
                    this.map =  this.map.slice(this.map.indexOf(model2));
                    this.map =  this.map.slice(this.map.indexOf(model1));
                    model2.size = {x:0,y:0};
                    model1.size = {x:0,y:0};
                }
            }
           else if ((model2 instanceof UsmanovM)&&(model1.isHert ===1)) {
                if ((Math.abs(model1.pos.x - model2.pos.x) < 50) && (Math.abs(model1.pos.y - model2.pos.y) < 500)&&(model1.life === 3)) {
                    model2.life --;
                    model1.hit = 1;
                    model1.size = {x:0,y:0};
                    this.map =  this.map.slice(this.map.indexOf(model1));
                }
            }
           else if ((model2 instanceof NavalniyM)&&(model1.isHert ===2)) {
             if ((Math.abs(model1.pos.x - model2.pos.x) < 50) && (Math.abs(model1.pos.y - model2.pos.y) < 500)&&(model1.life === 3)) {
                 model2.life --;
                 this.map =  this.map.slice(this.map.indexOf(model1));
             }
           }
        }
    }
}