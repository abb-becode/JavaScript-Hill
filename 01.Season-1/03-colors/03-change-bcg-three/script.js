
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here
    function getRandomColor() {
        //var letters = '0123456789ABCDEF';
        //var color = "#";
        for (var i = 0; i < 6; i++) {
          //color += letters[Math.floor(Math.random() * 16)];
          var color = "#" + ( (1<<24) * Math.random() | 0).toString(16);
        }
        return color;
    }

    function setRandomColor() {
        //get random color and affect it to background of body
        document.body.style.background = getRandomColor()
    }
      
    document.getElementById("run").addEventListener("click", () => {
        //set random color of body
        setRandomColor();
    }); 


})();
