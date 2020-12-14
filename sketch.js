let om_x=1;
let om_y=2;
let om_z=3;

let ph_x=1;
let ph_y=1;
let ph_z=1;

let A=20;
let B=20;
let C=20;

let x=0;
let y=0;
let z=0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	noFill();
	stroke(255);

}

function draw() {
	background(0);
	beginShape();
	for (let t = 0; t <= 10; t += 0.01) {
		x = A * cos(om_x * t + ph_x);
		y = B * cos(om_y * t + ph_y);
		z = C * cos(om_z * t + ph_z)
		curveVertex(10 * x, 1 * 10 * y, z *10);
	}
	endShape();
	noLoop();
}