
import Actor from "./actor";

import KozakM from "../model/kozak";

import StoneM from "../model/stone";

import DonateM from "../model/donate";

import NavalniyM from "../model/navalniy";
import ShotM from "../model/shot";

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
                    model1.life = Math.max(model1.life, 0);
                    model2.hit = 1;
                    model2.size = {x:0,y:0};
                  //  debugger;
                }
            }
            else if ((model2 instanceof DonateM)&&(model2.hit ===0)) {
                if ((Math.abs(model1.pos.x - model2.pos.x) < 50) && (Math.abs(model1.pos.y - model2.pos.y) < 50)) {
                    model1.load++
                    model1.load = Math.min(model1.load, 4);
                    model2.hit = 1;
                    model2.size = {x:0,y:0};
                }
            }

            /*    for (let i = 2; i < this.map.length; i++) {
                    if (this.map[i].name === "newkazak") {
                        if ((Math.abs(this.map[1].pos.x - this.map[i].pos.x) < 50) && (Math.abs(this.map[1].pos.y - this.map[i].pos.y) < 50)) {
                            this.map[1].life--;
                            this.map[1].life = Math.max(this.map[1].life,0);
                            this.map[i].name = "neutral";
                            this.map[i].hit = 1;

                        }
                    }
                    else if (this.map[i].name === "stone") {
                        if ((Math.abs(this.map[1].pos.x - this.map[i].pos.x) < 160) && this.map[1].pos.y> 300) {
                            this.map[1].onStoneJump();
                        }
                    }
                    else if(this.map[i].name === "donate"){
                        if ((Math.abs(this.map[1].pos.x - this.map[i].pos.x) < 50) && (Math.abs(this.map[1].pos.y - this.map[i].pos.y) < 50)) {
                            this.map[1].load++;
                            this.map[1].life = Math.min(this.map[1].life,4);
                            this.map[i].name = "neutral";
                            this.map[i].hit = 2;
                        }
                    }
                }*/
        }
        else if(model1 instanceof ShotM){
         if ((model2 instanceof KozakM)&&(model2.hit ===0)) {
                if ((Math.abs(model1.pos.x - model2.pos.x) < 50) && (Math.abs(model1.pos.y - model2.pos.y) < 50)&&(model1.life === 3)) {
                    model1.life--;
                    model1.life = Math.max(model1.life, 0);
                    model2.hit = 1;
                    model2.size = {x:0,y:0};

                }
            }
        }
    }
}