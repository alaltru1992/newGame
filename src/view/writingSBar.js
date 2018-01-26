export default class BarWriting {

    constructor(actor){
        this.actor = actor;
        this.gr = new PIXI.Text(this.actor.sg +'Signatures');
        this.gr.x = 60* this.actor.sg;
        this.gr.y = 55;
        this.viewCreated = false;


    }

    render(){
        this.gr.x = 60* this.actor.sg;
        if(this.actor.sg === 0){
            this.gr.x = 1000000;
        }
    }
}