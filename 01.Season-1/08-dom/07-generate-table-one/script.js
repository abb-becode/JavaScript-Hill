// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here

    var target = document.getElementById("target");
    var tbl = document.createElement('table');
    var td = document.createElement("td");

    for (let i=1; i<= 10; i++) {
        var tr = document.createElement('tr');
        td.appendChild(tr);
    }

    tbl.appendChild(td);
    target.appendChild(tbl);

})();
