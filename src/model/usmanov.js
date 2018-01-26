const gl = 200;
import Actor from "./actor";
import ShotM from "./shot";

export default class Usmanov extends Actor {
    constructor({name}, map, actor) {
        super(name, map);
        this.actor = actor;
        this.name = name;
        this.pos = {x: 35000, y: 600};
        this.direction = {x: -1, y: 0};
        this.speed = {x: 0, y: 0};
        this.acc = {x: 0, y: 0};
        this.maxspeed = {x: 0, y: 0};
        this.map = map;
        this.size = {x: 2, y: 2.5};
        this.hit = 0;
        this.life = 20;
        this.advantages = [];
        this.move(-1);
        this.viewCreated = false;
        this.gameStop = 1;
       // this.shotDir = Math.sin(Math.floor(Math.random()));
      //  this.shotSpeedIndex = Math.floor(Math.random() * (3.5 - 0.3 + 1)) + 0.3;
       // this.shotFrequency = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

    }

    tick() {
        if ((Math.abs(this.pos.x - this.actor.pos.x) < 650)&&(this.life > 0)) {
            this.gameStop = 0;
        }
        if(this.life ===0){
            this.gameStop = 1;
            this.size = {x:0,y:0};
        }
    }

    action (){
       this.action = true;
    }

}