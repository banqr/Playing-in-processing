const sirina = 600
const visina = 400
const w = 10
let grid

function setup() {
  createCanvas(sirina, visina)
  grid = new Grid(sirina, visina, w)
}

function draw() {
  background(0)
  grid.generate_next_grid()
  grid.show_grid()
}



