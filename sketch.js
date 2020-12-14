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



function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	stroke(255, 50, 199	);
	strokeWeight(2);
	createEasyCam();
	document.oncontextmenu = () => false;
	console.log(om_x,om_y,om_z);


}

function draw() {

	background(0);
	beginShape();
	noFill();

	for (let t = 0; t <= 20; t += 0.01) {
		x = A * cos(om_x * t + ph_x);
		y = B * cos(om_y * t + ph_y);
		z = C * cos(om_z * t + ph_z)
		vertex(10 * x, 1 * 10 * y, z * 10);
	}
	endShape();
	// noLoop();
	ph_x+=0.01;
	ph_y+=0.01;
	ph_z+=0.01;

}