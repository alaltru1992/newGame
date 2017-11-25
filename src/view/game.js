export default class Game {

    constructor(game) {
        this.game = game;
        this.gr = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage("res/background.jpg"), window.innerWidth, window.innerHeight);
    }

    render() {
      // this.gr.tilePosition.x = this.game.position.x ;
        this.gr.tilePosition.x -= 5;
    }

}