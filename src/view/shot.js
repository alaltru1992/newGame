export default class Stone {

    constructor(actor ) {

        this.actor = actor;
        this.gr = PIXI.Sprite.fromImage("res/shot.png");
        this.pos = {x: this.actor.gr.position.x, y: this.actor.gr.position.y };
        // this.gr.scale.set(0.15);
       // this.speed = 5;
        //this.pos = {x: 1000, y:400};




    }

    render() {
        //this.gr.x += this.speed ;
        this.gr.x = this.actor.gr.position.x;
        this.gr.y = this.actor.gr.position.y;


    }

}