import Fusilier from "../model/advantages/fusilier";
import ShotM from "../model/shot";
export default class Controller {

    /**
     *
     * @param {Actor} model
     * @param view
     */
    constructor(model,map,boss1) {

        /**
         * @type {Actor}
         */
        this.model = model;
        this.map = map;
        window.addEventListener("keydown", e=>this.keydown(e.keyCode));
        window.addEventListener("keyup", e=>this.keyup(e.keyCode));
        this.shotcounter = 0;
        this.boss1 = boss1;


    }

    keydown(keyCode) {

        if(keyCode === 68 /*D*/) {
            const adv = this.model.advantages.find( ({type}) => type === "shot" );
            adv.action();
        }

        this.model.move(keyCode - 38);
        if(((keyCode-38)=== 30)/*&&(this.model.load === 4)&&(this.shotcounter < 8)*/) {
           /*this.map.push(new ShotM({name:"shot"},this.model,1,1,1));
           this.shotcounter++;
            if (this.shotcounter === 8){
               this.model.load = 0;
               this.shotcounter = 0;
            }
*/
           // const fusilier = this.model.advantages.find(adv => adv instanceof Fusilier);
            //fusilier && fusilier.action()&&fusilier.target();
        }
    }

    keyup(keyCode) {
        //this.model.advantages.forEach((adv => adv.action(keyCode)));
        if([1, -1].includes(keyCode - 38)) {
            this.model.move(0);
        }
        else if ([-6].includes(keyCode - 38)) {
            this.model.move(6);
        }

    }




}