import Advantage from "./advantage";






export default class Interactionboss extends Advantage {

    constructor({aim, actor,game}) {
        super({actor});
        this.aim = aim;
        this.type = "interactionboss";
        this.game = game;
        this.sin = Math.sin(Math.floor(Math.random()))*this.actor.pos.y;
    }

    tick() {

           if((Math.abs(this.actor.pos.x-this.aim.pos.x)< 50)&&(Math.abs(this.actor.pos.y-this.aim.pos.y)< 50)&&(this.actor.life > 0)){
               this.aim.life--;
               this.actor.life--;
               this.actor.size = {x:0,y:0};

           }
    }
}