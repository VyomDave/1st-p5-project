//function preload(){

//}
 
// function setup(){
//   canavas=createCanvas(800,800)
//   canvas.position(200,200);
//   video = createCapture(VIDEO)
//   video.hide()
// }

// function draw(){
//     image(video,200,250,400,400)
//     fill('blue')
//     rect(0,0,50,600);
//     rect(0,0,600,50);
//     rect(550,0,50,600);
//     rect(0,550,600,50);
//     fill('white')
//     circle(0,0,150);
//     circle(600,0,150);
//     circle(0,600,150);
//     circle(600,600,150);
// }

// function take_snapshot(){
//     save("picture.png")
// }
function preload(){

}

function setup(){
    canvas=createCanvas(600,600);
    canvas.position(200,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,50,50,500,500);
    fill('darkblue');
    rect(0,0,50,600);
    rect(0,0,600,50);
    rect(550,0,50,600);
    rect(0,550,600,50);
    fill('white');
    circle(0,0,250);
    circle(600,0,250);
    circle(0,600,250);
    circle(600,600,250);
}

function take_snapshot(){
    save("picture.png");
    
}
