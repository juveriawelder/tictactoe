//This file will contain all the functions

//after clicking on edit player name button this function will open the popup to add name
function openPlayerConfig(event){
editedPlayer = +event.target.dataset.playerid; //0+1->1 '+' is added to convert to number    
playerConfigOverlayElement.style.display='block';
backdropElement.style.display='block';
}
//to close the popup after clicking cancel button
function closePlayerConfig(){
playerConfigOverlayElement.style.display='none';
backdropElement.style.display='none';
formElement.firstElementChild.classList.remove('error');
errorsOutputElement.textContent='';
formElement.firstElementChild.lastElementChild.value=''; // Clears the input field where the player enters their name.
}
//save player name function
function savePlayerConfig(event){
    event.preventDefault(); //prevent brower from sending the request to server when clicked on confirm, Prevents the default form submission behavior, ensuring the page doesn't reload.
    const formData= new FormData(event.target); //creating or instantiating object with new keyboard
    const enteredPlayerName=formData.get('playername').trim(); // triming white spaces from front and back of name, get method of FormData object to get the value of input
   if(!enteredPlayerName) //if the name is blank or not entered
    {
        event.target.firstElementChild.classList.add('error'); //then we making label and textfield border red
        errorsOutputElement.textContent='Please enter a  valid name!'; //pointing that p element to give the warning
        return; //when u execute return you stop the execution of function in which you call it
    }
    const updatedPlayerDataElement = document.getElementById('player-' +editedPlayer+ '-data'); //wo article me jo player-1-data diye h woh id ko point krre hai isse 
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName; //h3 ko change krrey h with entered player name
    players[editedPlayer -1].name= enteredPlayerName;
    closePlayerConfig();
}