import Hit from "../model/actorHit";
import KozakV from "./kozak";
import KozakM from "../model/kozak";
import StoneV from "./kozak";
import StoneM from "../model/kozak";
import ActorV from "./actor";
import ActorM from "../model/actor";
import GameV from "./game";
import GameM from "../model/game";
import DonateV from "./donate";
import DonateM from "../model/donate";



export default class Factory {

    constructor(game) {
        this.game = game;
    }

    createActor(model) {

        if(model instanceof GameM){
            this.game = model;
            return new GameV(model);
        }
        else if(model instanceof Hit) {
            return null;
        }
        else if(model instanceof KozakM) {
            return new KozakV(model, this.game,{runs: "res/kozak.jpg", jump:{up:"res/kozak.jpg", fall :"res/kozak.jpg"},
          stand:"res/kozak.jpg", name: "newkozak"});
        }
        else if(model instanceof StoneM) {
            return new StoneV(model, this.game,{runs: "res/stone.jpg", jump:{up:"res/stone.jpg", fall :"res/stone.jpg"},
                stand:"res/stone.jpg", name: "stone"});
        }
        else if(model instanceof ActorM) {
            return new ActorV(model, this.game,{runs: "res/frame-1.png", jump:{up:"res/jump_up.png", fall :"jump_fall.png"},
                stand:"res/stand.png", name: "naval'niy"});
        }
        else if(model instanceof DonateM) {
            return new DonateV(model, this.game,{runs: "res/donate.png", jump:{up:"res/donate.png", fall :"donate.png"},
                stand:"res/donate.png", name: "donate"});
        }
    }
}