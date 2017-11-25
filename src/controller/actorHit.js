export default class ActorHit {
    constructor(actor, object){
        this.actor = actor;
        this.object = object;
    }

    renderer(actor, object) {
        if (Math.abs(actor.gr.x - object.gr.x) < 2) {
            actor.speed = 0;
            actor.position.x = 0;

        }
    }
}