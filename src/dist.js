import ActorModel from "./model/actor"
import ActorView from "./view/actor"
import ActorController from "./controller/actor"
import GameView from "./view/game"
import GameModel from "./model/game"
import StoneView from "./view/stone"
import StoneModel from "./model/stone"
import KozakView from "./view/kozak"
import KozakModel from "./model/kozak"
import ActorCont from "./model/actorHit"
import ShotView from "./view/shot"
import ShotModel from "./model/shot"

let actorM = new ActorModel({name: "naval'niy"});
let gameM = new GameModel(actorM);


let gameV = new GameView(gameM);
let actorV = new ActorView(actorM, gameM, {
    name: "naval'niy",
    runs: new Array(6).fill(0).map( (_, index) => "res/frame-" + (index+1) + ".png" ),
    jump: {up: "res/jump_up.png", fall: "res/jump_fall.png"},
    stand: "res/stand.png"
});
/*
const nv = PIXI.Sprite.fromImage("res/slut.png");
nv.anchor = {x: 0.5, y: 0};
nv.y = -30;
actorV.gr.addChild(nv);

*/


let actorC = new ActorController(actorM, actorV);


let distance = 1000;
let kozakMArr = new Array(200);
let kozakVArr = new Array(200)
for (let i = 0; i<199; i++){
    kozakMArr[i] = new KozakModel({name: "newkazak"},distance);
    kozakVArr[i] = new KozakView(kozakMArr[i], gameM, {
        name: "newkazak",
        runs: new Array(6).fill(0).map( (_, index) => "res/kozak.jpg" ),
        jump: {up: "res/kozak.jpg", fall: "res/kozak.jpg"},
        stand: "res/kozak.jpg"
    });
    distance+= Math.floor(Math.random()*800)+250;
}
let stoneMArr = new Array(50);
let stoneVArr = new Array(50);
let position = 2000+ Math.floor(Math.random()*500);
for (let j = 0; j<49; j++){
    stoneMArr[j] = new StoneModel({name: "stone"},position);
    stoneVArr[j] = new StoneView(stoneMArr[j], gameM, {
        name: "stone",
        runs: new Array(6).fill(0).map( (_, index) => "res/stone.jpg" ),
        jump: {up: "res/stone.jpg", fall: "res/stone.jpg"},
        stand: "res/stone.jpg"
    });
    position+= 500+ Math.floor(Math.random()*1000);
}



let map = [...kozakMArr,actorM];
let main = new ActorCont({name:"main"},map);


let shotV = new ShotView(actorV);
let shotM = new ShotModel(shotV);



let app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});
[gameV, actorV,...kozakVArr,...stoneVArr].forEach(elm => app.stage.addChild(elm.gr));

app.ticker.add(function(delta) {
    [actorM, gameM, main,...kozakMArr,...stoneMArr].forEach(elm => elm.tick());
});



(function frame() {
    requestAnimationFrame( frame );
    [actorV, gameV,...kozakVArr,...stoneVArr].forEach(elm => elm.render());
})();

window.addEventListener("load", () => {
    document.body.appendChild(app.view);

app.stage.on('mousedown',ShotCreate());

function ShotCreate(){
    app.stage.addChild(shotV.gr);
   /* app.ticker.add(function(delta) {
        shotM.tick();
    });*/
}
});