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

hideLetterInputElements(); //Hide ability to input a letter until a word has been entered

 var currentWord = []; //currentWord will be set to the most recent word typed in the word text box
 var currentLetter = ""; //currentLetter will be set to the most recent letter typed in the letter text box
 var totalLettersFound = 0; //totaLettersFound will be set to total letters guessed correctly for the currentWord

 //Hide and reveal sections of the game
function hideLetterInputElements() {
    document.getElementById('inputLetterSection').style.display = 'none';
}
function hideWordInputElements() {
    document.getElementById('inputWordSection').style.display = 'none';
}

function showLetterInputElements() {
    document.getElementById('inputLetterSection').style.display = 'block';
}