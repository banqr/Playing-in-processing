class Grid{
    constructor(sirina, visina, w){
        this.sirina = sirina
        this.visina = visina
        this.w = w
        this.kolone = this.sirina / this.w
        this.redovi = this.visina / this.w
        this.grid = []
        this.generated_grid = this.generate_grid()
    }

    generate_grid(){
        for(let j = 0; j < this.redovi; j++){
            this.grid.push([])
            for(let i = 0; i < this.kolone; i++){
                const slucajni = random(1)
                slucajni < 0.4 ? this.grid[j][i] = 1 : this.grid[j][i] = 0 
            }
        }
    }

    show_grid(){
        for(let j = 0; j < this.redovi; j++){
            for(let i = 0; i < this.kolone; i++){
                const cell = this.grid[j][i]
                cell === 1 ? fill(255) : fill(0)
                noStroke()
                rect(i * this.w, j * this.w, this.w, this.w)
            }
        }
    }

    get_grid_value(j, i){
        if(j >= 0 && j < this.redovi && i >= 0 && i < this.kolone){
            return this.grid[j][i]
        }else{
            return null
        }
    }

    generate_next_grid(){
        const next = []
        let suma = 0

        for(let j = 0; j < this.redovi; j++){
            next.push([])
            for(let i = 0; i < this.kolone; i++){
                
                const trenutna = this.get_grid_value(j, i)
                const levo = this.get_grid_value(j, i - 1)
                const levo_iznad = this.get_grid_value(j - 1, i -1)
                const levo_ispod = this.get_grid_value(j + 1, i - 1)
                const desno = this.get_grid_value(j, i + 1)
                const desno_iznad = this.get_grid_value(j - 1, i + 1)
                const desno_ispod = this.get_grid_value(j + 1, i + 1)
                const iznad = this.get_grid_value(j - 1, i)
                const ispod = this.get_grid_value(j + 1, i)
                suma = levo + levo_iznad + levo_ispod + desno + desno_iznad + desno_ispod + iznad + ispod

                if(trenutna === 0 && suma === 3){
                    next[j][i] = 1
                }else if(trenutna === 1 && (suma < 2 || suma > 3)){
                    next[j][i] = 0
                }else{
                    next[j][i] = trenutna
                }
            }
        }
        this.grid = next
    }
}