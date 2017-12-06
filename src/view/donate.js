import Actor from "./actor";

export default class Donate extends Actor {
    constructor(...args){
        super(...args);
        this.gr.scale = 3;
    }

}