const balls = []

function setup() {
  createCanvas(400, 800)

  balls.push(new Krug(100, 600, 50, 255, 10, random(255)))
}

function draw() {
  background(255)

  for (let i = 0; i < 5; i++){
    createCircle()
  }  
  

  balls.forEach(ball =>{
      ball.show()
      ball.grow()
      ball.checkEdges()
      ball.checkOther(balls)
  })
}

function createCircle(){
    const x = random(width)
    const y = random(height)
    let valid = true

    for (let b of balls){
        const d = dist(x, y, b.x, b.y)
        if(d - 2 < b.r){
            valid = false
        }
    }
    if(valid){
        balls.push(new Krug(x, y, random(5), 10, 10, random(255)))
    }
}