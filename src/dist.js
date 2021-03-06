
import ActorController from "./controller/actor"
import GameModel from "./model/game"
import StoneModel from "./model/stone"
import KozakModel from "./model/kozak"
import ActorCont from "./model/actorHit"
import BarView from "./view/bar"
import BarLoadView from "./view/barload"
import SignatureView from "./view/signature"
import DonateModel from "./model/donate"
import Factory from "./view/factory";
import NavalniyModel from "./model/navalniy"
import UsmanovModel from "./model/usmanov";
import Fusilier from "./model/advantages/fusilier";
import ShotNew from "./model/shot_new";
import ShotBoss from "./model/advantages/shotboss";
import BoxM from "./model/box";
import PamfilovaM from "./model/pamfilova";
import ShotBoss2 from "./model/advantages/shotboss2";
import ButtonM from "./model/button";
import MessageM from "./model/message";
import MesSent from "./model/advantages/messageSent";
import PutinM from "./model/putin";
import SignM from "./model/sign";
import BusM from "./model/bus";
import DoshikM from "./model/doshik";
import WritingBarM from "./view/writingBar";
import WritingLBarM from "./view/writingLBar";
import WritingSBarM from "./view/writingSBar";
import GrandM from "./model/grand";
import GrandThr from "./model/advantages/grandthrow";
import DestroyM from "./model/advantages/destroy";
import KozakHitM from "./model/advantages/kozakHit";


let map = [];
let mapV = [];
let shotArr=[];


let actorM = new NavalniyModel({name: "naval'niy"},map);
let usmanovM = new UsmanovModel({name:"usmanov"},map,actorM);
let buttonM = new ButtonM({name:"button"},59600,map,0);
let pamfilovaM = new PamfilovaM({name:"pamfilova"},map,actorM,buttonM);
let putinM = new PutinM({name:"putin"},map,actorM);
let gameM = new GameModel(actorM,usmanovM,pamfilovaM,putinM);


actorM.advantages.push(new Fusilier({snaryad: ShotNew, actor: actorM, map, game:gameM}));
//actorM.advantages.push(new KozakHitM( actorM,map));
//actorM.advantages.push(new DestroyM( actorM,map));
usmanovM.advantages.push(new ShotBoss({snaryad: ShotNew, actor: usmanovM, map, game: gameM, aim: actorM}));
pamfilovaM.advantages.push(new ShotBoss2({snaryad: ShotNew, actor: pamfilovaM, map, game: gameM, aim: actorM}));
buttonM.advantages.push(new MesSent({snaryad: MessageM,actor: actorM, map: map, button: buttonM}));





//let actorC = new ActorController(actorM, actorV);
//let shotC = new ActorController(shotM, shotV);

let kozakMArr = [];
let distance = 1000;
for(let i = 0;i<200; i++) {
    kozakMArr.push(new KozakModel({name: "newkazak"},distance, map));
    kozakMArr[i].advantages.push(new DestroyM(kozakMArr[i],map));
    distance += Math.floor(Math.random()*800)+250;
}

let grandMArr = [];
let gap = 80000;
for(let i = 0;i<19; i++) {
    grandMArr.push(new GrandM({name: "grand"},gap, map));
    grandMArr[i].advantages.push(new GrandThr({snaryad: ShotNew, actor:grandMArr[i], map, game: gameM, aim: actorM}));
    gap += Math.floor(Math.random()*800)+500;
}
let donateMArr = [];

let path;
let height;
let don = new DonateModel({name: "donate"}, 0, map, 0);
for (let i = 0; i < 48; i++) {
    path = don.donatepos[i].x;
    height = don.donatepos[i].y;
    donateMArr.push(new DonateModel({name: "donate"}, path, map, height));
}
let dosh = new DoshikM({name: "doshik"}, 0, map, 0);
for (let i = 0; i < 6; i++) {
    path = dosh.donatepos[i].x;
    height = dosh.donatepos[i].y;
    donateMArr.push(new DoshikM({name: "doshik"}, path, map, height));
}

let stoneMArr = [];
let st = new StoneModel({name: "stone"}, 1000000, map);
for (let j =0 ; j < 50; j++) {
    path = st.stonePos[j];
    stoneMArr.push(new StoneModel({name: "stone"}, path, map));

}

let boxMArr = [];
let boxPos = 34200;
boxMArr.push(new BoxM({name:"box"}, boxPos));
 boxPos = 59300;
boxMArr.push(new BoxM({name:"box"}, boxPos));






