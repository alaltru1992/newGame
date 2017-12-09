import Advantage from "./advantage";

export default class Fusilier extends Advantage {

    constructor({snaryad, actor, map}) {
        super({actor, map});
        this.snaryad = snaryad;
    }

    action() {
        this._action = true;
    }

    /**
     * @param {Actor} target
     */
    affect(target) {
        if(this._action) {
            this.map.push(new this.snaryad(this.actor));
            this._action = false;
        }
    }

}