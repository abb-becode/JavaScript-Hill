// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    fruits = fruits.slice(1,fruits.length-1);
    fruits.unshift("Banana");
    fruits.push("Kiwi");

    document.getElementById("run").addEventListener("click", () => {
        console.log(fruits);
    })

})();
