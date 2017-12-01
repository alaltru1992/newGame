import Actor from "./actor";

export default class OnStone extends Actor {

    tick(){
        for(let i = 201; i < 250; i++) {
            if ((Math.abs(this.map[0].pos.x - this.map[i].pos.x) < 160) && this.map[0].pos.y> 300) {
                this.map[0].onStoneJump();

            }
        }



    }

}