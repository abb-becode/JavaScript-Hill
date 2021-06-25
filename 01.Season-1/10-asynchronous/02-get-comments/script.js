// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, articles) => {
            try{
                articles.forEach(element => {
                    window.lib.getComments(element.id, (error, comments) => {
                        try {
                            element.comments = comments;
                            console.log(element);
                            //console.log(element.comments[0]);
                        } catch {
                            console.log("getComments => something was wrong", error);
                        }
                    });   
                });
             } catch {
                console.log("getPosts => something was wrong", error);
            }
        });
    });

})();
