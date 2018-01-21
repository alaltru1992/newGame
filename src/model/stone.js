import Actor from "./actor";

export default class Stone extends Actor {

    constructor({name}, position, map) {
        super({name}, map);
        this.pos.x = position;
        this.speed.x = 0;
        this.acc = {x: 0, y: 0};
        this.pos.y = 250;
        this.size = {x: 4, y: 0.5};
        this.life = 0;
    }

}