const gl = 440;

export default class Actor {

    constructor({name}, map) {
        this.name = name;
        //this.speed = 5;
        this.pos = {x: 0, y: gl};
        this.direction = {x:0, y:0};
        this.speed = {x: 0, y: 0};
        this.acc = {x: 5, y: -4};
        this.maxspeed = {x: 8, y: 8};
        this.map = map;
    }

    tick() {
        Math.abs(this.speed.x) < 0.5 && (this.speed.x = 0);
        let airacc = -this.speed.x * 0.3;
        this.speed.x = this.speed.x + this.direction.x * this.acc.x + airacc;
        this.pos.x = this.pos.x + this.speed.x + this.acc.x / 2 * this.direction.x + airacc / 2;

        if((this.direction.y === -6)&&(this.speed.y ===0)){
            this.speed.y = 33.3;
        }
        else if(this.pos.y === gl) {
            this.speed.y = 0;
        }
        else {
            this.speed.y = this.speed.y + this.acc.y ;
        }
        this.pos.y = this.pos.y + this.speed.y+ this.acc.y/2;
        this.pos.y = Math.max(this.pos.y,gl);

        console.log(this.name + " " + JSON.stringify({pos: this.pos, speed: this.speed}));

    }

    turnover(){
        this.speed.x = 0;
        this.direction.x = 0;
    }



    /**
     *
     * @param direction -1/+1/0
     */
    move(direction) {
        if([0, -1, 1].includes(direction)) {
            this.direction.x = direction;
        }
        if([6, -6].includes(direction)) {
            if (direction === -6) {
                this.direction.y = direction;
            }
            else {
                this.direction.y = 0;
            }
        }
    }

}


class Point {

    constructor() {
        this.x = 0;
        this.y = 0;
    }

}