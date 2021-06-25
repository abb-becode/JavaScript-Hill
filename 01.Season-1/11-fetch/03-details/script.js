// 11-fetch/03-details/script.js - 11.3: details


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        // using fetch with REST API
        let target = document.getElementById("target");
        let id = document.getElementById("hero-id").value;
        let url = 'http://localhost:3000/heroes';

        getDetails = async () => {
            try {
                let response = await fetch(url + '/' + id)
                if (!response.ok) {
                    const message = `An error has occured: ${response.status}`;
                    throw new Error(message);
                }
                let hero = await response.json(); 
                // process
                let name = hero.name;
                let alterEgo = hero.alterEgo;
                target.innerHTML = `
                    <li class="hero">
                        <h4 class="title">
                            <strong class="name">${name}</strong>
                            <em class="alter-ego">${alterEgo}</em>
                        </h4>
                        <p class="powers"></p>
                    </li>
                `;
            } catch (err) {
                console.log(err)
            }
        }

        getDetails();
    });

})();
