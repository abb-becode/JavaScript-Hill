// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here

    //generate object with these properties lastname,firstname,age,city and country
    const person = {};
    
    person.lastname = "Jhon";
    person.firstname = "Dupont";
    person.age = 50;
    person.city = "Cherleroi";
    person.country = "Belgium";
    

   document.getElementById("run").addEventListener("click", () => {
       console.log(JSON.stringify(person));
   });

})();
