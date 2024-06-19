function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML =
      'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';
  
    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        gameData[i][j] = 0;
        const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
        gameBoardItemElement.textContent = '';
        gameBoardItemElement.classList.remove('disabled');
        gameBoardIndex++;
      }
    }
  }
function startNewGame()
{
    if(players[0].name === '' || players[1].name === ''){ //checking if names are blank
        alert('Please set the players names for both players!');
        return
    }
gameAreaElement.style.display='block'; //making the game board visible
activePlayerNameElement.textContent = players[activePlayer].name;
}

//to switch the player name in that 
function switchPlayer() {
    if (activePlayer === 0) { //If activePlayer is 0 (player 1), it switches to player 2 (activePlayer becomes 1). If activePlayer is 1 (player 2), it switches to player 1 (activePlayer becomes 0).
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
  }

  //TO DISPLAY X AND 0  
  function selectGameField(event){
    if(event.target.tagName !== 'LI'){ //checking id we only click on list item means box
        return;
    }
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;
    if (gameData[selectedRow][selectedColumn] > 0) {  //if user clicks on already selected field
        alert('Please select an empty field!');
        return;
      }
      selectedField.textContent=players[activePlayer].symbol;
      selectedField.classList.add('disabled');
      gameData[selectedRow][selectedColumn] = activePlayer + 1;
      const winnerId = checkForGameOver();
      if (winnerId !== 0) {
        endGame(winnerId);
      }
      currentRound++;
    switchPlayer();
  }
  function checkForGameOver() {
    // Checking the rows for equality
    for (let i = 0; i < 3; i++) {
      if (
        gameData[i][0] > 0 &&
        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] === gameData[i][2]
      ) {
        return gameData[i][0];
      }
    }
  
    // Checking the columns for equality
    for (let i = 0; i < 3; i++) {
      if (
        gameData[0][i] > 0 &&
        gameData[0][i] === gameData[1][i] &&
        gameData[0][i] === gameData[2][i]
      ) {
        return gameData[0][i];
      }
    }
  
    // Diagonal: Top left to bottom right
    if (
      gameData[0][0] > 0 &&
      gameData[0][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
    ) {
      return gameData[0][0];
    }
  
    // Diagonal: Bottom left to top right
    if (
      gameData[2][0] > 0 &&
      gameData[2][0] === gameData[1][1] &&
      gameData[1][1] === gameData[0][2]
    ) {
      return gameData[2][0];
    }
  
    if (currentRound === 9) { // If all 9 moves (currentRound === 9) are made and no winner is identified, returns -1 indicating a draw.
      return -1;
    }
  
    return 0;
  }
  
  function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';
  
    if (winnerId > 0) {
      const winnerName = players[winnerId - 1].name;
      gameOverElement.firstElementChild.firstElementChild.textContent =
        winnerName;
    } else {
      gameOverElement.firstElementChild.textContent = "It's a draw!";
    }
  }

  