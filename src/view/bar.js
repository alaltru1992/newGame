export default  class Bar {
    constructor(barM,gameM,{name}, {colors:{defcolor, fillcolor}}){
        this.barM = barM;
       // this.mapV = mapV;
        this.name = name;
        this.game = gameM;
        this.colors = {colors:{defcolor, fillcolor}};
       // this.gr = new PIXI.Sprite(PIXI.Texture.fromImage("res/shot.png"));
        this.gr = new PIXI.Graphics();
       // this.gr.drawRoundedRect(this.barM.pos.x - this.game.pos.x, 50, this.barM.pos.x - this.game.pos.x+100, 80);
    }
    render(){

       this.gr.y = 10;
        if ((this.barM.map[1].life)===3){
          this.gr.beginFill(0xFF3300);
          this.gr.lineStyle(2, 0xffd900, 1);
          this.gr.drawRoundedRect(this.barM.pos.x , 30, this.barM.pos.x+180 , 35);
          this.gr.endFill();
        }
        else if ((this.barM.map[1].life)===2){
            this.gr.beginFill(0xFFFFFF);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x , 30, this.barM.pos.x+180 , 35);
            this.gr.endFill();
            this.gr.beginFill(0xFF3300);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x, 30, this.barM.pos.x+120 , 35);
            this.gr.endFill();
        }
        else if ((this.barM.map[1].life)===1) {
            this.gr.beginFill(0xFFFFFF);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x, 30, this.barM.pos.x + 180, 35);
            this.gr.endFill();
            this.gr.beginFill(0xFF3300);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x, 30, this.barM.pos.x + 60, 35);
            this.gr.endFill();
        }
        else if ((this.barM.map[1].life)===0) {
            this.gr.beginFill(0xFFFFFF);
            this.gr.lineStyle(2, 0xffd900, 1);
            this.gr.drawRoundedRect(this.barM.pos.x , 30, this.barM.pos.x+180 , 35);
            this.gr.endFill();
        }

    }

}