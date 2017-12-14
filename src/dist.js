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



let map = [];
let mapV = [];

let shotM = new ShotModel({name:"shot"},map);
let actorM = new ActorModel({name: "naval'niy"},map,shotM);
let gameM = new GameModel(actorM,map);




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






map.push(gameM,actorM,...kozakMArr,...stoneMArr/*,barM*//*barloadM*/,...donateMArr);
//mapV.push(gameV,actorV,...kozakVArr,...stoneVArr, barV,...donateVArr,/*barloadV/*/);

let main = new ActorCont({name: "main"}, map);


//console.log(map[0]);



const factoryV = new Factory(gameM,actorM);

let app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});
/*[gameV, actorV,...kozakVArr,...stoneVArr]*/mapV.forEach(elm => {
    app.stage.addChild(elm.gr);
});


app.ticker.add(function(delta) {

    [...map, main].forEach(elm => elm.tick());

    /* for(let i = 0; i < map.length; i++) {

         const adv = map[i].advantages;
         for(let k = 0; k < map.length; k++ ) {

         }*/
});

    map.forEach(model =>  addView(model,gameM,mapV,factoryV));
            //находится в зоне действия
         /*   if ((gameM.pos.x - model.pos.x) < 2000) {
                //если виюха еще не создана
                if (model.viewCreated === false) {
                    let view =  factoryV.createActor(model);
                    if (view) {
                        mapV.push(view);
                        model.view = true;
                    }
                }
            }
        }
    )*/
    //находится в вне зоны действия
        mapV.forEach(view => removeView(view,gameM,mapV));
         /*   if ((gameM.pos.x - view.gr.x) > 2600) {
                mapV.splice(mapV.indexOf(view), 1);
                view.actor.view = false;
            }
        } )*/



    (function frame() {
        requestAnimationFrame(frame);
        /* [actorV, gameV,...kozakVArr,...stoneVArr]*/
        mapV.forEach(elm => elm.render());
    })();

    window.addEventListener("load", () => {
        document.body.appendChild(app.view);
    });

function addView(model, gameM, mapV, factoryV){
    if ((gameM.pos.x - model.pos.x) < 2000) {
        //если виюха еще не создана
        if (model.viewCreated === false) {
            let view =  factoryV.createActor(model);
            if (view) {
                mapV.push(view);
                model.view = true;
            }
        }
    }
}

function removeView(view,gameM,mapV){
    if ((gameM.pos.x - view.gr.x) > 2600) {
        mapV.splice(mapV.indexOf(view), 1);
        view.actor.view = false;
    }
}