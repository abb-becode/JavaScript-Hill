// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here

    class Person {
        constructor (firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get propName() {
            return this.firstname + " " + this.lastname;
        }

        set propName(fullname) {
            var arr = fullname.split(' ');
            this.firstname = arr[0];
            this.lastname = arr[1];
        }
    }

    var fullName = "Frederci Marwex";

    const p1 = new Person("Jhon","Dupont");
    var getName1 = p1.propName;

    const p2 = new Person();
    p2.propName = fullName;
    var getName2 = p2.propName;

    document.getElementById("run").addEventListener("click", () => {
        console.log(getName1);
        console.log(getName2);
    });

})();
