function setup() {
    createCanvas(400, 800)
    colorMode(HSB)
    background(190, 255, 255)
    let kaunt = 0
    
    for (let y = 0; y < height + 20; y += 10){
      beginShape()
      
      let mnoz = random() * 20
      let wejt = random(0.5, 2)
      
      for (let x = 0; x < width + 10; x += 1){
        let ipsi = y + pow(randomGaussian(0, 0.5) * sin(kaunt), 2) * mnoz
        stroke(255)
        strokeWeight(wejt)
        noFill()
        vertex(x, ipsi)
        kaunt += 0.03
        }
    endShape()
    }  
  }
  
  function draw() {
    
  }