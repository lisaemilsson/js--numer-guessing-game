const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3"); 

const answer = Math.floor(Math.random()*100) + 1;
let no_of_guesses = 0;
const guessed_nums = [];

document.getElementById("my_button").addEventListener("click", play );

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please Enter a number Between 1 to 100");
    } else {
        guessed_nums.push(user_guess);
        
        no_of_guesses ++;

        if (user_guess < answer) {
            message1.textContent = "Your Guess is Too low"
            message2.textContent = "No. Of Guesses : " + no_of_guesses;
            message3.textContent = "Guessed Number Are: " + guessed_nums;
        } 
        else if (user_guess > answer) {
            message1.textContent = "Your Guess is Too High"
            message2.textContent = "No. Of Guesses : " + no_of_guesses;
            message3.textContent = "Guessed Number Are: " + guessed_nums;
        } 
        else if (user_guess == answer) {
            message1.textContent = "Woohooo You won!!"
            message2.textContent = "The number was " + answer + " you guessed it in " + no_of_guesses + " guesses";
        }
    }
}