//07-classes/02-methods/script.js - 7.2: methods


(() => {


    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        sayHello() {
            var helloMessage = "Hello, " + this.firstname + " " + this.lastname +".";
            return helloMessage;
        }
    }
    
    // your code here
    // instanciate obj of class person
    const p = new Person("Jhon","Dupont");

    document.getElementById("run").addEventListener("click", () => {
        console.log(p.sayHello());
    });


})();
