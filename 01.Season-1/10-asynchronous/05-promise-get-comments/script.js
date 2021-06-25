// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        //using promise send it by window.lib.getPosts()
        window.lib.getPosts().then (
            result => result.forEach(
                element => {  
                    //console.log(element)
                    //using promise send it by window.lib.getComments
                    window.lib.getComments(element.id).then (
                        comments => {   element.comments = comments;
                                        console.log(element);
                                        console.log("first comment of this article :",element.comments[0]);
                                    }, 
                        error => console.log("getPosts => something was wrong",error)
                    );
                }
            ),  
            error => console.log("getPosts => something was wrong",error)
        );

    });

})();
