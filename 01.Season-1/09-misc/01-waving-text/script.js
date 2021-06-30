// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    
      var letterContainer = document.getElementById("target");
      var letters = letterContainer.innerText;
      letters = letters.split("");
      letterContainer.innerText = "";

      letters.forEach(function(letter, index) {
        var wrap = document.createElement("span");
        wrap.innerText = letter;
        wrap.style.position = "relative";
        wrap.style.bottom = index+"px";
        wrap.style.transform = "rotate("+-index+"deg)";
        letterContainer.appendChild(wrap);
      });

})();
