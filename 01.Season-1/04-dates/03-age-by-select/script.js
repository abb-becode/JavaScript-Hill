
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here

    // your code here
    var j = document.getElementById("dob-day");
    var m = document.getElementById("dob-month");
    var y = document.getElementById("dob-year");

    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
      
    document.getElementById("run").addEventListener("click", () => {
        //call function to calculate age of visitor
        var bod = y.value + "-" + m.value + "-" + j.value
        alert("Hello dear visitor.\n" + "Your date of birth : " + bod + "\nYou have : " + getAge(bod) + " years old.");
    }); 

})();
