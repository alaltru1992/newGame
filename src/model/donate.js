import Actor from "./actor";

export default class Donate extends Actor {

    constructor({name}, path, map,hight) {
        super({name}, map);
        this.pos.x =  path;
        this.pos.y = hight;
        this.speed.x = 35;
        this.acc = {x: 0.5, y: -4};
        this.move(-1);
        this.life = 0;
    }

}