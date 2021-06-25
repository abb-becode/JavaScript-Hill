// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    var numberOfPoeple = people.size;
    var found = people.has("Alexandre");
    document.getElementById("run").addEventListener("click", () => {
        console.log("number of people in the set : " + numberOfPoeple);
        console.log("is Alexandre there ? : " + found);
    });

})();
