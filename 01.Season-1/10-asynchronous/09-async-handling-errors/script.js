// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        // method using async await
        let getPeople = async () =>  {
            try {
                let people = await window.lib.getPersons();      
                people.forEach(p => {
                    console.log(p);
                });
            } 
            catch (error) {
                console.log("getPeople => something was wrong " + error);
            }          
        } 

        getPeople();    

    });

})();
