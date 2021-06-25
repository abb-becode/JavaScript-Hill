// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        // Creating promesse and use window.lib.getPosts() inside
        /*let promise = new Promise( (resolve, reject) => {
            //setTimeout(() => resolve(window.lib.getPosts()), 1000); //// launch resolve function after 1 second
            let people = window.lib.getPosts();
            if (people) { resolve(people) }
            else { reject("getPosts => something was wrong :-(") }
        }); 

        promise.then(
            result => result.forEach(element => { console.log(element) }),  
            error => console.log(error) // doesn't run
        );*/


        //using promise send it by window.lib.getPosts()
        window.lib.getPosts().then (
            result => result.forEach(element => { console.log(element) }),  
            error => console.log(error)
        );


    });

})();
