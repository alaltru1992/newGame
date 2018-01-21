import Actor from "./actor";

export default class ShotNew extends Actor {

    constructor({diry, actor, direction = actor.direction.x }) {
        super("alolo");
        !direction && (direction = 1);
        this.actor = actor;
        this.speed.x = direction * 100;
        this.speed.y = 20;
        this.viewCreated = false;
        this.size = {x: 1, y: 1};
        this.pos.x = this.actor.pos.x;
        this.pos.y = this.actor.pos.y;
        this.props = [];
        this.life = 1;
        this.diry = diry;
        this.xymove = Math.random();
        this.randY = Math.floor(Math.random() * 2);
    }

    tick() {

        if (this.diry === 0) {
            this.pos.x += this.speed.x;
        }
        else if(this.diry ===1){
            this.pos.x += this.speed.x*this.xymove+20;
            this.pos.y -= this.xymove*50;
        }
        else if(this.diry ===2){
            this.size = {x:0.2, y:0.2};
            this.pos.x += this.speed.x*0.4;
            if(this.randY === 0){
                this.pos.y = 200;
            }
            else if(this.randY === 1){
                this.pos.y = 350;
            }
        }
    }

}