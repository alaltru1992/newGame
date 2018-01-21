import Advantage from "./advantage";
import Intboss from "./interactionboss";


export default class Shotboss extends Advantage {

    constructor({snaryad, actor, map,button}) {
        super({actor, map});
        this.snaryad = snaryad;
        this.type = "shotboss";
        this.button = button;
    }


    tick() {

            if ((Math.abs(this.actor.pos.x-this.button.pos.x)<30)&&(Math.abs(this.actor.pos.y-this.button.pos.y)<51)&&(this.actor.direction.y === 6)
               &&(this.button.activated === 0)                 ) {
                let snaryad = new this.snaryad({name: "message"},
                    this.map, this.button
                );
                this.map.push(snaryad);
                this.button.bosskill--;
                this.button.activated = 1;
                this.button.viewCreated = false;
            }
            else if(Math.abs(this.actor.pos.x-this.button.pos.x) > 300){
                this.button.activated = 0;
                this.button.viewCreated = false;
            }

    }
}