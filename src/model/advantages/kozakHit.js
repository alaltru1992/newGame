import Advantage from "./advantage";
import Kozak from ".././kozak";

export default class Destroy extends Advantage {
    constructor(actor,map){
        super(actor,map);
    }

    tick() {
        for(let i =0; i< this.map.length; i++) {
            if (this.map[i] instanceof Kozak) {
                this.actor.life--;
                this.actor.life = Math.max(this.actor.life, 0);
                this.map[i].dest = true;
            }
        }
    }
}