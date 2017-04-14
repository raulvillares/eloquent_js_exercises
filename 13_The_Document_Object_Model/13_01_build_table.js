  function buildTable(data) {

    function createHeader(properties) {

      function createCell(headerText) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(headerText));
        return th;
      }

      var header = document.createElement("tr");

      properties.forEach(function(property) {
        header.appendChild(createCell(property));
      });

      return header;

    }

    function createRow(element) {

      function createCell(text) {
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(text));
        if (typeof text === "number") td.style.textAlign = "right";
        return td;
      }

      function getValues(element) {
        var values = [];
        for(propertyIndex in element)
          values.push(element[propertyIndex]);
        return values;
      }

      var tr = document.createElement("tr");

      getValues(element).forEach(function(value) {
        tr.appendChild(createCell(value));
      });

      return tr;
    }

    var table = document.createElement("table");
    table.appendChild(createHeader(Object.keys(data[0])));

    data.forEach(function(element) {
      table.appendChild(createRow(element));
    });
    return table;
}