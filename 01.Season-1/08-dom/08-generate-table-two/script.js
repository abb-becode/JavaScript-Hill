// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here

    var target = document.getElementById("target");
    var tbl = document.createElement('table');
    //var tr = document.createElement("tr");

    for (var i = 0; i<= 10; i++) {
        var tr = document.createElement("tr");
        for (let j=0; j<= 10; j++) {
            var td = document.createElement('td');
            (i == 0) && (j == 0) ? td.innerHTML = "*" : ""; 
            (i == 0) && (j > 0)? td.innerHTML = j : "";   
            (i > 0) && (j == 0)? td.innerHTML = i : ""; 
            (i > 1) && (j == 1) ? td.innerHTML = i : "";
            ((i > 1) && (j > 1)) ? td.innerHTML = i*j : ""; 
            ((i == 1) && (j > 0)) ? td.innerHTML = i*j : "";
            tr.appendChild(td);
        }
        tbl.appendChild(tr);
    }

    target.appendChild(tbl);

})();
