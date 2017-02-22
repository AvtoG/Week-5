function setup() { 
  createCanvas(800, 400);
} 

var x=30

function draw() { 
	
	while(x<1100){
	strokeWeight(12)
	noFill()
	ellipse(400,0,x,x)
		x=x+50
}
}
