export default class Stone {

    constructor( ) {


        this.gr = PIXI.Sprite.fromImage("res/stone.jpg");
        this.gr.width = 1000;
        this.gr.height = 30;
       // this.gr.scale.set(0.15);
        this.speed = 5;
        this.pos = {x: 1000, y:400};




    }

    render() {
        //this.gr.x += this.speed ;
        this.gr.x = this.pos.x;
        this.gr.y = this.pos.y;


    }

}