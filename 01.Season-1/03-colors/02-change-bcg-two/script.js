
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let color = document.getElementById("color").value;
        color = "#" + color;
        document.body.style.background = color;
    });


})();
