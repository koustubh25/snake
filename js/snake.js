var s;
var scl = 20;
var food;

function setup(){
    createCanvas(600, 600);
    s = new Snake();
    pickLocation();
}

function draw(){

    background(51);
    s.update();
    s.show();
    frameRate(10);
    if(s.eat(food)){
        pickLocation();
        console.log(s.tail);

    }

    fill(255, 0 ,100);

    rect(food.x , food.y, scl , scl);

}


function pickLocation(){
    var rows = floor(height/scl);
    var cols = floor(width/scl);

    food = createVector(floor(random(cols)), floor(random(rows)));

    food.mult(scl);
}

function keyPressed(){

    if(keyCode == UP_ARROW){
        s.dir(0,-1);
    }
    else if(keyCode == DOWN_ARROW){
        s.dir(0,1);
    }
    else if(keyCode == LEFT_ARROW){
        s.dir(-1,0);
    }
    else if(keyCode == RIGHT_ARROW){
        s.dir(1,0);
    }
}

function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed =1 ;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.update = function() {
        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;

        this.x  = constrain(this.x, 0, width-scl );
        this.y = constrain(this.y, 0, height-scl );


        for(var i= 0;i<this.tail.length -1 ;i++){
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total - 1 ] = createVector(this.x , this.y);

    };

    this.show = function(){
        fill(255);

        for(var i = 0;i<this.total ;i++){
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }

        rect(this.x , this.y , scl, scl);
    };

    this.dir = function(x,y){
        this.xspeed = x;
        this.yspeed = y;
    };

    this.eat = function(food){
        //check the distance of the food from the snake

        var d = dist(this.x, this.y, food.x , food.y);
        if(d<1) {
            this.total++;
            return true;
        }
        return false;

    }
}