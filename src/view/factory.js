import Hit from "../model/actorHit";
import KozakV from "./kozak";
import KozakM from "../model/kozak";
import StoneV from "./stone";
import StoneM from "../model/stone";
import ActorV from "./actor";
import ActorM from "../model/actor";
import GameV from "./game";
import GameM from "../model/game";
import DonateV from "./donate";
import DonateM from "../model/donate";
import NavalniyV from "./navalniy";
import NavalniyM from "../model/navalniy";
import ShotV from "./shot";
import ShotM from "../model/shot";
import UsmanovV from "./usmanov";
import UsmanovM from "../model/usmanov";



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
            if(model.hit === 0) {
                return new KozakV(model, this.game, {
                    runs: ["res/kozak.jpg", "res/kozak.jpg", "res/kozak.jpg", "res/kozak.jpg",
                        "res/kozak.jpg", "res/kozak.jpg"], jump: {up: "res/kozak.jpg", fall: "res/kozak.jpg"},
                    stand: "res/kozak.jpg", name: "newkazak"
                });
            }
            else if(model.hit ===1){
                return new KozakV(model, this.game, {
                    runs: ["res/bang.png", "res/bang.png", "res/bang.png", "res/bang.png",
                        "res/bang.png", "res/bang.png"], jump: {up: "res/bang.png", fall: "res/bang.png"},
                    stand: "res/bang.png", name: "newkazak"
                });
            }
        }
        else if(model instanceof StoneM) {
            return new StoneV(model, this.game,{runs: ["res/stone.jpg","res/stone.jpg","res/stone.jpg","res/stone.jpg",
                "res/stone.jpg","res/stone.jpg" ], jump:{up:"res/stone.jpg", fall :"res/stone.jpg"},
                stand:"res/stone.jpg", name: "stone"});
        }
        else if(model instanceof NavalniyM) {
            return new NavalniyV(model, this.game,{runs: ["res/frame-1.png","res/frame-2.png","res/frame-3.png","res/frame-4.png",
                "res/frame-5.png","res/frame-6.png" ],  jump:{up:"res/jump_up.png", fall :"res/jump_fall.png"},
                stand:"res/stand.png", name: "naval'niy"});
        }
        else if(model instanceof DonateM) {
            return new DonateV(model, this.game,{runs:["res/donate.png","res/donate.png","res/donate.png","res/donate.png",
                "res/donate.png","res/donate.png" ] , jump:{up:"res/donate.png", fall :"res/donate.png"},
                stand:"res/donate.png", name: "donate"});

        }
        else if(model instanceof ShotM) {
            return new ShotV(model, this.game,{runs:["res/bang.png","res/bang.png","res/bang.png","res/bang.png",
                "res/bang.png","res/bang.png" ] , jump:{up:"res/bang.png", fall :"res/bang.png"},
                stand:"res/bang.png", name: "shot"});
        }
        else if(model instanceof UsmanovM) {
            return new UsmanovV(model, this.game, {
                runs: ["res/usmanov.png", "res/usmanov.png", "res/usmanov.png", "res/usmanov.png",
                    "res/usmanov.png", "res/usmanov.png"], jump: {up: "res/usmanov.png", fall: "res/usmanov.png"},
                stand: "res/usmanov.png", name: "usmanov"
            });
        }

    }
}