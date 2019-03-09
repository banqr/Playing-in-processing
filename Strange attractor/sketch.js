let x = 0
let y = 0
let t = 0
let a = 3.1
let b =  2.3
let c = - 1.3
let d =  4
const skala = 145

function setup() {
  createCanvas(600, 600)
  background(0)
}

function draw() {
	translate(width/2, height/2)
  
  for (let i = 0; i < 500000; i++) {
    
    let xn = sin(a * y) - cos(b * x)
    let yn = sin(c * x) - cos(d * y)
    
    stroke(105, map(i, 0, 500000-1, 0, 255), 255, 50)

    strokeWeight(1)
    point(x * skala, y * skala)
    
    x = xn
    y = yn
    
  	}
  
  noLoop()
  
  }
