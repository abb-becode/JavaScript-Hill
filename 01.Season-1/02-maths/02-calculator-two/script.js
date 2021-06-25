
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    var op1 = document.getElementById("op-one");
    var op2 = document.getElementById("op-two");
    var result;

    const performOperation = operation => {
        // perform the operation
        switch(operation) {
            case "addition":
                result = parseFloat(op1.value) + parseFloat(op2.value);
                alert("op-one + op-two = " + result);
                break;
            case "substraction":
                result = parseFloat(op1.value) - parseFloat(op2.value);
                alert("op-one - op-two = " + result);
                break;
            case "multiplication":
                result = parseFloat(op1.value) * parseFloat(op2.value);
                alert("op-one * op-two = " + result);
                break;  
            case "division":
                result = parseFloat(op1.value) / parseFloat(op2.value);
                alert("op-one / op-two = " + result.toFixed(2));
                break;
            default:
              // Do Nothing
          }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
