import Advantage from "./advantage";
import Interaction from "./interaction";

export default class Fusilier extends Advantage {

    constructor({snaryad, actor, map,game}) {
        super({actor, map});
        this.snaryad = snaryad;
        this.type = "shot";
        this.game = game;
    }

    action(args) {
        this._action = true;
    }

    tick() {
        if(this._action) {
            let snaryad = new this.snaryad({diry:0,
                actor: this.actor
            });
            let property = new Interaction({source: this.actor, actor: snaryad, map: this.map, game: this.game});
            snaryad.props.push( property);
            this.map.push(snaryad);
            this._action = false;
        }
    }

}