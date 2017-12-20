export default class BarLoad {

    constructor(actor,{name, settings: {
        x = 10, y = 10, width = 100
    } = {}}){
        this.x = 0;
        this.y = 15;
        this.width = 20;
        this.actor = actor;
        this.name = name;
        this.gr = new PIXI.Graphics();
        this.gr.beginFill(0x4682B4);
        this.gr.drawRect(x , y, width, 35);
        this.gr.endFill();


    }
    render(){
        const {actor} = this;
        this.gr.scale.x = actor.load * 4;
    }

}