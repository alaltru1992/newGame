export default class Kozak {

    constructor(kozak) {
        // this.speed = 5;
        // this.pos = {x: 1200, y: 560};
        this.kozak = kozak;

    }

    tick() {
        this.kozak.pos.x -= 5;

    }
}