# Project1-Hangman
```
html

html
```

# Description
Hangman is a guessing game designed for two players. When player 1 enters a word in the word text box and clicks enter, the number of blank spaces corresponding to the number of letters in the word appears on the screen. The second player then tries to guess the word by entering a letter in the letter text box and hitting enter. If the second player guesses a letter within the word correctly, it is revealed in the blank space that matches the letter. 

If the letter guessed is incorrect, then the hangman display reveals a body part. There are seven total parts to be displayed on the hanger, which corresponds to an incorrect guess. If the second player guesses all the letters correctly, an alert button appears that signifies the player has won the game by guessing the correct word. The game then resets and allows player one to enter a new word. If the second player is not able to guess the correct word before all seven parts of the hangman display are revealed, then the hanger the hanger resets (the figure disappears), the games resets and allows for player one to enter another word.


# Issues

- displayEmptyWordTemplate() - The first hurdle in writing logic for this game is to get blank spaces to appear on the screen dynamically when a user enters a word. Using an eventListener, one can store the entered word as an array and set it to a variable. Use a for loop to loop through each character in the word, or each element in the array, then dynamically create an element and write an underscore for each character in the array. 

``` js
function displayEmptyWordTemplate() {
    for (i = 0; i < currentWord[0].length; i++) {
        let letter = document.createElement('li');
        letter.innerHTML = "_";
        letters.appendChild(letter);
    }   
}  
``` 

- processLetter(currentLetter) - The second hurdle will be to write code that processes the current letter entered in the letter text field. If the letter is in the the word, display it in the appropriate position in the word template. To do this, convert the current word, which is an array to a string then compare the current letter string to each string in the stored word. If there is a match, write the letter to the space. If it is not a match, then display a part of the hangman. 

```js
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
```

- The third major hurdle is how to display the currentHangmanPart to the screen when a letter string does not match any of the character strings of the word array. Canvas API was used to draw the hangman pieces displayed in the game, but any number of methods can be used, including uploading images. Regardless of the method used to illustrate hangman parts, all parts should be set equal to a variable in the the form of an array. Using canvas API, each hangman part was writting in JS, so set each JS code equal to a function then store all the functions in an array. Access the array of functions and increase its counter by 1 everytime the letter string does not match any of the strings in the current word array. 

```js
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
```

# Features/Brief Example

- Display hangman using canvas API: Used MDN documentation to draw stick figures onto a canvas. Set them equal to functions, then stored them in an array to be accessed when a letter did not match any string value in a word
- Timer function - Display a countdown timer that gives user the option to attempt and guess the word in a specified period of time, and before hangman displays all of its parts. 
(Feature not currently included)

- Scoring - Everytime player 2 wins the game, store the score and switch players. Tally the scores for each player on the screen.
(Feature not currently included)

# List of Technologies Used
Vanilla JavaScript - All code was written in JS. Utilized JS to draw code for hangman figure. 
CSS - CSS was used to style. 
HTML - markup language used to write and structure content
