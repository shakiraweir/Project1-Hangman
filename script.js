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
 var arrayOfBodyParts = [ //arrayOfBodyParts will be set to a list of each hangman part to be displayed when wrong letter is entered
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

