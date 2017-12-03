
import Actor from "./actor";

export default class Hit extends Actor {

    tick() {
        for (let i = 2; i < this.map.length; i++) {
            if (this.map[i].name === "newkazak") {
                if ((Math.abs(this.map[1].pos.x - this.map[i].pos.x) < 50) && (Math.abs(this.map[1].pos.y - this.map[i].pos.y) < 50)) {
                    this.map[1].turnover();
                    this.map[1].life--;
                    this.map[1].life = Math.max(this.map[1].life,0);
                    this.map[i].name = "neutral";
                    this.map[i].hit = true;

                }
            }
            else if (this.map[i].name === "stone") {
                if ((Math.abs(this.map[1].pos.x - this.map[i].pos.x) < 160) && this.map[1].pos.y> 300) {
                    this.map[1].onStoneJump();
                }
            }
        }
        console.log(this.map[1].life);

    }
}