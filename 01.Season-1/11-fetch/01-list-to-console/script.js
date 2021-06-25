// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async () => {

        // using fetch with REST API
        try {
            const result = await fetch('http://localhost:3000/heroes');
            const heroes = await result.json();
            console.log(heroes);
        } catch (error) {
            console.log(error);
        }
           
    });


})();
