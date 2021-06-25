// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    //sort the array, and remove each element equal to the preceding one
    var uniq =  fruits.sort().filter( (item, pos, self) => {
        console.log(pos);
                    return !pos || item != self[pos - 1];
                });

    document.getElementById("run").addEventListener("click", () => {
        console.log("Array without duplicates values : " + uniq);
    });
    

})();
