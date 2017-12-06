import Actor from "./actor"
//import ShotModel from "./model/shot"

export default class Shot extends Actor{

   render(){
          this.gr.x = window.innerWidth/2+this.actor.pos.x;
          this.gr.y = window.innerHeight/2+this.actor.pos.y-60;
         // this.scale = 30;
   }




}