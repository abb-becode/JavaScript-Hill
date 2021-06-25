
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var today = new Date();
    var time = today.getHours(); 
    var e = document.getElementById("target");

    if (time < 18) { e.innerHTML = "Hello"; }
    else           { e.innerHTML = "Good evening"; }

})();
