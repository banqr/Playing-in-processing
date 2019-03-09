class Rekt{
	constructor(x, y, s){
  	this.x = x
    this.y = y
    this.s = s
    this.rounded = 5
    this.ugao = random(-TWO_PI, TWO_PI)
    this.ugao2 = random(-TWO_PI, TWO_PI)
    this.accelerator = random(0.001, 0.006)
    this.accelerator2 = random(0.01, 0.03)
    this.wiggle = random(10, 50)
    this.crvena = random(200, 255)
    this.alfa = random(200, 255)
    this.pos = createVector(this.x, this.y)
    this.vel = createVector(random(-0.5 , 0.5), 0)
    this.acc = createVector(0, 0)
  }
  
  render(){
    noStroke()
    fill(this.crvena, this.pos.y / 6, 31, this.alfa)
  	push()
    translate(this.pos.x, this.pos.y)
    rotate(this.ugao2)
    rectMode(CENTER)
    rect(0 + sin(this.ugao) * this.wiggle, 0, this.s, this.s, this.rounded)
    pop()
  }
  
  update(){
  	this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.acc.mult(0)
    this.ugao += this.accelerator
    this.ugao2 += this.accelerator2
    this.alfa -= 0.7
    this.s -= 0.07
  }
  
  applyForce(force){
  	this.acc.add(force)
  }
}