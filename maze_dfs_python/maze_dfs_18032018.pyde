from celija import Celija
cell_size = 20
celije = []
stack = []
def setup():
    size(500, 500)
    background(0)
    #frameRate(30)
    global kolone, redovi, current
    kolone = width / cell_size
    redovi = height / cell_size
    
    for i in range(kolone):
        celije.append([])
        for j in range(redovi):
            c = Celija(i, j, cell_size, kolone, redovi, celije)
            celije[i].append(c)
    
    current = celije[0][0]
    current.visted = True 
    for i in range(kolone):
        for j in range(redovi):
            n = celije[i][j].checkNeighbors()
            #celije[i][j].removeWalls(n)

def draw():
    background(0)
    #noLoop()
    global current
    for i in range(kolone):
        for j in range(redovi):
            celije[i][j].show()
            
    #for s in stack:
        #s.highlight_stack()
        
    next = current.checkNeighbors()
    if next:
        next.visited = True
        stack.append(current)
        current.removeWalls(next)
        current = next
    elif len(stack) > 0:
        current = stack.pop()
        current.highlight()
    #saveFrame
    #saveFrame("maze-#####.png")
            
    
    