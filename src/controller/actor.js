export default class Kozak {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        window.addEventListener("keydown", e=>this.keydown(e.keyCode));
        window.addEventListener("keyup", e=>this.keyup(e.keyCode));

    }

    keydown(keyCode) {
        this.model.move(keyCode - 38);
    }

    keyup(keyCode) {
        if([1, -1].includes(keyCode - 38)) {
            this.model.move(0);
        }
        else if ([-6].includes(keyCode - 38)) {
            this.model.move(6);
        }
    }

}