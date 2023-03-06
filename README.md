# myTetris2023

### This is a HTML, CSS and JavaScript code for a classic Tetris game. This code creates a grid, generates geometric shapes and allows the user to move pieces around within the grid.
### I created a variable grid that holds the div elements (200) with a class of grid. The scoreDisplay variable holds the element with an ID of score, and startBtn holds the element with an ID of start-button. 
### A mini-grid is also defined to allow player to see next in line shapes that have been randomly selected.
### The code then defines five geometric shapes, each one with a different color and four different rotation options.
### The shapes include L-shape, Z-shape, T-shape, O-shape, and I-shape.
### If a shape is blocked and can't move down, the game freezes the shape and adds its squares to the taken class, while prompting a new shape to be created at the top of the grid.
### The code defines several variables that will be used to keep track of the game state. currentPosition is set to 4, which is the starting position of the shape. currentRotation is set to 0, which represents the initial rotation of the shape. random is set to a random number between 0 and 4, which is used to select a shape from the theShapes array. 
### The code defines two functions, create () and erase (), that respectively add or remove a shape fro mthe grid. These functions also set the background color of the squares to the color of the tetromino.
### When player reaches a score of 200, the player wins. When player's grid is full, a "Game Over" prompt is triggered.

#### Author

##### Alessandro Mordini


#### Sources and Acknowledgments:
##### * https://code-projects.org/tetris-game-in-javascript-with-source-code/
##### * https://codeincomplete.com/articles/javascript-tetris/
##### * https://michael-karen.medium.com/learning-modern-javascript-with-tetris-92d532bcd057
##### * https://levelup.gitconnected.com/build-a-tetris-game-with-html-canvas-css-and-javascript-on-autocode-132c8346e60c
##### * https://www.freecodecamp.org/news/learn-javascript-by-creating-a-tetris-game/
##### * https://rosettacode.org/wiki/Tetris/JavaScript
##### * https://www.youtube.com/watch?v=HEsAr2Yt2do&t=391s&ab_channel=CodeExplained


> GitHub [@alemord](https://github.com/alemord) &nbsp;&middot;&nbsp;
> Email: alessandro.mordini@gmail.com


