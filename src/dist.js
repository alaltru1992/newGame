import ActorModel from "./model/actor"
import ActorView from "./view/actor"
import ActorController from "./controller/actor"
import GameView from "./view/game"
import GameModel from "./model/game"
import StoneView from "./view/stone"
import StoneModel from "./model/stone"
import KozakView from "./view/kozak"
import KozakModel from "./model/kozak"
import ActorCont from "./controller/actorHit"
import ShotView from "./view/shot"
import ShotModel from "./model/shot"

let actorM = new ActorModel();
let gameM = new GameModel(actorM);

let gameV = new GameView(gameM);
let actorV = new ActorView(actorM, gameM);

let actorC = new ActorController(actorM, actorV);

let stoneV = new StoneView();
let stoneM = new StoneModel(stoneV);

let kozakV = new KozakView();
let kozakM = new KozakModel(kozakV);

let actorH = new ActorCont(actorV,kozakV);

let shotV = new ShotView(actorV);
let shotM = new ShotModel(shotV);





let app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});
[gameV, actorV, stoneV, kozakV].forEach(elm => app.stage.addChild(elm.gr));

app.ticker.add(function(delta) {
    [actorM, gameM, stoneM, kozakM].forEach(elm => elm.tick());
});

/*app.ticker.add(function(delta) {
    [actorC].forEach(elm => elm.tick(actorV, kozakV));
});*/

(function frame() {
    requestAnimationFrame( frame );
    [actorV, gameV, stoneV, kozakV].forEach(elm => elm.render());
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