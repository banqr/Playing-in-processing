class Cell{
    constructor(x, y, w, crvena){
        this.x = x
        this.y = y
        this.w = w
        this.crvena = crvena
        this.touch = false
        this.pos = createVector(this.x, this.y)
        this.ugao = 0
    }

    show(){
        push()
        translate(this.pos.x, this.pos.y)
        stroke(0, 0, 255)
        strokeWeight(1)
        /*
        if(!this.touch){
            fill(this.crvena, 150, 255)
        }
        */
        !this.touch ? fill(this.crvena, 150, 255) : fill(255, 0, 0)
        rect(0, 0, this.w, this.w)
        pop()
    }

    switch(){
        this.touch = true
    }

    unswitch(){
        this.touch = false
    }

    touched(x, y){
        const touch = createVector(x, y)
        
        if(touch.x > this.pos.x && touch.x < this.pos.x + this.w &&
            touch.y > this.pos.y &&
            touch.y < this.pos.y + this.w){
                return true
            }
    }

}