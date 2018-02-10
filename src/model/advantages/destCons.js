import Advantage from "./advantage";

export default class Destroy extends Advantage {
    constructor(actor,map){
        super(actor,map);
    }

    action() {
        if(this.actor.dest === true) {
            this.map.splice(this.map.indexOf(this.actor), 1);
            this.actor.size = {x: 0, y: 0};
        }
    }
}