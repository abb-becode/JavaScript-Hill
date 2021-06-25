// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    var guessNumber;
    var gameOver = false;
    var counter = 0;

    function startGame(n) {
        while (!gameOver) {
            var response = prompt("Please enter the number and click ok:");
            var number = parseInt(response);
            if (isNaN(number)) {
                alert("Please input numbers");
            }
            else if (number > n) {
                alert("higher");
                counter++;
            }
            else if (number < n) {
                alert("lower");
                counter++;
            }
            else {
                alert("That's it " + "you needed " + counter +  " guesses. \nThank you for playing with me :-)");
                gameOver = true;
            }
        }
        

    };
    window.onload = () => {
        guessNumber = Math.floor(Math.random() * 101);
        startGame(guessNumber);
    };
    

})();
