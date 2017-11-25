const DELTA = -10;


export default class Game {

    constructor(actor) {
        this.speed = {x:1, y:1};
        this.pos = {x: 0, y: 0};
        this.actor = actor;
    }

    tick() {
        this.pos = {x:this.actor.pos.x ,y:this.actor.pos.y}
    }

}