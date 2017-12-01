
import Actor from "./actor";

export default class Hit extends Actor {

    tick(){
        for(let i = 1; i < 200; i++) {
            if ((Math.abs(this.map[0].pos.x - this.map[i].pos.x) < 50) && (Math.abs(this.map[0].pos.y - this.map[i].pos.y) < 50)) {
                this.map[0].turnover();
                //this.map[i].turnover();
               // this.map.slice(i,1);
            }
        }
    }


}