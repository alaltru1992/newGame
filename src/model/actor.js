export default class Actor {

    constructor() {
        this.speed = 5;
        this.position = {x: 0, y: 560};
        this.direction = 0;
        this.jump = 10 ;
        this.isRun = 0;

    }

    tick() {

        if(this.direction === -1) {
            this.position.x =- this.speed;
            this.isRun = -1;




        }
        else if(this.direction === +1) {
            this.position.x = this.speed;
            this.isRun = 1;




        }
        if (this.direction === 0){
            this.position.x = 0;
             this.isRun = 0;

        }

        if (this.direction === -6){

            this.position.y -= this.jump;


              if(this.isRun === 0){
                  this.position.x = 0;
              }
              if(this.isRun === 1){
                  this.position.x = this.speed;
              }
              if(this.isRun === -1){
                  this.position.x = -this.speed;
              }

        }

       // this.dir = this.direction;

    }

    /**
     *
     * @param direction -1/+1/0
     */
    move(direction) {
        this.direction = direction;
    }

}


class Point {

    constructor() {
        this.x = 0;
        this.y = 0;
    }

}