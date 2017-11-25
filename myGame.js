
'use strict';




window.onload = function(){

    let width = window.innerWidth;
    let height = window.innerHeight;
    let    app = new PIXI.Application(width,height, {antialias: true});
    document.body.appendChild(app.view);
    let background = PIXI.Sprite.fromImage('res/background.jpg');
    background.width = app.renderer.width;
    background.height = app.renderer.height;
    app.stage.addChild(background);


    let tree =   Tree.create();

    app.stage.addChild(tree);
    window.addEventListener("keydown",(e)=> {
        if(e.keyCode === 39) {
            rightMove();
        }
    });



    function rightMove(obj){
        app.stage.addChild(obj)
        app.ticker.add( function(left){
            obj.x -= 2*left;
        })
        return obj;
    }

};