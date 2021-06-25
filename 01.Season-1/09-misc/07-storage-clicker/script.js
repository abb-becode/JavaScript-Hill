// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    var counter = 0;
    var target = document.getElementById("target");
    var increment = document.getElementById("increment");

    function display(counter) {
        target.innerHTML = counter;
    }

    increment.addEventListener("click", () => {
        counter++;
        display(counter);
        localStorage.setItem("memory", counter)
    });

    window.onload = () => {
        counter = localStorage.getItem("memory"); 
        display(counter);
    };

})();
