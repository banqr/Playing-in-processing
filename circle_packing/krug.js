class Krug{
    constructor(x, y, r, crvena = 255, zelena = 200, plava = 0){
        this.x = x
        this.y = y
        this.r = r
        this.growing = true
        this.crvena = crvena
        this.zelena = zelena
        this.plava = plava
        this.alfa = random(200, 255)
    }

    show(){
        noStroke()
        fill(this.crvena, this.zelena, this.plava)
        ellipse(this.x, this.y, this.r * 2, this.r * 2)
    }

    grow(){
        if(this.growing){
            this.r += 1
        }
    }

    checkEdges(){
        const x = this.x
        const y = this.y
        const r = this.r
        if(x + r > width || x - r < 0 || y + r > height || y - r < 0){
            this.growing = false
        }
    }

    checkOther(others){
        for (let o of others){
            if(o != this){
                const d = dist(o.x, o.y, this.x, this.y)
                if(d < o.r + this.r){
                    this.growing = false
                }
            }
        }
    }
}