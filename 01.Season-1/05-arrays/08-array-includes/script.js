// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    var element = "apple";
    var response = "No";
    var found = fruits.includes(element);
    
    if (found) { response = "yes" }

    document.getElementById("run").addEventListener("click", () => {
        console.log(response);
    });


})();
