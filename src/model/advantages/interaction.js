import Advantage from "./advantage";






export default class Interaction extends Advantage {

    constructor({source, actor, map,game}) {
        super({actor, map});
        this.source = source;
        this.type = "interaction";
        this.game = game;
    }

    tick() {
        this.map.forEach( $ => {
            if(($ !== this.source)&&($ !== this.game)&&($ !== this.actor)&&($.xymove === undefined)) {
               if((Math.abs(this.actor.pos.x - $.pos.x)< 50 )&&(this.actor.life >0)&&($.life !==0)){
                   this.actor.size = {x:0,y:0};
                   this.actor.life--;
                   $.life--;
                   $.hit = 1;
               }
            }
        } );
    }
}