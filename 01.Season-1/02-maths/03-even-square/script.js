
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let i=1;
        for (; i<=21;i++) {
            let result = parseInt(i) * parseInt(i);
            console.log("square " + i + " = " + result );
        }
    });

})();
