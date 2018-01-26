export default class BarWriting {

    constructor(actor){
        this.actor = actor;
        this.gr = new PIXI.Text('LOAD BAR');
        this.gr.x = 60* this.actor.load;
        this.gr.y = 55;
        this.viewCreated = false;


    }

    render(){
        this.gr.x = 60* this.actor.load;
        if(this.actor.load === 0){
            this.gr.x = 1000000;
        }
    }
}