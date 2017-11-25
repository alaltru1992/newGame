export default class Kozak {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        window.addEventListener("keydown", e=>this.keydown(e.keyCode));
        window.addEventListener("keyup", e=>this.keyup(), e=>this.keyup());

    }

    keydown(keyCode) {
        this.model.move(keyCode - 38);
    }

    keyup() {
        this.model.move(0);
    }

}