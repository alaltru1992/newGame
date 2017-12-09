import Fusilier from "../model/advantages/fusilier";

export default class Kozak {

    /**
     *
     * @param {Actor} model
     * @param view
     */
    constructor(model, view) {

        /**
         * @type {Actor}
         */
        this.model = model;
        this.view = view;
        window.addEventListener("keydown", e=>this.keydown(e.keyCode));
        window.addEventListener("keyup", e=>this.keyup(e.keyCode));

    }

    keydown(keyCode) {
        this.model.move(keyCode - 38);
        if(keyCode === "ctrl") {
            const fusilier = this.model.advantages.find(adv => adv instanceof Fusilier);
            fusilier && fusilier.action();
        }
    }

    keyup(keyCode) {
        this.model.advantages.forEach((adv => adv.action(keyCode)));
        if([1, -1].includes(keyCode - 38)) {
            this.model.move(0);
        }
        else if ([-6].includes(keyCode - 38)) {
            this.model.move(6);
        }
        else if (([40].includes(keyCode - 38)))/*&&(this.model.map[1].load === 4))*/ {
            this.model.actorShoot();
            this.view.shoot();
        }
    }

}