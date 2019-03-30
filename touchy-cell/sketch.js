const w = 20
let kaunt = 0
const cells = []

function setup() {
  createCanvas(300, 600)

  for(let x = 0; x < width; x += w){
      for(let y = 0; y < height; y += w){
          cells.push(new Cell(x, y, w, (x / 3 + y / 2) % 255))
      }
  }
}

function draw() {
  background(0)

  for(let c of cells){
      c.show()
  }
}

function mousePressed(){
    for(let c of cells){
        if(c.touched(mouseX, mouseY)){
            if(c.touch === false){
                c.switch()
            }else if(c.touch === true){
                c.unswitch()
            }
        }
    }
}

