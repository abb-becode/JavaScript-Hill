// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    var sectionsElements = document.querySelectorAll('.target');
    sectionsElements.forEach(item => {
        item.innerHTML = "Owned";
    });

})();
