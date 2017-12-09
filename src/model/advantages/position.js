import Advantage from "./advantage";

export default class Position extends Advantage {

    moveTo({x, y}) {
        this.x = x;
        this.y = y;
    }

}