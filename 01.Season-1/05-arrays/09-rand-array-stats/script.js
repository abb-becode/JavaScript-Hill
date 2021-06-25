// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here

    let cells = document.getElementsByTagName("td");
    let numbers = [];

    let min = document.getElementById("min");
    let max = document.getElementById("max");
    let sum = document.getElementById("sum");
    let average = document.getElementById("average");
    

    function fillCells() {
        for (let i = 0; i <= 9; i++) {
            numbers[i] = Math.floor(Math.random() * 100);
        }
        for (let i = 0; i< cells.length; i++) {
            cell = cells[i];
            cell.innerText = numbers[i];
        }
    }

    function displayMinMaxSumAverage() {
        min.innerText = Math.min(...numbers);
        max.innerText = Math.max(...numbers);
        sum.innerText = eval(numbers.join('+'));
        average.innerText = eval(numbers.join('+')) / numbers.length;
    }

    document.getElementById("run").addEventListener("click", () => {

        fillCells(); // fill cells with random numbers
        displayMinMaxSumAverage(); //display min max sum and average of numbers array
        
    });
    

})();

