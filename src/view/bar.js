export default class Bar {

    constructor(actor,{name, settings: {
        x = 100, y = 10, width = 100
    } = {}}){
        this.x = 15;
        this.y = 15;
        this.width = 100;
        this.actor = actor;
        this.name = name;
        this.gr = new PIXI.Graphics();
        this.gr.beginFill(0xFF3300);
        this.gr.drawRect(x , y, width, 35);
        this.gr.endFill();


    }
    render(){
        const {actor} = this;
        this.gr.scale.x = actor.life / 3;
    }

}