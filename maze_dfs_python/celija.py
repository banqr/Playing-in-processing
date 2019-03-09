class Celija:
    def __init__(self, i, j, cell_size, kolone, redovi, celije):
        self.i = i
        self.j = j
        self.c = cell_size
        self.k = kolone
        self.r = redovi
        self.celije = celije
        self.walls = [True, True, True, True]
        self.visited = False
        self.ugao = random(10)
    
    def get_cell(self, i, j):
        if i >= 0 and i < self.k and j >= 0 and j < self.r:
            return self.celije[i][j]
        else:
            return -1
        
    def removeWalls(self, n):
        if n:
            #idem na dole
            if self.j < n.j and self.i == n.i:
                self.walls[1] = False
                n.walls[0] = False
                
            #idem na levo
            if self.i < n.i and self.j == n.j:
                self.walls[3] = False
                n.walls[2] = False
                
            #idem na gore
            if self.j > n.j and self.i == n.i:
                self.walls[0] = False
                n.walls[1] = False
                   
            #idem na desno
            if self.i > n.i and self.j == n.j:
                self.walls[2] = False
                n.walls[3] = False
        
    def checkNeighbors(self):
        neighbors = []
        i = self.i
        j = self.j
        gore = self.get_cell(i, j - 1)
        dole = self.get_cell(i, j + 1)
        levo = self.get_cell(i - 1, j)
        desno = self.get_cell(i + 1, j)
        
        if gore != -1 and not gore.visited:
            neighbors.append(gore)
        if dole != -1 and not dole.visited:
            neighbors.append(dole)
        if levo != -1 and not levo.visited:
            neighbors.append(levo)
        if desno != -1 and not desno.visited:
            neighbors.append(desno)
            
        if len(neighbors) > 0:
            slucaj = floor(random(0, len(neighbors)))
            n = neighbors[slucaj]
            return n
        
    def highlight(self):
        x = self.i * self.c
        y = self.j * self.c
        l = self.c
        noStroke()
        fill(0)
        rect(x, y, l, l)
        
    def highlight_stack(self):
        x = self.i * self.c
        y = self.j * self.c
        l = self.c
        noStroke()
        fill(247, 255, 103)
        rect(x, y, l, l)
    
    def show(self):
        stroke(128, 196, 255)
        #strokeWeight(map(sin(self.ugao), -1 , 1, 2, 5))
        strokeWeight(2)
        self.ugao += 0.1
        x = self.i * self.c
        y = self.j * self.c
        l = self.c
        #gore
        if self.walls[0]:
            line(x, y, x + l, y)
        
        #dole
        if self.walls[1]:
            line(x, y + l, x + l, y + l)
        
        #levo
        if self.walls[2]:
            line(x, y, x, y + l)
        
        #desno
        if self.walls[3]:
            line(x + l, y, x + l, y + l)
        
        #if visited
        if self.visited == True:
            fill(0)
            noStroke()
            rect(x, y, l, l)