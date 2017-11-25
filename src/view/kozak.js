export default class Kozak {

    constructor( ) {


        this.gr = PIXI.Sprite.fromImage("res/cosak.jpg");

        this.gr.scale.set(0.25);
       // this.speed = 5;
        this.pos = {x: 1000, y:560};




    }

    render() {
        //this.gr.x += this.speed ;
        this.gr.x = this.pos.x;
        this.gr.y = this.pos.y;
    }

}
