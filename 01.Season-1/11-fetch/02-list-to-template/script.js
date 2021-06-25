

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        // using fetch with REST API
        let target = document.getElementById("target");
        fetch('http://localhost:3000/heroes')
            .then( (result) => result.json() )
            .then( (result) => {
                //console.log(result);
                result.forEach(element => {
                    //console.log(element);
                    //display info about herro using template tag
                    let li = document.createElement('li');
                    li.className = "hero";
                    li.innerHTML = `
                                <h4 class="title">
                                    <strong class="name">${element.name}</strong>
                                    <em class="alter-ego">${element.alterEgo}</em>
                                </h4>
                                <p class="powers">${element.abilities[0]}</p>
                    `;
                    target.appendChild(li);
                }); 
            } );  
        
    });

})();