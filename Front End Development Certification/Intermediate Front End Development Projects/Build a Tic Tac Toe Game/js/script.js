var player = 'X';
var computer = 'O';
var moves = 0;
var isComputerTurn = false;
var computerChoice;
var boardSpaces = [
  '#topLeft',
  '#topMiddle',
  '#topRight',
  '#centerLeft',
  '#centerMiddle',
  '#centerRight',
  '#bottomLeft',
  '#bottomMiddle',
  '#bottomRight'
];

function playerChoice(choice) {
    player = choice;
    if (player === 'X') {
        computer = 'O'
    } else {
        computer = 'X'
    }
    newGame();
}

function drawPlayerMove(position) {
    if ($(position).is(":empty")) {
        $(position).html(player);
        isComputerTurn = true;
        moves++;
        console.log(moves);
        winCheck();
    }
}

function computerTurn() {
    while (isComputerTurn) {
        computerChoice = Math.floor((Math.random() * 8));
        if ($(boardSpaces[computerChoice]).is(":empty")) {
            $(boardSpaces[computerChoice]).html(computer)
            moves++;
            isComputerTurn = false;
            winCheck();
        } else {
            computerTurn();
        }
    }
}

function winCheck() {
    // Three Across Player Wins
    if ($(topLeft).html() === player && $(topMiddle).html() === player && $(topRight).html() === player) {
        window.alert("Player wins!");
        newGame();
    }
    if ($(centerLeft).html() === player && $(centerMiddle).html() === player && $(centerRight).html() === player) {
        window.alert("Player wins!");
        newGame();
    }
    if ($(bottomLeft).html() === player && $(bottomMiddle).html() === player && $(bottomRight).html() === player) {
        window.alert("Player wins!");
        newGame();
    }
    // Three Down Player Wins
    if ($(topLeft).html() === player && $(centerLeft).html() === player && $(bottomLeft).html() === player) {
        window.alert("Player wins!");
        newGame();
    }
    if ($(topMiddle).html() === player && $(centerMiddle).html() === player && $(bottomMiddle).html() === player) {
        window.alert("Player wins!");
        newGame();
    }
    if ($(topRight).html() === player && $(centerRight).html() === player && $(bottomRight).html() === player) {
        window.alert("Player wins!");
        newGame();
    }
    // Diagonal Player Wins
    if ($(topLeft).html() === player && $(centerMiddle).html() === player && $(bottomRight).html() === player) {
        window.alert("Player wins!");
        newGame();
    }
    if ($(topRight).html() === player && $(centerMiddle).html() === player && $(bottomLeft).html() === player) {
        window.alert("Player wins!");
        newGame();
    }

    // Three Across Computer Wins
    if ($(topLeft).html() === computer && $(topMiddle).html() === computer && $(topRight).html() === computer) {
        window.alert("computer wins!");
        newGame();
    }
    if ($(centerLeft).html() === computer && $(centerMiddle).html() === computer && $(centerRight).html() === computer) {
        window.alert("computer wins!");
        newGame();
    }
    if ($(bottomLeft).html() === computer && $(bottomMiddle).html() === computer && $(bottomRight).html() === computer) {
        window.alert("computer wins!");
        newGame();
    }
    // Three Down Computer Wins
    if ($(topLeft).html() === computer && $(centerLeft).html() === computer && $(bottomLeft).html() === computer) {
        window.alert("computer wins!");
        newGame();
    }
    if ($(topMiddle).html() === computer && $(centerMiddle).html() === computer && $(bottomMiddle).html() === computer) {
        window.alert("computer wins!");
        newGame();
    }
    if ($(topRight).html() === computer && $(centerRight).html() === computer && $(bottomRight).html() === computer) {
        window.alert("computer wins!");
        newGame();
    }
    // Diagonal Computer Wins
    if ($(topLeft).html() === computer && $(centerMiddle).html() === computer && $(bottomRight).html() === computer) {
        window.alert("computer wins!");
        newGame();
    }
    if ($(topRight).html() === computer && $(centerMiddle).html() === computer && $(bottomLeft).html() === computer) {
        window.alert("computer wins!");
        newGame();
    }
    if (moves === 9) {
        window.alert('The game is a tie');
        newGame();
    }
    if (isComputerTurn) {
        computerTurn();
    }
}

function newGame() {
    isComputerTurn = false;
    $('td').empty();
    moves = 0;
}