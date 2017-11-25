export default class Actor {

    constructor(actor, game) {
        this.actor = actor;
        this.game = game;
        this.gr = PIXI.Sprite.fromImage("res/stand.png");
        this.gr.scale.set(0.15);
        this.direction = 0;


    }

    render() {
        this.gr.x = (this.actor.position.x  - this.game.position.x) ;
        this.gr.y = this.actor.position.y ;

    }

}