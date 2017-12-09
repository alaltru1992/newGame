import Hit from "../model/actorHit";
import KozakV from "./kozak";
import KozakM from "../model/kozak";


export default class Factory {

    constructor(game) {
        this.game = game;
    }

    createActor(model) {
        if(model instanceof Hit) {
            return null;
        }
        else if(model instanceof KozakM) {
            return new KozakV(KozakM, game);
        }
    }

}