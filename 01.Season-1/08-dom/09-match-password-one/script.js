// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here

    var password = document.getElementById('pass-one');
    var confirmPassword = document.getElementById('pass-two');
    const checkPasswords = () => {
        if(!password.value) { alert("please enter your password"); return;}
        if (password.value !== confirmPassword.value) {  
          password.style.borderColor = 'red';
          confirmPassword.style.borderColor = 'red';
        }
        else {
            password.style.borderColor = 'green';
          confirmPassword.style.borderColor = 'green';
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        checkPasswords();
    });

})();
