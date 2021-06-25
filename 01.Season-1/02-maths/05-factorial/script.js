
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        //Recursive method to calculate factoriel number
        function rFact(num)
        {
            if (num === 0) { return 1; }
            else { return num * rFact( num - 1 ); }
        }

        var number = document.getElementById("number").value;
        number = parseFloat(number); //transform value to float number
        if (isNaN(number)) { //test if entered value is a number
            console.log("please enter a good number");
            return;
        }
        //call rFact function to calculate factoriel and display result
        console.log("Factoriel of " + number + " = " + rFact(number));
    });

})();
