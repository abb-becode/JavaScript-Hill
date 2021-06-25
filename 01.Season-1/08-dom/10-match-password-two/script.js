// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here



    var password = document.getElementById('pass-one');
    var confirmPassword = document.getElementById('pass-two');
    const checkPasswords = () => {
        if(!password.value) { alert("please enter your password"); return;}
        if (password.value !== confirmPassword.value) {  
          password.className = "error";
          confirmPassword.className = "error";
        }
        else {
            password.classList.remove("error");
          confirmPassword.classList.remove("error");
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        checkPasswords();
    });

})();
