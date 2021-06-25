
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    var op1 = document.getElementById("op-one");
    var op2 = document.getElementById("op-two");

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition 
        var addition = parseFloat(op1.value) + parseFloat(op2.value);
        alert("op-one + op-two = " + addition);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var substraction = parseFloat(op1.value) - parseFloat(op2.value);
        alert("op-one - op-two = " + substraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var multiplication = parseFloat(op1.value) * parseFloat(op2.value);
        alert("op-one * op-two = " + multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var division = (parseFloat(op1.value) / parseFloat(op2.value)).toFixed(2);
        alert("op-one / op-two = " + division);
    });
})();
