const DELTA = -10;


export default class Game {

    constructor(actor) {
        this.speed = 1;
        this.position = {x: 0, y: 0};
        this.actor = actor;
    }

    tick() {
        let dir = this.position.x - this.actor.position.x;
        if(dir) {
            this.position.x = dir * this.speed;
        }
    }

}