// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        // method using async await
        let getPosts = async () =>  {
            try {
                let posts = await window.lib.getPosts();      
                posts.forEach(element => {
                    window.lib.getComments(element.id, (error, comments) => {
                        try {
                            element.comments = comments;
                            console.log(element);
                            //console.log(element.comments[0]);
                        } catch {
                            console.log("getComments => something was wrong", error);
                        }
                    }); 
                    //console.log(element);
                });
            } 
            catch (error) {
                console.log("getPosts => something was wrong " + error);
            }          
        } 

        getPosts();    

    });

})();
