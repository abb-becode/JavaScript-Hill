// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here
    var setWithoutAppleAndCherry = new Set([]);
    //remove the "apple" and the "cherry" 
    fruits.forEach(item => {
        //console.log(item);
        (item == "apple" || item == "cherry") ? false : setWithoutAppleAndCherry.add(item);
    });

    setWithoutAppleAndCherry.add("banana"); //add banana to set
    setWithoutAppleAndCherry.add("kiwi");   //add kiwi to set

    setWithoutAppleAndCherry.forEach(item => {
        console.log(item);
    });

    document.getElementById("run").addEventListener("click", () => {
        setWithoutAppleAndCherry.forEach(item => {
            console.log(item);
        });
    });

})();
