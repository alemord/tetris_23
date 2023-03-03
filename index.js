  //colors of the pieces
  const colors = [
    'purple',
    'green',
    'blue',
    'orange',
    'red'
  ]

  //pieces
  const lShape = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zShape = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tShape = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oShape = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iShape = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

const theShapes = [lShape, zShape, tShape, oShape, iShape]

  let currentPosition = 4
  let currentRotation = 0

  console.log(theShapes[0][0])

    //create the shape
    function create() {
      current.forEach(index => {
        squares[currentPosition + index].classList.add('shape')
        squares[currentPosition + index].style.backgroundColor = colors[random]
        squares[currentPosition + index].style.borderRadius = '28px'
      })
    }
  
    //delete the shape
    function erase() {
      current.forEach(index => {
        squares[currentPosition + index].classList.remove('shape')
        squares[currentPosition + index].style.backgroundColor = ''
  
      })
    }

  //select a piece randomly
  let random = Math.floor(Math.random()*theShapes.length)
  let current = theShapes[random][currentRotation]


  //keyCodes numbers
  function moveIt (e) {
    if(e.keyCode === 37) {
      moveLeft()
    } else if (e.keyCode === 38) {
      rotate()
    } else if (e.keyCode === 39) {
      moveRight()
    } else if (e.keyCode === 40) {
      moveDown()
    }
  }
  document.addEventListener('keyup', moveIt)

  //move down function
  function moveDown() {
    erase()
    currentPosition += width
    create()
    freeze()
  }

  //move a piece left funcion
  function moveLeft() {
    erase()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    if(!isAtLeftEdge) currentPosition -=1
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition +=1
    }
    create()
  }

  //move a piece right function
  function moveRight() {
    erase()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
    if(!isAtRightEdge) currentPosition +=1
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition -=1
    }
    create()
  }

    //freeze function
    function freeze() {
      if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
        current.forEach(index => squares[currentPosition + index].classList.add('taken'))
  
        random = nextRandom
        nextRandom = Math.floor(Math.random() * theShapes.length)
        current = theShapes[random][currentRotation]
        currentPosition = 4
        create()
        displayShape()
        addScore()
        gameOver()
      }
    }  

  //rotation
  function isRight() {
    return current.some(index=> (currentPosition + index + 1) % width === 0)  
  }
  
  function isLeft() {
    return current.some(index=> (currentPosition + index) % width === 0)
  }
  
  function checkRotatedPosition(P){
    P = P || currentPosition        
    if ((P+1) % width < 4) {             
      if (isRight()){             
        currentPosition += 1     
        checkRotatedPosition(P)  
        }
    }
    else if (P % width > 5) {
      if (isLeft()){
        currentPosition -= 1
      checkRotatedPosition(P)
      }
    }
  }
  
  //rotate a piece
  function rotate() {
    erase()
    currentRotation ++
    if(currentRotation === current.length) {  
      currentRotation = 0
    }
    current = theShapes[random][currentRotation]
    checkRotatedPosition()
    create()
  }
