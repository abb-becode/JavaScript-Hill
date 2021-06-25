// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here

    var validity = document.getElementById("validity");
    var pwd = document.getElementById("pass-one");
    var regpwd1 = /(\D*\d){2,}/;
    var regpwd2 = /[a-zA-Z]{8,}/;

    function checkValidity(){
        var pwdValue = pwd.value;
        if( pwdValue.match(regpwd1) && pwdValue.match(regpwd2) ) {
            validity.innerHTML = "Ok";
        }
    }

    pwd.addEventListener("keydown", checkValidity);

})();