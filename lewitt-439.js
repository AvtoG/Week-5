function setup() { 
  createCanvas(800, 400);
} 

var x=200
var y=200
var x1=8
var y1=5
	
function draw() { 
	background(103,195,224)
	
	fill(174,84,58)
	noStroke()
	triangle(600,75,200,200,250,275)
	
	fill(220,112,44)
	noStroke()
	triangle(600,75,250,275,350,300)
	
	fill(208,171,0)
	noStroke()
	triangle(600,75,350,300,475,300)
	
	fill(192,69,84)
	noStroke()
	triangle(600,75,475,300,675,275)
	
	fill(104,51,25)
	noStroke()
	triangle(600,75,675,275,750,200)
}
