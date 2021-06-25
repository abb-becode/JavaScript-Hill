// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here

    const inst1 = new Cat("Skitty",9);
    const inst2 = new Cat("Pixel", 6);

    document.getElementById("run").addEventListener("click", () => {
        console.log("inst1 : " + JSON.stringify(inst1));
        console.log("inst2 : " + JSON.stringify(inst2));
    });

})();
