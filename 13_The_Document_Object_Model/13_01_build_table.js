  function buildTable(data) {

    function createHeader() {
      var header = document.createElement("tr");

      properties.forEach(function(property) {
        var th = document.createElement("th");
        th.textContent = property;          
        header.appendChild(th);
      });

      return header;
    }

    function createRow(element) {
      var tr = document.createElement("tr");

      properties.forEach(function(key) {
        var td = document.createElement("td");
        td.textContent = element[key];
        if (typeof element[key] === "number") td.style.textAlign = "right";
        tr.appendChild(td);
      });

      return tr;
    }

    var properties = Object.keys(data[0]);
    var table = document.createElement("table");
    table.appendChild(createHeader());

    data.forEach(function(element) {
      table.appendChild(createRow(element));
    });
    return table;
}