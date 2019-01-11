// display hanger inside canvas when page loads
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.onload = function displayHanger() {
    ctx.moveTo(10,320);
    ctx.lineTo(120,320);
    ctx.stroke();

    ctx.moveTo(65,60);
    ctx.lineTo(65,320);
    ctx.stroke();

    ctx.moveTo(65,60);
    ctx.lineTo(220,60);
    ctx.stroke();
}
hideWordInputElements(); //hide ability to input a word once word is entered and value is stored
hideLetterInputElements(); //hide ability to input a letter until a word has been entered
hideOutcomeSection();

 var currentWord = []; //currentWord will be set to the most recent word typed in the word text box
 var currentLetter = ""; //currentLetter will be set to the most recent letter typed in the letter text box
 var totalLettersFound = 0; //totaLettersFound will be set to total letters guessed correctly for the currentWord
 var currentHangmanPartDisplayed = 0; //currentHangmanPartDisplayed will increment by 1 as body part is revealed for each wrong word
 var arrayOfBodyParts = [ //arrayOfBodyParts is set to a list of each hangman part to be displayed when wrong letter is entered
    function displayRope() { //7 parts of the array will equal the total amount of tries a user has to enter an incorrect letter before game is lost
        ctx.stroke();
        ctx.moveTo(220,60);
        ctx.lineTo(220,110);
        ctx.stroke();
    },
    function displayHead() {
        ctx.beginPath();
        ctx.arc(220, 140, 30, 0, 2 * Math.PI);
        ctx.stroke();
    },
    function displayBody() {
        ctx.moveTo(220,170);
        ctx.lineTo(220,250);
        ctx.stroke();
    },  
    function displayLeftLeg() {
        ctx.moveTo(220,250);
        ctx.lineTo(180,300);
        ctx.stroke();
    },            
    function displayRightLeg()  {
        ctx.moveTo(220,250);
        ctx.lineTo(260,300);
        ctx.stroke();
    },
     function displayleftArm() {
        ctx.moveTo(220,210);
        ctx.lineTo(180,195);
        ctx.stroke();
     },                
    function displayRightArm() {
        ctx.moveTo(220,210);
        ctx.lineTo(260,195);
        ctx.stroke();
    }
]

//store and process each letter input and word input when button is clicked
const wordInput = document.getElementById("inputWordTxt");
const letterInput = document.getElementById("inputLetterTxt")
const displayBox = document.getElementById("display");


//play Hangman
function playGame(evt) { // onclick() called in html tag
    evt.preventDefault(); //prevents page from refreshing when play button is clicked
    hidePlayGameSection(); //hide play game section when user clicks button to reveal first section of game
    showWordInputElements(); //hide ability to input a word once word is entered and value is stored
}

//series of steps that happen when word is entered
function storeWord(evt) { // onclick() called in html tag
    evt.preventDefault(); //prevents page from refreshing when ok button is clicked
    currentWord.push(wordInput.value); //push and store value of current word entered by user into currentWord array
    //clear text field
    wordInput.value = "";
    hideWordInputElements(); //hide ability to input a word once word is entered and value is stored
    showLetterInputElements(); //reveal ability to input a letter once word is entered and value is stored

    displayEmptyWordTemplate(); //reveal underlined blank space for each letter of word stored in currentWord array
}

function startOver(evt) { //onclick() called in html tag
    evt.preventDefault(); //prevents page from refreshing when button is clicked
    showWordInputElements();
    hideOutcomeSection();
}

const letters = document.getElementById('letters');

function displayEmptyWordTemplate() {
    for (i = 0; i < currentWord[0].length; i++) {
        let letter = document.createElement('li');
        letter.innerHTML = '_';
        letters.appendChild(letter);
    }   
}   

//series of steps that happen when letter is entered
function storeLetter(evt) { //onclick() called in html tag
    evt.preventDefault(); //prevents page from refreshing when ok button is clicked
    currentLetter = letterInput.value; //store string value of current letter entered by user into currentLetter array
    //clear text field
    letterInput.value = "";
    storeLetterInLetterBox(); //display each letter entered by player as a reference list for players to know which letters were entered
    processLetter(currentLetter); //process currentLetter entered by player

    //reset the screen after the user guesses the full word correctly or when all hangman parts have been displayed and they miss the word
    if (totalLettersFound > 0 && totalLettersFound === currentWord[0].length) {
        displayOutCome('You guessed correctly! The word is: ' + currentWord);
    
        //reset the main variables and start over with a new word
        currentWord = [];
        currentLetter = '';
        totalLettersFound = 0;
        currentHangmanPartDisplayed = 0; //remove any hangman body parts from the display
    
        //reset the display for user input
        hideLetterInputElements(); //hide Player 2 section on the bottom that allows entry of the letter (text input box, button amd letter display box)
        showWordInputElements(); //display the text input box for entering a word, just as if the web page was first loaded
    }
}

function storeLetterInLetterBox() {
    // show letter output
    let display = document.createElement('div');
    displayBox.innerHTML += currentLetter + " ";
    displayBox.appendChild(display)
}


function processLetter(currentLetter) {
    // If the letter is in the word, display it in the appropriate position in the word template
    // Loop through word finding all instances of guessed letter, store the indicies in an array
    for (i = 0; i < currentWord[0].length; i++) {
        let word = currentWord[0].charAt(i);
        let temp = currentWord.toString().split("");
        let letterMatch = function(element) {
            return element === currentLetter
            }
        if(currentLetter === word) {
            letters.children[i].innerHTML = currentLetter;
            totalLettersFound++;
        } 
        if (temp.some(letterMatch) !== true) {
            arrayOfBodyParts[currentHangmanPartDisplayed++](); 
            break;
        }  
    }   
}              

//hide and reveal sections of the game
function showPlayGameSection() {
    document.getElementById('playGameSection').style.display = 'block';
}
function hidePlayGameSection() {
    document.getElementById('playGameSection').style.display = 'none';
}
function hideLetterInputElements() {
    document.getElementById('inputLetterSection').style.display = 'none';
}
function hideWordInputElements() {
    document.getElementById('inputWordSection').style.display = 'none';
}
function showLetterInputElements() {
    document.getElementById('inputLetterSection').style.display = 'block';
}
function showWordInputElements() {
    document.getElementById('inputWordSection').style.display = 'block';
}
function displayOutCome(outcomeMessage) {
    showOutcomeSection();
    document.getElementById('outcomeMsg').innerHTML(outcomeMessage);
}
function hideOutcomeSection() {
    document.getElementById('outcomeDisplaySection').style.display = 'none';
}
function showOutcomeSection() {
    document.getElementById('outcomeDisplaySection').style.display = 'block';
}
//major issues
//issues- getting words with two of the same letter to display
//getting hangman part to display
//figuring out how to dynamically create an element
//getting letters to store in word