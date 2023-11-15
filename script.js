
const board = document.getElementById('board');
const cells = board.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'X';

let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
] ;       



cells.forEach(cell => {
    cell.addEventListener('click', () => {
  
      cell.classList.add('flash-blue');
      
    });
  });



function restartGame(){

gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
] ;


var cells = document.querySelectorAll('.cell'), i;

for (i = 0; i < cells.length; ++i) {


cells[i].innerHTML = "";


cells[i].classList.remove('winner')


message.innerText = `Player ${currentPlayer}'s Turn`;

cells.forEach(cell => cell.classList.remove('flash-blue'));

var button = document.getElementById("restart-button");
    button.style.display = "none";

const message2 = document.getElementById('message2');
message2.style.display = "block";
}
}

function checkWinner() {

const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        
        if (
    
            gameBoard[a[0]] [a[1]] &&
            gameBoard[a[0]] [a[1]] === gameBoard[b[0]] [b[1]] &&
            gameBoard[a[0]] [a[1]] === gameBoard[c[0]] [c[1]]
        ) {

            
            cells[a[0] * 3 + a[1]].classList.add('winner');
            cells[b[0] * 3 + b[1]].classList.add('winner');
            cells[c[0] * 3 + c[1]].classList.add('winner');
            return true;
        }
    }
    return false;
}

function checkDraw() {
    
    for (let i = 0; i < gameBoard.length; i++) {
        
        for (let j = 0; j < gameBoard[i].length; j++) {

            if (gameBoard[i][j] === '') {
                return false;
            }
        }
    }

    var button = document.getElementById("restart-button");
    button.style.display = "block";


    if (currentPlayer === 'X'){let currentPlayer = 'O'
    return true;}

    if (currentPlayer === 'O'){let currentPlayer = 'X' 
    return true;}
}

function makeMove(row, col) {

    const message2 = document.getElementById('message2');
    message2.style.display = "none";
    
    const message3 = document.getElementById('message3');
    message3.style.display = "none";

    const cells = document.querySelectorAll('.cell');

    var button = document.getElementById("restart-button");
    button.style.display = "block";
    
    if (gameBoard[row][col] === '' && !checkWinner() && !checkDraw()) {

        gameBoard[row][col] = currentPlayer;
        cells[row * 3 + col].innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        

        if (checkWinner()) {


            message.innerText = `Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`;
            
            var button = document.getElementById("restart-button");
            button.style.display = "block";
        } 

        else if (checkDraw()) {

            message.innerText = "It's a draw!"; 

        } else {
            message.innerText = `Player ${currentPlayer}'s Turn`;
        }
    }
}



