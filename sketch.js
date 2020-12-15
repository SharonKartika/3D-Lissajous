let om_x = Math.floor(Math.random() * 15)+1;
let om_y = Math.floor(Math.random() * 50)+1;
let om_z = Math.floor(Math.random() * 7)+1;

let ph_x = 1;
let ph_y = 1;
let ph_z = 5;

let A = 20;
let B = 20;
let C = 20;

let x = 0;
let y = 0;
let z = 0;

let length=100;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	colorMode(RGB);
	stroke(23, 243, 255);

	strokeWeight(1);
	createEasyCam();
	document.oncontextmenu = () => false;
	console.log(om_x,om_y,om_z);
	om_x=1.96;
	A=2;
	om_y=1.95;
	B=1.46;
	om_z=2;
	C=1.75;

}

function draw() {

	background(0);
	beginShape();
	noFill();

	for (let t = 0; t <= length; t += 0.05) {

		x = A * cos(om_x * t + ph_x);
		y = B * cos(om_y * t + ph_y);
		z = C * cos(om_z * t + ph_z)
		vertex(100* x,   100 * y, z * 100);
	}
	endShape();
	// noLoop();
	// ph_x+=0.01;
	// ph_y+=0.01;
	// ph_z+=0.01;

}