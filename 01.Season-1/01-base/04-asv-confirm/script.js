
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE
    var confirmData = false;

    while (!confirmData) {
        var age = prompt("What is your Age? ");
        var gender = prompt("What is your Gender? ");
        var town = prompt("Where do you lives? ");

        var question = "Please confirm your informations : \n" + "Age: " + age + "\n Gender: " + gender + "\n Town: " + town;
        var result = confirm(question);
        if (result) {
            confirmData = true;
        }
    }

})();
