// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here

        document.getElementById("run").addEventListener("click", async () => {

        // using fetch with REST API
        let name = document.getElementById("hero-name").value;
        let alterEgo = document.getElementById("hero-alter-ego").value;
        let powers = document.getElementById("hero-powers").value;
        let powersArray = powers.split(",");
        let heroPowers = [];
        let i = -1;
        powersArray.forEach(power => {
            let abilityData = {};
            abilityData.id = ++i;
            abilityData.content = power;
            heroPowers.push(abilityData);
        });

        let data = {};

        getHeros = async () => {
            const response = await fetch('http://localhost:3000/heroes');
            const heros = await response.json();
            return heros;
        }

        post = async (data) => {
            try {
                // Create request to api service
                const req = await fetch('http://localhost:3000/heroes', {
                    method: 'POST',
                    headers: { 'Content-Type':'application/json' },
                    body: JSON.stringify({
                        id: data.id,
                        name: data.name,
                        alterEgo: data.alterEgo,
                        abilities: data.abilities
                    }),
                });
                
                const res = await req.json();
        
                // Log success message
                console.log(res); 

            } catch(err) {
                console.error(`ERROR: ${err}`);
            }
        }
        

        // Get last id for heros and create data record
        const heros = await getHeros(); 
        let lastId = heros.length;

        //create data object
        data.id = ++lastId;
        data.name = name;
        data.alterEgo = alterEgo;
        data.abilities = heroPowers;

        // Call post function
        post(data); 

    });

})();
