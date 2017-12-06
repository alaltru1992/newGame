import Actor from "./actor";

export default class Kozak extends Actor {

    constructor({name}, distance, map) {
        super({name}, map);
        this.pos.x =  distance;
        this.speed.x = 4;
        this.acc = {x: 0.5, y: -4};
        //setInterval(() => { this.move((Math.random() * 3 | 0)-1 )}, 5000);
       // setInterval(() => { this.move(-1)}, 5000);
        this.move(-1);
    }

}