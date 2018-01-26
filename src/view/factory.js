import Hit from "../model/actorHit";
import KozakV from "./kozak";
import KozakM from "../model/kozak";
import StoneV from "./stone";
import StoneM from "../model/stone";
import GameV from "./game";
import GameM from "../model/game";
import DonateV from "./donate";
import DonateM from "../model/donate";
import NavalniyV from "./navalniy";
import NavalniyM from "../model/navalniy";
import ShotV from "./shot";
import ShotM from "../model/shot_new";
import UsmanovV from "./usmanov";
import UsmanovM from "../model/usmanov";
import BoxV from "./box";
import BoxM from "../model/box";
import PamfilovaV from "./pamfilova";
import PamfilovaM from "../model/pamfilova";
import ButtonV from "./button";
import ButtonM from "../model/button";
import MessageV from "./message";
import MessageM from "../model/message";
import PutinV from "./putin";
import PutinM from "../model/putin";
import SignV from "./sign";
import SignM from "../model/sign";
import BusV from "./bus";
import BusM from "../model/bus";
import DoshikV from "./doshik";
import DoshikM from "../model/doshik";


export default class Factory {

    constructor(game) {
        this.game = game;
    }

    createActor(model) {

        if (model instanceof GameM) {
            this.game = model;
            return new GameV(model);
        }
        else if (model instanceof Hit) {
            return null;
        }
        else if (model instanceof KozakM) {
            if (model.hit === 0) {
                return new KozakV(model, this.game, {
                    runs: ["res/kozak.jpg", "res/kozak.jpg", "res/kozak.jpg", "res/kozak.jpg",
                        "res/kozak.jpg", "res/kozak.jpg"], jump: {up: "res/kozak.jpg", fall: "res/kozak.jpg"},
                    stand: "res/kozak.jpg", name: "newkazak"
                });
            }
            else if (model.hit === 1) {
                return new KozakV(model, this.game, {
                    runs: ["res/bang.png", "res/bang.png", "res/bang.png", "res/bang.png",
                        "res/bang.png", "res/bang.png"], jump: {up: "res/bang.png", fall: "res/bang.png"},
                    stand: "res/bang.png", name: "newkazak"
                });
            }
        }
        else if (model instanceof StoneM) {
            return new StoneV(model, this.game, {
                runs: ["res/stone.jpg", "res/stone.jpg", "res/stone.jpg", "res/stone.jpg",
                    "res/stone.jpg", "res/stone.jpg"], jump: {up: "res/stone.jpg", fall: "res/stone.jpg"},
                stand: "res/stone.jpg", name: "stone"
            });
        }
        else if (model instanceof NavalniyM) {
            return new NavalniyV(model, this.game, {
                runs: ["res/frame-1.png", "res/frame-2.png", "res/frame-3.png", "res/frame-4.png",
                    "res/frame-5.png", "res/frame-6.png"], jump: {up: "res/jump_up.png", fall: "res/jump_fall.png"},
                stand: "res/stand.png", name: "naval'niy"
            });
        }
        else if (model instanceof DonateM) {
            return new DonateV(model, this.game, {
                runs: ["res/donate.png", "res/donate.png", "res/donate.png", "res/donate.png",
                    "res/donate.png", "res/donate.png"], jump: {up: "res/donate.png", fall: "res/donate.png"},
                stand: "res/donate.png", name: "donate"
            });

        }
        else if (model instanceof ShotM) {
            if (model.diry === 0) {
                return new ShotV(model, this.game, {
                    runs: ["res/bang.png", "res/bang.png", "res/bang.png", "res/bang.png",
                        "res/bang.png", "res/bang.png"], jump: {up: "res/bang.png", fall: "res/bang.png"},
                    stand: "res/bang.png", name: "shot"
                });
            }
            else if (model.diry === 1) {
                return new ShotV(model, this.game, {
                    runs: ["res/drop1.png", "res/drop1.png", "res/drop1.png", "res/drop1.png",
                        "res/drop1.png", "res/drop1.png"], jump: {up: "res/drop1.png", fall: "res/drop1.png"},
                    stand: "res/drop1.png", name: "shot"
                });
            }
            else if (model.diry === 2) {
                return new ShotV(model, this.game, {
                    runs: ["res/paper.png", "res/paper.png", "res/paper.png", "res/paper.png",
                        "res/paper.png", "res/paper.png"], jump: {up: "res/paper.png", fall: "res/paper.png"},
                    stand: "res/paper.png", name: "shot"
                });
            }
        }

        else if (model instanceof UsmanovM) {
            return new UsmanovV(model, this.game, {
                runs: ["res/usmanov.png", "res/usmanov.png", "res/usmanov.png", "res/usmanov.png",
                    "res/usmanov.png", "res/usmanov.png"], jump: {up: "res/usmanov.png", fall: "res/usmanov.png"},
                stand: "res/usmanov.png", name: "usmanov"
            });
        }
        else if (model instanceof BoxM) {
            return new BoxV(model, this.game, {
                runs: ["res/box1.jpg", "res/box1.jpg", "res/box1.jpg", "res/box1.jpg",
                    "res/box1.jpg", "res/box1.jpg"], jump: {up: "res/box1.jpg", fall: "res/box1.jpg"},
                stand: "res/box1.jpg", name: "box"
            });
        }
        else if (model instanceof PamfilovaM) {
            return new PamfilovaV(model, this.game, {
                runs: ["res/women.png", "res/women.png", "res/women.png", "res/women.png",
                    "res/women.png", "res/women.png"], jump: {up: "res/women.png", fall: "res/women.png"},
                stand: "res/women.png", name: "pamfilova"
            });
        }
        else if(model instanceof MessageM) {
            return new MessageV(model, this.game, {
                runs: ["res/message.png", "res/message.png", "res/message.png", "res/message.png",
                    "res/message.png", "res/message.png"], jump: {up: "res/message.png", fall: "res/message.png"},
                stand: "res/message.png", name: "message"
            });
        }
        else if((model instanceof ButtonM)) {
            if(model.activated === 0) {
                return new ButtonV(model, this.game, {
                    runs: ["res/but.png", "res/but.png", "res/but.png", "res/but.png",
                        "res/but.png", "res/but.png"], jump: {up: "res/but.png", fall: "res/but.png"},
                    stand: "res/but.png", name: "button"
                });
            }
            else if(model.activated === 1) {
                return new ButtonV(model, this.game, {
                    runs: ["res/butSent.png", "res/butSent.png", "res/butSent.png", "res/butSent.png",
                        "res/butSent.png", "res/butSent.png"], jump: {up: "res/butSent.png", fall: "res/butSent.png"},
                    stand: "res/butSent.png", name: "button"
                });
            }
        }
        else if(model instanceof PutinM) {
            return new PutinV(model, this.game, {
                runs: ["res/putin.png", "res/putin.png", "res/putin.png", "res/putin.png",
                    "res/putin.png", "res/putin.png"], jump: {up: "res/putin.png", fall: "res/putin.png"},
                stand: "res/putin.png", name: "putin"
            });
        }
        else if(model instanceof SignM) {
            return new SignV(model, this.game, {
                runs: ["res/sg.png", "res/sg.png", "res/sg.png", "res/sg.png",
                    "res/sg.png", "res/sg.png"], jump: {up: "res/sg.png", fall: "res/sg.png"},
                stand: "res/sg.png", name: "sign"
            });
        }
        else if(model instanceof BusM) {
            return new BusV(model, this.game, {
                runs: ["res/bus.jpg", "res/bus.jpg", "res/bus.jpg", "res/bus.jpg",
                    "res/bus.jpg", "res/bus.jpg"], jump: {up: "res/bus.jpg", fall: "res/bus.jpg"},
                stand: "res/bus.jpg", name: "bus"
            });
        }
        else if(model instanceof DoshikM) {
            return new DoshikV(model, this.game, {
                runs: ["res/doshik.png", "res/doshik.png", "res/doshik.png", "res/doshik.png",
                    "res/doshik.png", "res/doshik.png"], jump: {up: "res/doshik.png", fall: "res/doshik.png"},
                stand: "res/doshik.png", name: "doshik"
            });
        }
    }
}