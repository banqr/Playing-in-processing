let objs = []
function setup() {
	createCanvas(400, 700)

  for (let i = 0; i < 1000; i++){
		objs.push(new Obj(random(width), random(-10, -1000), random(1, 5)))
	}
	
}

function draw() {
	background(0)
	
	for (let o of objs){
		const gravity = createVector(0, 0.003)
		o.update()
		o.applyForce(gravity)
		o.checkEdge()
		o.render()
	}
	
}