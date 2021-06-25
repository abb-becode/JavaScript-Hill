// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        // using fetch with REST API
        let id = document.getElementById("hero-id").value;
        let url = 'http://localhost:3000/heroes';
        url += '/' + id;

        deleteHero = async () => {
            try {
                // Create request to api service
                const req = await fetch(url, {
                    method: 'DELETE'
                });
                
                const res = await req.json();
        
                // Log success message
                console.log(res);                
            } catch(err) {
                console.error(`ERROR: ${err}`);
            }
        }

        // Call delete function
        deleteHero();   

    });

})();
