export default class Stone {

    constructor(stone) {
       // this.speed = 5;
       // this.position = {x: 1200, y: 300};
        this.stone = stone;

    }

    tick() {
        this.stone.pos.x -= 5;

    }
}