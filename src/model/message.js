import Actor from "./actor";

export default class Message extends Actor {

    constructor({name}, map, button) {
        super({name}, map);
        this.button = button;
        this.pos.x =  this.button.pos.x;
        this.pos.y = 100;
        this.speed.x = 2;
        this.speed.y = 20;
        this.size = {x: 1, y: 1};
        this.life = 0;
    }

    tick(){
        this.pos.y +=this.speed.y;
        if(this.pos.y >= 400){
            this.pos.x += 3*this.speed.x;
        }
        else if (this.pos.y < 400){
            this.pos.x +=this.speed.x;
        }
    }

}