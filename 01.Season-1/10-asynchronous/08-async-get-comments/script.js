// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async () => {

        // method using async await  
        getPosts = async () =>  {
            try {
                // Awaiting window.lib.getPosts()
                const response = await window.lib.getPosts();
                return response;
                //console.log(response);
            } catch (error) {
                console.log("getPosts => something went wrong " + error);
            }
        }

        setComments = async (data) =>  {
            for ( let element of data) {
                try {
                    const comments = await window.lib.getComments(element.id);
                    element.comments = comments;
                    console.log(element);
                    //console.log(element.comments[0]);
                } catch (error) {
                    console.log("setComments => something went wrong", error);
                }
            }
        }

        const posts = await getPosts();
        setComments(posts);

    });

})();
