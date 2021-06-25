// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        // using fetch with REST API
        fetch('http://localhost:3000/heroes')
            .then( (result)=> result.json() )
            .then( (result) => console.log( result));   
    });


})();
