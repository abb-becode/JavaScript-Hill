
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const d = new Date(); // get new date
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const dn = weekday[d.getDay()];                             //Get name of the day 
    const j = d.getDate();                                      //Get the day as a number (1-31)
    const mn = d.toLocaleString('default', { month: 'long' });  //month long : November
    const y = d.getFullYear();                                  //Get the year as a four digit number (yyyy)
    const h = d.getHours();                                     //Get the hour (0-23)
    const m = d.getMinutes();                                   //Get the minute (0-59)

    const hm = h + "h" + m; //string hours + minutes

    var e = document.getElementById("target"); 
    e.innerHTML = dn + " " + j + " " + mn + " " + y + ", " + hm; 

})();
