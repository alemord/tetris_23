document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const scoreDisplay = document.querySelector('#score')
  const startBtn = document.querySelector('#start-button')
  const width = 10
  let nextRandom = 0
  let timerId
  let score = 0

  //colors of the pieces
  const colors = [
    'purple',
    'green',
    'blue',
    'orange',
    'red'
  ]

  //pieces-shapes l, z, t, o, i
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
  
  //show up next piece  
  const displaySquares = document.querySelectorAll('.mini-grid div')
  const displayWidth = 4
  const displayIndex = 0


  //the pieces that cannot rotate
  const upNextShapes = [
    [1, displayWidth+1, displayWidth*2+1, 2],  
    [0, displayWidth, displayWidth+1, displayWidth*2+1],  
    [1, displayWidth, displayWidth+1, displayWidth+2],  
    [0, 1, displayWidth, displayWidth+1],  
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1]  
  ]

  //mini-grid display radar
  function displayShape() {
    displaySquares.forEach(square => {
      square.classList.remove('shape')
      square.style.backgroundColor = ''
    })
    upNextShapes[nextRandom].forEach( index => {
      displaySquares[displayIndex + index].classList.add('shape')
      displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
    })
  }

  //button chill mode
  startBtn.addEventListener('click', () => {
    if (timerId) {
      clearInterval(timerId)
      timerId = null
    } else {
      create()
      timerId = setInterval(moveDown, 500)
      nextRandom = Math.floor(Math.random()*theShapes.length)
      displayShape()
    }
  })

  //button play hard mode
  level.addEventListener('click', () => {
    if (timerId) {
      clearInterval(timerId)
      timerId = null
    } else {
      create()
      timerId = setInterval(moveDown, 200)
      nextRandom = Math.floor(Math.random()*theShapes.length)
      displayShape()
    }
  })
//button play harder mode

  level7.addEventListener('click', () => {
    if (timerId) {
      clearInterval(timerId)
      timerId = null
    } else {
      create()
      timerId = setInterval(moveDown, 50)
      nextRandom = Math.floor(Math.random()*theShapes.length)
      displayShape()
    }
  })
  //score 
  function addScore() {
    for (let i = 0; i < 199; i +=width) {
      const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

      if(row.every(index => squares[index].classList.contains('taken'))) {
        score +=10
        scoreDisplay.innerHTML = score
        row.forEach(index => {
          squares[index].classList.remove('taken')
          squares[index].classList.remove('shape')
          squares[index].style.backgroundColor = ''
        })
        const squaresRemoved = squares.splice(i, width)
        squares = squaresRemoved.concat(squares)
        squares.forEach(cell => grid.appendChild(cell))
        if (score >= 100) {  // you won : checks if the player has won and prompts a message
          clearInterval(timerId)
          document.removeEventListener('keyup', moveIt)
          alert('YOU WON!')
        }
      }
    }
  }

  //you lost
  function gameOver() {
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      scoreDisplay.innerHTML = ' GAME OVER!!!'
      clearInterval(timerId)
    }
  }
})


 


