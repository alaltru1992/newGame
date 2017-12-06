import Bar from "./bar";

export default class BarLoad extends Bar {

    constructor({name}, map) {
        super({name}, map);
        this.name = "loadbar";
        this.pos = {x:50,y:100};
        this.map = map;
       // this.scale.set(3);
    }
    tick(){

    }

}