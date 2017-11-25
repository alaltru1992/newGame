export default class Stone {

    constructor(shot) {
        // this.speed = 5;
        // this.position = {x: 1200, y: 300};
        this.shot = shot;

    }

    tick() {
        this.shot.pos.x -= 5;

    }
}