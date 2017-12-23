import Actor from "/.actor";
import ShotM from "/.shot";

export default class Usmanov extends Actor{
    constructor({name},map,actor) {
        super(name,map);
        this.actor = actor;
        this.name = name;
        this.pos = {x: 10000, y: gl};
        this.direction = {x:0, y:0};
        this.speed = {x: 0, y: 0};
        this.acc = {x: 0, y: 0};
        this.maxspeed = {x: 0, y: 0};
        this.map = map;
        this.size = {x: 1, y: 1};
        this.hit = 0;
        this.life = 30;
        this.advantages = [];
        this.load = 4;
        this.viewCreated = false;

    }

    tick(){
        let shotDir;
        let shotSpeedIndex;
        let shotFrequency;

    }


}