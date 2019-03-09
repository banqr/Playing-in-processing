class Obj{
	constructor(x, y, r){
		this.x = x
		this.y = y
		this.r = r
		this.ugao = 0
		this.pos = createVector(this.x, this.y)
		this.vel = createVector(0, 0)
		this.acc = createVector(0, 0)
		this.speed = random(0.01, 0.1)
		this.alfa = random(255)
	}
	
	render(){
		stroke(255, this.alfa)
		strokeWeight(this.r)
		point(this.pos.x + sin(this.ugao) * 12, this.pos.y)
	}
	
	update(){
		this.pos.add(this.vel)
		this.vel.add(this.acc)
		this.vel.limit(this.r)
		this.acc.mult(0)
		this.ugao += this.speed
		this.alfa -= 1
		
		if (this.alfa < 0){
			this.alfa =random(255)
		}
	}
	
	applyForce(force){
		let f = force.copy()
		f.mult(this.r)
		this.acc.add(f)
	}
	
	checkEdge(){
		if (this.pos.y > height + this.r){
			this.pos.y = random(-20, -10)
		}
	}
}