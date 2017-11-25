'use strict'


class Tree{
    constructor(content = Tree.create()) {
        this.content = content;
    }
    static create(){
        let treeText = PIXI.Texture.fromImage('res/tree.png');
        let graph = new PIXI.Sprite(treeText);
        graph.anchor.set(0.5);
        graph.scale.set(0.3)
        graph.x = 1200;
        graph.y = 420;
        return graph;
    }

    treeMove(app){

     // app.ticker.add(move = function(leftMove){
      //    this.x -= leftMove;
    //  })

     //   return this;
    }




}