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

let stoneV = new StoneView();
let stoneM = new StoneModel(stoneV);

let kozakM = new KozakModel({name: "kazak"});

let kozakV = new KozakView(kozakM, gameM, {
    name: "kazak",
    runs: new Array(6).fill(0).map( (_, index) => "res/kozak.jpg" ),
    jump: {up: "res/kozak.jpg", fall: "res/kozak.jpg"},
    stand: "res/kozak.jpg"
});
let map = [actorM,kozakM];
let main = new ActorCont({name:"main"},map);
//let actorH = new ActorCont(actorV,kozakV);

let shotV = new ShotView(actorV);
let shotM = new ShotModel(shotV);



let app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});
[gameV, actorV, kozakV].forEach(elm => app.stage.addChild(elm.gr));

app.ticker.add(function(delta) {
    [actorM, gameM, kozakM, main].forEach(elm => elm.tick());
});

/*app.ticker.add(function(delta) {
    [actorC].forEach(elm => elm.tick(actorV, kozakV));
});*/

(function frame() {
    requestAnimationFrame( frame );
    [actorV, gameV, kozakV].forEach(elm => elm.render());
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