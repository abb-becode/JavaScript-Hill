// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        //using promise send it by window.lib.getPersons()
        window.lib.getPersons().then (
            result => result.forEach( element => console.log(element) ),  
            error  => console.log("getPersons() => something was wrong",error) //or console.error(error)
        );

    });

})();
