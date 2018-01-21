const DELTA = -10;


export default class Game {

    constructor(actor,boss1,boss2) {
        this.speed = {x:1, y:1};
        this.pos = {x: 0, y: 0};
        this.actor = actor;
        this.viewCreated = false;
        this.boss1 = boss1;
        this.boss2 = boss2;
    }

    tick() {
        if((this.boss1.gameStop === 1)&&(this.boss2.gameStop === 1)) {
            this.pos = {x: this.actor.pos.x, y: this.actor.pos.y}
        }
        else if((this.boss1.gameStop === 0)||(this.boss2.gameStop === 0)){
            if(Math.abs(this.actor.pos.x-this.pos.x)>650){
                this.actor.pos.x = Math.max(this.actor.pos.x,this.pos.x+500);
                this.actor.pos.x = Math.min(this.actor.pos.x,this.pos.x-650);
            }
        }
    }
}