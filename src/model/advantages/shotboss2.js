import Advantage from "./advantage";
import Intboss from "./interactionboss";


export default class Shotboss extends Advantage {

    constructor({snaryad, actor, map,game,aim}) {
        super({actor, map});
        this.snaryad = snaryad;
        this.type = "shotboss";
        this.game = game;
        this.aim = aim;
    }

    action(args) {
        this._action = true;
    }

    tick() {
        if(this._action) {
            let snaryad = new this.snaryad({diry:2,
                actor: this.actor
            });
            let property = new Intboss({aim:this.aim,actor:snaryad,game:this.game});
            snaryad.props.push( property);
            this.map.push(snaryad);
            this._action = false;
        }
    }

}