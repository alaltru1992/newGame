import Actor from "./actor";

export default class Donate extends Actor {

    constructor({name}, path, map,hight) {
        super({name}, map);
        this.pos.x =  path;
        this.pos.y = hight;
        this.speed.x = 35;
        this.acc = {x: 0, y: 0};
        this.move(-1);
        this.life = 0;
        this.speed.x = 0;
        this.donatepos = [{x:5000, y: 200},{x:6000, y: 400},{x:7000, y: 500},{x:8000, y: 400},{x:15000, y: 200},{x:17000, y: 500},{x:18000, y: 500},
            {x:20000, y: 200},{x:25000, y: 400},{x:26000, y: 200},{x:27000, y: 200},{x:28000, y: 500},{x:32000, y: 200},{x:33000, y: 400},{x:33900, y: 200},
            {x:34300, y: 500},{x:34500, y: 200},{x:34500, y: 400},{x:34800, y: 200},{x:34800, y: 400},{x:40000, y: 500},{x:40500, y: 200},{x:42000, y: 500},
            {x:42900, y: 400},{x:47000, y: 500},{x:47400, y: 400},{x:48600, y: 200},{x:49000, y: 500},{x:52000, y: 200},{x:53000, y: 200},{x:53500, y: 400},
            {x:53900, y: 400},{x:57000, y: 200},{x:57500, y: 500},{x:56000, y: 200},{x:58000, y: 400},{x:59000, y: 200},{x:60000, y: 500},{x:61000, y: 400},
            {x:62000, y: 400},{x:63000, y: 500},{x:78000, y: 200},{x:79000, y: 400},{x:80000, y: 200},{x:80500, y: 500},{x:94000, y: 200},{x:95000, y: 200},
            {x:96000, y: 500},{x:98000, y: 500}];

    }

}