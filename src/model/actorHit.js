
import Actor from "./actor";

export default class Hit extends Actor {

    tick(){
        if (Math.abs(this.map[0].pos.x-this.map[1].pos.x) < 50){
            this.map[0].turnover();
            this.map[1].turnover();
        }

    }

}