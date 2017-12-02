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


let map = [];
let mapV = [];

let actorM = new ActorModel({name: "naval'niy"});
let gameM = new GameModel(actorM);


let gameV = new GameView(gameM);
let actorV = new ActorView(actorM, gameM, {
    name: "naval'niy",
    runs: new Array(6).fill(0).map( (_, index) => "res/frame-" + (index+1) + ".png" ),
    jump: {up: "res/jump_up.png", fall: "res/jump_fall.png"},
    stand: "res/stand.png"
});



let actorC = new ActorController(actorM, actorV);


let distance = 1000;
let kozakMArr = [];
let kozakVArr = [];
for (let i = 0; i < 200; i++){
    kozakMArr.push(new KozakModel({name: "newkazak"},distance, map));
    kozakVArr.push(new KozakView(kozakMArr[i], gameM, {
        name: "newkazak",
        runs: new Array(6).fill(0).map( (_, index) => "res/kozak.jpg" ),
        jump: {up: "res/kozak.jpg", fall: "res/kozak.jpg"},
        stand: "res/kozak.jpg"
    }));
    distance += Math.floor(Math.random()*800)+250;
}
let stoneMArr = [];
let stoneVArr = [];
let position = 2000;
for (let j =0 ; j < 50; j++){
    stoneMArr.push(new StoneModel({name: "stone"},position, map));
    stoneVArr.push(new StoneView(stoneMArr[j], gameM, {
        name: "stone",
        runs: new Array(6).fill(0).map( (_, index) => "res/stone.jpg" ),
        jump: {up: "res/stone.jpg", fall: "res/stone.jpg"},
        stand: "res/stone.jpg"
    }));
    position+= 500+ Math.floor(Math.random()*1000);
}




map.push(actorM,gameM,...kozakMArr,...stoneMArr);
mapV.push(gameV, actorV,...kozakVArr,...stoneVArr);

let main = new ActorCont({name: "main"}, map);

//console.log(map[0]);

let shotV = new ShotView(actorV);
let shotM = new ShotModel(shotV);



let app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});
/*[gameV, actorV,...kozakVArr,...stoneVArr]*/mapV.forEach(elm => {
    app.stage.addChild(elm.gr);
});



app.ticker.add(function(delta) {
    [...map,main].forEach(elm => elm.tick());
    });




(function frame() {
    requestAnimationFrame( frame );
   /* [actorV, gameV,...kozakVArr,...stoneVArr]*/mapV.forEach(elm => elm.render());
})();


window.addEventListener("load", () => {
    document.body.appendChild(app.view);




});