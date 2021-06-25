// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        // method using async await
        let getArticles = async () =>  {
            try {
                let posts = await window.lib.getPosts();
                if (!posts) {
                    throw new Error(`getPosts => something was wrong : ${response.status}`);
                } 
                posts.forEach( element => console.log(element) );
            } 
            catch (error) {
                console.log("getPosts => something was wrong " + error);
            }          
        } 

        getArticles();
        /*
        getArticles()
            .then( (posts) => {
                posts.forEach( element => console.log(element) );
            })
            .catch(e => console.log("getPosts => something was wrong " + e));
        */        

    });


})();
