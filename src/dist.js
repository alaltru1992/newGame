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
import BarView from "./view/bar"
import BarModel from "./model/bar"
import BarLoadView from "./view/barload"
import BarLoadModel from "./model/barload"
import ShotView from "./view/shot"
import ShotModel from "./model/shot"
import DonateView from "./view/donate"
import DonateModel from "./model/donate"




let map = [];
let mapV = [];
let shotM = new ShotModel({name:"shot"},map, actorM);
let shotV = new ShotView(shotM,gameM,{
    name: "shot",
    runs: new Array(6).fill(0).map( (_, index) => "res/fireball.png" ),
    jump: {up: "res/fireball.png", fall: "res/fireball.png"},
    stand: "res/fireball.png"
},mapV);
let actorM = new ActorModel({name: "naval'niy"},map,shotM);
let gameM = new GameModel(actorM,map,shotV);
let barM = new BarModel({name:"lifebar"},map);
let barV = new BarView(barM,gameM, {name:"lifebar"});
let barloadM = new BarLoadModel({name:"loadbar"},map);
let barloadV = new BarLoadView(barloadM,gameM, {name:"loadbar"});




let gameV = new GameView(gameM,mapV);
let actorV = new ActorView(actorM, gameM, {
    name: "naval'niy",
    runs: new Array(6).fill(0).map( (_, index) => "res/frame-" + (index+1) + ".png" ),
    jump: {up: "res/jump_up.png", fall: "res/jump_fall.png"},
    stand: "res/stand.png"
},mapV,shotV);



let actorC = new ActorController(actorM, actorV);
let shotC = new ActorController(shotM, shotV);


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
    },mapV));
    distance += Math.floor(Math.random()*800)+250;
}

let path = 5000;
let hightlvl;
let hight = 200;
let donateMArr = [];
let donateVArr = [];
for (let i = 0; i < 30; i++){
    donateMArr.push(new DonateModel({name: "donate"},path, map,hight));
    donateVArr.push(new DonateView(donateMArr[i], gameM, {
        name: "donate",
        runs: new Array(6).fill(0).map( (_, index) => "res/donate.png" ),
        jump: {up: "res/donate.png", fall: "res/donate.png"},
        stand: "res/donate.png"
    },mapV));
    path += Math.floor(Math.random()*800)+1000;
    hightlvl = Math.floor(Math.random() * 2);
    if (hightlvl === 0){
        hight = 300;
    }
    else if(hightlvl ===1){
        hight = 250;
    }

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
    },mapV));
    position+= 500+ Math.floor(Math.random()*1000);
}
/*let lbname;
lbname.gr = gr = new PIXI.Text("Lifebar");
lbname.gr.x = 30;
lbname.gr.y = 30;*/




map.push(gameM,actorM,...kozakMArr,...stoneMArr,barM,...donateMArr,barloadM/*,...donateMArr*/);
mapV.push(gameV,actorV,...kozakVArr,...stoneVArr,barV,...donateVArr,barloadV/*,...donateVArr*/);

let main = new ActorCont({name: "main"}, map);


//console.log(map[0]);

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