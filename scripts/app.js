// in this file we are just defining ids to elements and adding event listener

//creating edit button element adding event listeners to button
const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

//creating the playerConfigOverlayElement whcih points to that aside popup
const playerConfigOverlayElement=document.getElementById("config-overlay");

//creating the backdrop element so that darker shade appears in background when popup opens
const backdropElement = document.getElementById('backdrop');
backdropElement.addEventListener('click',closePlayerConfig);

//to cancle the popup
const cancelConfigBtnElement=document.getElementById('cancel-config-btn');
cancelConfigBtnElement.addEventListener('click',closePlayerConfig);

//this is for saving the player name confirm button
const formElement = document.querySelector('form');
formElement.addEventListener('submit',savePlayerConfig);

//creating errors element so that the name is not blank and submit
const errorsOutputElement=document.getElementById('config-errors');

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;


const players = [
    {
    name : '',
    symbol: 'X'
    },
    {
    name: '',
    symbol: 'O'
    },
];

//creating active game area element to make the game board visible
const gameAreaElement = document.getElementById('active-game');

//creating element for start new game
const startNewGameBtnElement = document.getElementById('start-game-btn');
startNewGameBtnElement.addEventListener('click', startNewGame);

//to show in that para the name of active player
const activePlayerNameElement = document.getElementById('active-player-name');

//pointing to ol
const gameBoardElement = document.getElementById('game-board');
gameBoardElement.addEventListener('click', selectGameField);


// creating the array
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const gameOverElement = document.getElementById('game-over');
