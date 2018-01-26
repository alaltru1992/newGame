import Actor from "./actor";

export default class Doshik extends Actor {

    constructor({name}, path, map,hight) {
        super({name}, map);
        this.pos.x =  path;
        this.pos.y = hight;
        this.speed.x = 35;
        this.acc = {x: 0, y: 0};
        this.move(-1);
        this.life = 1;
        this.speed.x = 0;
        this.donatepos = [{x:10000, y: 200},{x:19250, y: 600},{x:30000, y: 500},{x:34400, y: 400},{x:45000, y: 200},{x:54250, y: 500},{x:65000, y: 400}];
    }

    tick(){
        if(this. life === 0){
            this.size = {x:0,y:0};
        }
    }
};