map.push(gameM,actorM,usmanovM,buttonM,pamfilovaM,putinM,...kozakMArr,...stoneMArr/*,barM*//*barloadM*/,...donateMArr,...shotArr,...boxMArr,...grandMArr);
//mapV.push(gameV,actorV,...kozakVArr,...stoneVArr, barV,...donateVArr,/*barloadV/*/);


let main = new ActorCont({name: "main"}, map);


//console.log(map[0]);

let LBar = new BarView(actorM,{name:"lifebar",settings:{x:15,y:15,width:100}});
let LoadBar = new BarLoadView(actorM,{name:"loadbar",settings:{x:0, y: 55, width: 15}});
let SignatureBar = new SignatureView(actorM,{name:"signaturebar",settings:{x:0, y: 95, width: 15}});
let WritingBar = new WritingBarM(actorM);
let WritingLBar = new WritingLBarM(actorM);
let WritingSBar = new WritingSBarM(actorM);


const factoryV = new Factory(gameM,actorM);
let ActorC = new ActorController(actorM,map,usmanovM);

let app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});

mapV.push(LBar);
mapV.push(LoadBar);
mapV.push(SignatureBar);
mapV.push(WritingBar);
mapV.push(WritingLBar);
mapV.push(WritingSBar);


let time = setInterval(function() {
    if (usmanovM.gameStop === 0){
        usmanovM.advantages.forEach($=>$.action());
        usmanovM.advantages.forEach($=>$.tick());
    }
}, 400);

let time2 = setInterval(function() {
    if (pamfilovaM.gameStop === 0){
        pamfilovaM.advantages.forEach($=>$.action());
        pamfilovaM.advantages.forEach($=>$.tick());
    }
}, 800);

let time3 = setInterval(function() {
    if (putinM.gameStop === 0){
      //  map.push(new SignM({actor:putinM}));
    }
}, 1800);

let time4 = setInterval(function() {
    if (putinM.gameStop === 0){
        map.push(new BusM({actor:putinM}));
    }
}, 10000);
let time5 = setInterval(function() {
    if (actorM.load === 4){
        actorM.load = 0;
    }
}, 40000);

let time6 = setInterval(function() {
    for(let i =0; i< grandMArr.length; i++) {
        if (Math.abs(grandMArr[i].pos.x - actorM.pos.x) < 800) {
            grandMArr.forEach(x =>x.advantages.forEach($ => $.action()));
            grandMArr.forEach(x =>x.advantages.forEach($ => $.tick()));
        }
    }
}, 2000);




    app.ticker.add(function(delta) {
        /*if(actorM.life === 0){
            mapV= [];
            alert('you lost');
        }*/




          [...map].forEach(elm => elm.tick());



        for (let i = 0; i < map.length; i++) {
            for (let k = 0; k < map.length; k++) {
                main.interaction(map[i], map[k]);
            }
        }
    //    map.forEach(x => x.advantages.forEach($ => $.tick()));

        map.forEach(elem =>{
            if (elem instanceof ShotNew) {
                elem.props.forEach(el => el.tick());
            }
        });

        buttonM.advantages.forEach($ => $.tick());
       // mapV.forEach(view => removeView(view,gameM,mapV));
    });


    const menu = new PIXI.Container();
    menu.addChild(LBar.gr);
    menu.addChild(LoadBar.gr);
    menu.addChild(SignatureBar.gr);
    menu.addChild(WritingBar.gr);
    menu.addChild(WritingLBar.gr);
    menu.addChild(WritingLBar.gr);


    const gameContainer = new PIXI.Container();

    app.stage.addChild(gameContainer);
    app.stage.addChild(menu);


      //  mapV.forEach(view => removeView(view,gameM,mapV))

    (function frame() {
        requestAnimationFrame(frame);
        map.forEach(model =>  addView(model,gameM,mapV,factoryV));
        mapV.forEach(view => removeView( view, gameM, mapV) );
        mapV.forEach(elm => elm.render());
    })();


    window.addEventListener("load", () => {
        document.body.appendChild(app.view);
    });

    function addView(model, gameM, mapV, factoryV){
        if (Math.abs(gameM.pos.x - model.pos.x) < 3000) {
            //если виюха еще не создана
            if (model.viewCreated === false) {
                let view = factoryV.createActor(model);
                if (view) {
                    mapV.push(view);

                    model.viewCreated = true;
                    gameContainer.addChild(view.gr);
                }
            }
        }
    }

    function removeView( view, gameM, mapV ){
        if(view.actor && ((gameM.pos.x - view.actor.pos.x > 3000) || !map.includes(view.actor))) {
            mapV.splice(mapV.indexOf(view), 1);
            gameContainer.removeChild(view.gr);
        }
    }



