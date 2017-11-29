
import Actor from "./actor";

export default class Hit extends Actor {

    tick(){
        for(let i = 0; i < 199; i++) {
            if ((Math.abs(this.map[200].pos.x - this.map[i].pos.x) < 50) && (Math.abs(this.map[200].pos.y - this.map[i].pos.y) < 50)) {
                this.map[200].turnover();
                this.map[i].turnover();
            }
        }
    }

}