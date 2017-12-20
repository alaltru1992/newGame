import Fusilier from "../model/advantages/fusilier";
import ShotM from "../model/shot";
export default class Controller {

    /**
     *
     * @param {Actor} model
     * @param view
     */
    constructor(model,map) {

        /**
         * @type {Actor}
         */
        this.model = model;
        this.map = map;
        window.addEventListener("keydown", e=>this.keydown(e.keyCode));
        window.addEventListener("keyup", e=>this.keyup(e.keyCode));

    }

    keydown(keyCode) {
        this.model.move(keyCode - 38);
        if(((keyCode-38)=== 30)&&(this.model.load === 4)) {
           this.map.push(new ShotM({name:"shot"},this.model));
           this.model.load = this.model.load/9;

           // const fusilier = this.model.advantages.find(adv => adv instanceof Fusilier);
            //fusilier && fusilier.action()&&fusilier.target();
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

    }

}