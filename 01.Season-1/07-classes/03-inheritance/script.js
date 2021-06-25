// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        constructor (name) {
            this.name = name;
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    // your code here

    //create Cat class
    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
        static greeting = "Hello, ";

        showHelloMessage() {
            return this.sayHello();
        }        
    }

    //create Dog class
    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
        static greeting = "Hello, ";

        showHelloMessage() {
            return this.sayHello();
        }
    }

    const cat = new Cat("pacha");
    const dog = new Dog("max");

    document.getElementById("run").addEventListener("click", () => {
        console.log(cat.showHelloMessage());
        console.log(dog.showHelloMessage());
    });

})();
