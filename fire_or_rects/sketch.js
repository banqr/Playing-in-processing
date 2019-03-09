let fire = []

function setup() {
  createCanvas(400, 800);
}

function draw() {
  background(0);

 	fire.push(new Rekt(width/2, height + 50, random(10, 30)))

  //let agravity = createVector(0, -0.02)
  for (let f of fire){
    let agravity = createVector(0, -0.002 * f.s)
    let idx = fire.indexOf(f)
  	f.render()
    f.applyForce(agravity)
    f.update()
    if (f.s < 0){
    	fire.splice(idx, 1)
    }
  }
}