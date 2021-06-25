
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    const sc = (5*60) + 30;
    var today = new Date();
    var hrs = today.getHours(); 
    var mnts = today.getMinutes();

    if (hrs > 12) { hrs = hrs -12}
    var ss = (hrs*60) + mnts;

    var e = document.getElementById("target");
    if (hrs < sc) { e.innerHTML = "Hello"; }
    else           { e.innerHTML = "Good evening"; }

})();
