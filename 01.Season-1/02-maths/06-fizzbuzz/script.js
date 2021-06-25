
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
    const fizz = num => { return num % 3 == 0 ? true : false  }
    const buzz = num => { return num % 5 == 0 ? true : false  }
    const fizzbuzz = num => { return ((num % 3 == 0) && (num % 5 == 0)) || ((num % 3 !== 0) && (num % 5 !== 0)) ? true : false  }

    for (let i=1; i<=100; i++) {
        if (fizz(i)) { console.log(i + " : fizz") }
        if (buzz(i)) { console.log(i + " : buzz") }
        if (fizzbuzz(i)) { console.log(i + " : fizzbuzz") }
    }
})();
