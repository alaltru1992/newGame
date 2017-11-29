import Actor from "./actor";

export default class Kozak extends Actor {

    constructor({name}, position) {
        super({name});
        this.pos.x = position;
        this.speed.x = 0
        this.acc = {x: 0, y: 0};
        this.pos.y = 300;

    }

}