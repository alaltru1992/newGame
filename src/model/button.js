import Actor from "./actor";

export default class Stone extends Actor {

    constructor({name}, position, map,activated) {
        super({name}, map);
        this.pos.x = position;
        this.speed.x = 0;
        this.acc = {x: 0, y: 0};
        this.pos.y = 150;
        this.size = {x: 3, y: 3};
        this.life = 0;
        this.activated = activated;
        this.bosskill = 3;
    }

    action(args) {
        this._action = true;
    }

    tick() {

    }

}