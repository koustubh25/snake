/**
 * Created by koustubhgaikwad on 7/30/16.
 */


var video;

function setup(){
    createCanvas(600,480);
    background(51);
    pixelDensity(1);
    video  = createCapture(VIDEO);
    video.size(600, 480);

    video.hide();


}


function draw(){

    var pixels = video.get();
    pixels.sin;
    image(pixels.sin);
    //loadPixels();
    //for(var y=0;y<height;y++){
    //    for(var x = 0;x<width;x++){
    //        var index = (x + y*width) *4;
    //        //pixels[index] = 190;
    //        //pixels[index +1 ] = random(255);
    //        //pixels[index + 2] = random(255);;
    //        pixels[index + 3] = random(255);;
    //
    //
    //    }
    //}
    //
    //updatePixels()


}
