import Advantage from "./advantage";
import Interaction from "./interactionboss";


export default class GrandThrow extends Advantage {

    constructor({snaryad, actor, map,game,aim}) {
        super({actor, map});
        this.aim = aim;
        this.snaryad = snaryad;
        this.type = "shot";
        this.game = game;

    }

    tick() {
        if (this.actor.isShot === true) {
            let snaryad = new this.snaryad({
                diry: 4,
                actor: this.actor
            });
            let property = new Interaction({aim: this.aim, actor: snaryad, map: this.map, game: this.game});
            snaryad.props.push(property);
            this.map.push(snaryad);
            this._action = false;
        }
    }
}