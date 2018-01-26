import Actor from "./actor";

export default class Bus extends Actor {

    constructor({ actor, direction = actor.direction.x }) {
        super("alolo");
        !direction && (direction = 1);
        this.actor = actor;
        this.speed.x = direction * 100;
        this.speed.y = 20;
        this.viewCreated = false;
        this.size = {x: 0.6, y: 0.6};
        this.pos.x = this.actor.pos.x-100-Math.random()*100;
        this.pos.y = this.actor.pos.y-250;
        this.props = [];
        this.life = 1;
        this.xymove = Math.random();
        this.randY = Math.floor(Math.random() * 2);
        this.size = {x:1,y:1};
    }

    tick() {
        this.pos.x += this.speed.x +5*this.xymove;
        this.pos.y -=this.speed.y + this.xymove*5;
    }

}