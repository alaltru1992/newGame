export default class Actor {

    constructor(actor, game, {runs, jump: {up, fall}, stand, name}) {
        this.name = name;
        this.actor = actor;
        this.game = game;
        this.gr = new PIXI.Sprite(PIXI.Texture.fromImage(stand));
        this.gr.scale = {x: -0.15, y: 0.15};
        this.gr.anchor = {x: 0.5, y: 0};
        this.direction = 0;
        this.textures = {runs, jump: {up, fall}, stand};
    }

    render() {
        this.gr.x = (window.innerWidth/2+ this.actor.pos.x-this.game.pos.x) ;
        this.gr.y = window.innerHeight-this.actor.pos.y;
        if(this.actor.speed.x > 0) {
            this.gr.scale = {x: -0.15, y: 0.15};
        }
        else {
            this.gr.scale = {x: 0.15, y: 0.15};
        }
        if(this.actor.speed.y > 0) {
            this.gr.texture = PIXI.Texture.fromImage(this.textures.jump.up);
        }
        else if(this.actor.speed.y < 0) {
            this.gr.texture = PIXI.Texture.fromImage(this.textures.jump.fall);
        }
        else if(this.actor.speed.x !== 0) {
            this.gr.texture = PIXI.Texture.fromImage(this.textures.runs[(Date.now() % 600) / 100 | 0]);
        }
        else {
            this.gr.texture = PIXI.Texture.fromImage(this.textures.stand);
        }
    }

}