import Actor from "./actor";

export default class Kozak extends Actor {

    constructor({name}) {
        super({name});
        this.acc = {x: 0.5, y: -4};
        setInterval(() => { this.move((Math.random() * 3 | 0)-1 )}, 5000);
    }

}