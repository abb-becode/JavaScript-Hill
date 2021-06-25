// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here

    var srceElement = document.getElementById("source");
    var attr = srceElement.getAttribute("data-image");
    var targetElement = document.getElementById("target");
    targetElement.setAttribute("data-image",attr);

    //remove source element
    srceElement.remove();


})();
