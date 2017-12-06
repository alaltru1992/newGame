import Bar from "./bar";

export default class BarLoad extends Bar {
    constructor(barM, gameM, {name}) {
        super(barM, gameM, {name})
        this.gr = new PIXI.Graphics();

    }

    render() {
        this.gr.y = 60;
        if ((this.barM.map[1].load) === 0) {
            this.gr.beginFill(0xFFFFFF);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x, 30, this.barM.pos.x + 180, 35);
            this.gr.endFill();
        }
        else if ((this.barM.map[1].load) === 1) {
            this.gr.beginFill(0xFFFFFF);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x, 30, this.barM.pos.x + 180, 35);
            this.gr.endFill();
            this.gr.beginFill(0x4682B4);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x, 30, this.barM.pos.x + 50, 35);
            this.gr.endFill();
        }
        else if ((this.barM.map[1].load) === 2) {
            this.gr.beginFill(0xFFFFFF);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x, 30, this.barM.pos.x + 180, 35);
            this.gr.endFill();
            this.gr.beginFill(0x4682B4);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x, 30, this.barM.pos.x + 100, 35);
            this.gr.endFill();
        }
        else if ((this.barM.map[1].load) === 3) {
            this.gr.beginFill(0xFFFFFF);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x, 30, this.barM.pos.x + 180, 35);
            this.gr.endFill();
            this.gr.beginFill(0x4682B4);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x, 30, this.barM.pos.x + 150, 35);
            this.gr.endFill();
        }
        else if ((this.barM.map[1].load) === 4) {
            this.gr.beginFill(0x0000FF);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x, 30, this.barM.pos.x + 180, 35);
            this.gr.endFill();
        }

    }

}