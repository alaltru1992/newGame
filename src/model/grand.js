import Actor from "./actor";

export default class Grand extends Actor {

    constructor({name}, distance, map) {
        super({name}, map);
        this.pos.x =  distance;
        this.speed.x = 4;
        this.acc = {x: 0.5, y: 0};
        this.move(-1);
        this.life = 3;
        this.advantages =[];
        this.viewCreated = false;
        this.size = {x:0.7, y:0.7};
        this.isShot = true;
    }
    tick(){
        this.pos.x -=this.speed.x;
        if(this.life < 1){
            this.map.splice(this.map.indexOf(this),1);
            this.size = {x:0,y:0};
            this.isShot = false;

        }
    }

}