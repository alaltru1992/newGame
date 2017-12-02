
import Actor from "./actor";

export default class Hit extends Actor {

    tick() {
        for (let i = 1; i < this.map.length; i++) {
            if (this.map[i].name === "newkazak") {
                if ((Math.abs(this.map[0].pos.x - this.map[i].pos.x) < 50) && (Math.abs(this.map[0].pos.y - this.map[i].pos.y) < 50)) {
                    this.map[0].turnover();
                    this.map[i].name = "neutral";
                    //this.map[i].turnover();
                    // this.map.slice(i,1);
                }
            }
            else if (this.map[i].name === "stone") {
                if ((Math.abs(this.map[0].pos.x - this.map[i].pos.x) < 160) && this.map[0].pos.y> 300) {
                    this.map[0].onStoneJump();
                }
            }
        }


    }
}