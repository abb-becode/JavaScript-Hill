// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        var str = document.getElementById("numbers").value;
        var arr = str.split(",");
        //transform all item of array to an integer number
        for(let i = 0; i<arr.length;i++) {
            arr[i] = parseInt(arr[i]);
        }
        //display array before sort
        console.log("not sorted array:");
        console.log(arr);
        console.log("Ascending sort :")
        console.log( arr.sort((a, b) => a - b) ); // For ascending sort
        console.log("Descending sort :")
        console.log( arr.sort((a, b) => b - a)) ; // For descending sort
    });

})();