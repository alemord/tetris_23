const PIECES = [  [[0, 0], [0, 1], [1, 0], [1, 1]],  // square
  [[0, -1], [0, 0], [0, 1], [0, 2]], // line
  [[0, -1], [0, 0], [1, 0], [1, 1]], // L-shape
  [[0, 1], [0, 0], [1, 0], [1, -1]], // inverse L-shape
  [[0, 0], [0, 1], [0, -1], [1, 0]], // T-shape
  [[0, 0], [0, 1], [0, -1], [1, -1]],// S-shape
  [[0, 0], [0, -1], [0, 1], [1, 1]] // Z-shape
];

//initialize board  
class Game {
  constructor() {
    this.board = [];  
    this.currentPiece = null;  
    this.score = 0;  
  }
const colors = [
  'orange',
  'red',
  'purple',
  'green',
  'blue'
]
