function createGrid(rows, columns) {
	
	function createCheckBox(row, column) {
		var checkbox = document.createElement("input");
		checkbox.id = "R"+row+"C"+column;
		checkbox.type = "checkbox";
		checkbox.setAttribute("row", row); 
		checkbox.setAttribute("column", column);
		return checkbox;
	}
	
	for(var rowIndex = 0; rowIndex < rows; rowIndex++) {
		for(var columnIndex = 0; columnIndex < columns; ++columnIndex) {
			var checkbox = createCheckBox(rowIndex,columnIndex);
			document.getElementById("grid").appendChild(checkbox);
		}
		document.getElementById("grid").appendChild(document.createElement("br"));
	}

}

function iterate(event) {

	function liveNeighbors(checkbox) {
		return leftNeighbor+rightNeighbor(checkbox);
	}

		function getCheckBox(row, column) {
			return document.getElementById("R"+row+"C"+column);
		}

		function getRow(checkbox) { return parseInt(checkbox.getAttribute("row")); }
		function getColumn(checkbox) { return parseInt(checkbox.getAttribute("column")); }
	
		function leftNeighbor(checkbox) {
			if (checkbox.getAttribute("column") >= 1)
				return getCheckBox(getRow(checkbox), getColumn(checkbox)-1).checked ? 1 : 0;
			else
				return 0;
		}
		
		function rightNeighbor(checkbox) {
			if (checkbox.getAttribute("column") < columns-1)
				return getCheckBox(getRow(checkbox), getColumn(checkbox)+1).checked ? 1 : 0;
			else
				return 0;
		}		
	
	function change(checkbox) {
		checkbox.checked = checkbox.checked ? false : true;
		grid[checkbox.getAttribute("row")][checkbox.getAttribute("column")] = (grid[checkbox.getAttribute("row")][checkbox.getAttribute("column")] == true) ? false : true;
	}

	for(var rowIndex = 0; rowIndex < rows; rowIndex++) {
		for(var columnIndex = 0; columnIndex < columns; ++columnIndex) {
			liveNeighbors(document.getElementById("R"+rowIndex+"C"+columnIndex));
		}
	}

	
}

const rows = 10;
const columns = 10;
createGrid(rows, columns);
document.getElementById("next").addEventListener("click", iterate);

