import Actor from "./actor";

export default class Shot extends Actor {

    constructor({name},actor,direction,speedIndex,isHert) {
        super(name);
        this.actor = actor;
        this.speed.x = 100;
        this.acc = {x: 0, y: -4};
        this.name = {name};
        this.viewCreated = false;
        this.size = {x: 1, y: 1};
        this.name = {name};
        this.life = 3;
        this.pos.x = this.actor.pos.x;
        this.direction = direction;
        this.speedIndex = speedIndex;
        this.isHert = isHert;

    }
    tick(){
        let dir = this.actor.direction.x;
        if (dir ===0){
            dir = 1;
        }
            this.pos.x +=(this.speed.x*this.speedIndex - this.actor.speed.x)*dir;
            this.pos.y = this.actor.pos.y*this.direction;

    }

}