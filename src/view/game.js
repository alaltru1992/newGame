export default class Game {

    constructor(game) {
        this.game = game;
        this.gr = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage("res/bg.png"), window.innerWidth, window.innerHeight);
    }

    render() {

        this.gr.tilePosition.x = -this.game.pos.x % 2600;

    }

}