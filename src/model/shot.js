import Actor from "./actor";

export default class Shot extends Actor {

    constructor({name}, map) {
        super({name}, map);
       // this.pos.x =  ;
        this.speed.x = 20;
        this.acc = {x: 0, y: -4};
         this.move(1);
         this.name = {name};
        // this.hit = false;
    }
    tick(){
        this.pos.x +=this.speed.x - this.map[1].speed.x;

    }

}