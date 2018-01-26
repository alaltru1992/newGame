import Actor from "./actor";

export default class Stone extends Actor {

    constructor({name}, position, map) {
        super({name}, map);
        this.pos.x = position;
        this.speed.x = 0;
        this.acc = {x: 0, y: 0};
        this.pos.y = 250;
        this.size = {x: 4, y: 0.5};
        this.life = 0;
        this.stonePos = [3000, 6750, 10000,10300,14000, 16750, 17750, 19000,19300, 22000,23000,25000, 27750, 30000, 33950, 39750, 41750, 42000,42300,42600,
            46750,47050, 48750, 50000,50300,55000,53000,54000,54300,54600, 57250, 59000, 59750, 60000, 62750, 65000, 67000,67300, 72000,74000,74900,76000,
            76300, 80250,83000,84000,85000,85300,90000,95750, 97750];
    }
}