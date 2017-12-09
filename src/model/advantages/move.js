import Advantage from "./advantage";

export default class Move extends Advantage {

    constructor({actor, game, position}) {
        super({actor, game});
        this.speed = speed;
        this.pos = position;
    }

    action() {
        this._action = true;
    }

    /**
     * @param {Actor} target
     */
    affect(target) {
        if(target === this.game) {

            Math.abs(this.speed.x) < 0.5 && (this.speed.x = 0);
            let airacc = -this.speed.x * 0.3;
            this.speed.x = this.speed.x + this.direction.x * this.acc.x + airacc;
            let x = this.pos.x + this.speed.x + this.acc.x / 2 * this.direction.x + airacc / 2;

            if((this.direction.y === -6)&&(this.speed.y ===0)){
                this.speed.y = 40.1;
            }
            else if((this.pos.y === gl)||(this.pos.y === 350)) {
                this.speed.y = 0;
            }
            else {
                this.speed.y = this.speed.y + this.acc.y ;
            }
            let y = this.pos.y + this.speed.y+ this.acc.y/2;
            y = Math.max(y, gl);

            this.pos.moveTo(x, y);

        }
    }

    stop() {

    }

}