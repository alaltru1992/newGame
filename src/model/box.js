import Actor from "./actor";


export default class Box extends Actor{
    constructor({name}, distance) {
        super({name});
        this.pos.x =  distance;
        this.pos.y = 700;
        this.speed.x = 0;
        this.life = -1;
        this.size = {x: 2, y: 1.8};
    }
}