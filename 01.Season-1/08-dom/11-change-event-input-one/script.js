// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here

    var counter = document.getElementById("counter");
    var pwd = document.getElementById("pass-one");

    pwd.setAttribute("maxlength","10");
    function updateCounterValue(){
        counter.innerHTML = pwd.value.length + "/10";
    }

    pwd.addEventListener("keydown", updateCounterValue);
    
})();
