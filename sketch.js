var target1;

function setup(){
createCanvas(800,800);

target1 = new Target(400,400,40,40);
target1.setVelocityY = 2,-2;
target1.setVelocityX = -2,2;
target1.lifeTime = 5;
}

function Draw(){
background("black")



target1.display();
}