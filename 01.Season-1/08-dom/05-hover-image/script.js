// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here

    var img = document.getElementsByTagName("img").item(0);
    var attr = img.getAttribute("data-hover");
    
    img.addEventListener("mouseover", () => {
        img.setAttribute("src", attr);
    });

})();
