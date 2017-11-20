
'use strict'

class Tree{
    create(){
        let graph = new PIXI.Graphics();
        graph.beginFill(0xFF3300);
        graph.lineStyle(2, 0xffd900, 1);
        graph.moveTo(50,50);
        graph.lineTo(50,100);
        graph.lineTo(70,100);
        graph.lineTo(70,50);
        return graph;
    }


}

window.onload = function(){

    let width = window.innerWidth;
    let height = window.innerHeight;
    let    app = new PIXI.Application(width,height, {antialias: true});
    document.body.appendChild(app.view);
    let background = PIXI.Sprite.fromImage('res/background.jpg');
    background.width = app.renderer.width;
    background.height = app.renderer.height;
    app.stage.addChild(background);
    let tree = new Tree.create();
    app.stage.addChild(tree);
    /*  let graph = new PIXI.Graphics();
      graph.beginFill(0xFF3300);
      graph.lineStyle(2, 0xffd900, 1);
      graph.moveTo(50,50);
      graph.lineTo(50,100);
      graph.lineTo(70,100);
      graph.lineTo(70,50);
      app.stage.addChild(graph);*/
}