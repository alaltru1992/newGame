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
import Factory from "./view/factory";
import NavalniyModel from "./model/navalniy"
import NavalniyView from "./view/navalniy";
import Move from "./model/advantages/move";
import UsmanovModel from "./model/usmanov";


let map = [];
let mapV = [];
let shotArr=[];


let actorM = new NavalniyModel({name: "naval'niy"},map);
let usmanovM = new UsmanovModel({name:"usmanov"},map,actorM);
let gameM = new GameModel(actorM,usmanovM);

let moveAdv = new Move(actorM,map);
actorM.advantages.push(moveAdv);




//let actorC = new ActorController(actorM, actorV);
//let shotC = new ActorController(shotM, shotV);

let kozakMArr = [];
let distance = 1000;
for(let i = 0;i<200; i++) {
    kozakMArr.push(new KozakModel({name: "newkazak"},distance, map));
    distance += Math.floor(Math.random()*800)+250;
}
let donateMArr = [];
let path = 5000;
let hightlvl;
let hight = 200;
for (let i = 0; i < 30; i++) {
    donateMArr.push(new DonateModel({name: "donate"}, path, map, hight));
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
let position = 2000;
for (let j =0 ; j < 50; j++) {
    stoneMArr.push(new StoneModel({name: "stone"}, position, map));
    position+= 500+ Math.floor(Math.random()*1000);
}






map.push(gameM,actorM,usmanovM,...kozakMArr,...stoneMArr/*,barM*//*barloadM*/,...donateMArr,...shotArr);
console.log(map);
//mapV.push(gameV,actorV,...kozakVArr,...stoneVArr, barV,...donateVArr,/*barloadV/*/);

let main = new ActorCont({name: "main"}, map);


//console.log(map[0]);

let LBar = new BarView(actorM,{name:"lifebar",settings:{x:15,y:15,width:100}});
let LoadBar = new BarLoadView(actorM,{name:"loadbar",settings:{x:0, y: 55, width: 20}})


const factoryV = new Factory(gameM,actorM);
let ActorC = new ActorController(actorM,map);

let app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});



mapV.push(LBar);
mapV.push(LoadBar);
app.ticker.add(function(delta) {


      [...map].forEach(elm => elm.tick());


    for (let i = 0; i < map.length; i++) {
        for (let k = 0; k < map.length; k++) {
            main.interaction(map[i], map[k]);
        }
    }



    map.forEach(model =>  addView(model,gameM,mapV,factoryV));

});


        mapV.forEach(view => removeView(view,gameM,mapV));






    (function frame() {
        requestAnimationFrame(frame);
        mapV.forEach(elm => elm.render());
        app.stage.addChild(LBar.gr);
        app.stage.addChild(LoadBar.gr);
    })();

    window.addEventListener("load", () => {
        document.body.appendChild(app.view);
    });

function addView(model, gameM, mapV, factoryV){
    if (Math.abs(gameM.pos.x - model.pos.x) < 200000) {
        //если виюха еще не создана
        if (model.viewCreated === false) {
            let view =  factoryV.createActor(model);
            if (view) {
                mapV.push(view);

                model.viewCreated = true;
                app.stage.addChild(view.gr);
            }
        }
    }

}

function removeView(view,gameM,mapV){
    if ((Math.abs(gameM.pos.x - view.gr.x) > 2600)&&!( view instanceof BarView)) {
        mapV.splice(mapV.indexOf(view), 1);
        view.actor.viewCreated = false;
        app.stage.removeChild(view.gr);
    }
}