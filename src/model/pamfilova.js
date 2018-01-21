const gl = 200;
import Actor from "./actor";
import ShotM from "./shot";

export default class Pamfilova extends Actor {
    constructor({name}, map, actor,button) {
        super(name, map);
        this.actor = actor;
        this.name = name;
        this.pos = {x: 4000, y: 600};
        this.direction = {x: -1, y: 0};
        this.speed = {x: 0, y: 0};
        this.acc = {x: 0, y: 0};
        this.maxspeed = {x: 0, y: 0};
        this.map = map;
        this.size = {x: 1, y: 1};
        this.hit = 0;
        this.life = 3000;
        this.advantages = [];
        this.move(-1);
        this.viewCreated = false;
        this.gameStop = 1;
        this.button = button;
    }

    tick() {
        if ((Math.abs(this.pos.x - this.actor.pos.x) < 650)&&(this.life > 0)) {
            this.gameStop = 0;
        }
        if(this.button.bosskill ===0){
            this.gameStop = 1;
            this.size = {x:0,y:0};
            this.life = 0;
        }


    }

    action (){
        this.action = true;
    }

}