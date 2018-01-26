export default class BarWriting {

    constructor(actor){
        this.actor = actor;
        this.gr = new PIXI.Text('LIFE BAR');
        this.gr.x = 40;
        this.gr.y = 15;
        this.viewCreated = false;


    }

    render(){
        this.gr.x = 40* this.actor.life;
        if(this.actor.life === 0){
            this.gr.x = 1000000;
        }
    }
}