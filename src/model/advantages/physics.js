import Advantage from "./advantage";

export default class Physics extends Advantage {

    constructor({actor, game, position, move}) {
        super({actor, game});
        this.move = move;
        this.pos = position;
    }

    action() {
        this._action = true;
    }

    /**
     * @param {Actor} target
     */
    affect(target) {
        let phis = target.advantages.find( adv instanceof physics);
        if(phis) {

        }
    }

}