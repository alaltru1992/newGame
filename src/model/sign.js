import Actor from "./actor";

export default class Signature extends Actor {

    constructor({ actor, direction = actor.direction.x }) {
        super("alolo");
        !direction && (direction = 1);
        this.actor = actor;
        this.speed.x = direction * 100;
        this.speed.y = 20;
        this.viewCreated = false;
        this.size = {x: 1, y: 1};
        this.pos.x = this.actor.pos.x-100-Math.random()*50;
        this.pos.y = this.actor.pos.y-300;
        this.props = [];
        this.life = 1;
        this.xymove = Math.random();
        this.randY = Math.floor(Math.random() * 2);
        this.size = {x:0.1,y:0.1};
    }

    tick() {
        if(this.xymove >0.5) {
            this.pos.x += this.speed.x*0.6*this.xymove;
            this.pos.y = 500 - 80 * Math.sin(Math.PI * this.pos.x / 200);
        }
        else {
            this.pos.x += this.speed.x*this.xymove;
            this.pos.y -= 20*this.xymove;
        }
    }

}