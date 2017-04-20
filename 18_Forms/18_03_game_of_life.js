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

function getCheckBox(row, column) { return document.getElementById("R"+row+"C"+column); }

function iterate(event) {

	function calculateLiveNeighbors(checkbox) {

		function checkCell(row,column) {
			if((row >= 0) && (row < rows) && (column >=0) && (column < columns))
				return getCheckBox(row, column).checked ? 1 : 0;
			else
				return 0;
		}	

		var row = parseInt(checkbox.getAttribute("row"));
		var column = parseInt(checkbox.getAttribute("column"));
		return 	checkCell(row-1, column)+
				checkCell(row+1, column)+
				checkCell(row, column+1)+
				checkCell(row, column-1)+
				checkCell(row-1, column-1)+
				checkCell(row+1, column-1)+
				checkCell(row-1, column+1)+
				checkCell(row+1, column+1);
	}	

	var changes = [];

	for(var rowIndex = 0; rowIndex < rows; rowIndex++) {
		for(var columnIndex = 0; columnIndex < columns; ++columnIndex) {
			var isAlive = getCheckBox(rowIndex, columnIndex).checked ? true : false;
			var liveNeighbors = calculateLiveNeighbors(document.getElementById("R"+rowIndex+"C"+columnIndex));
			if (
				(isAlive && (liveNeighbors < 2 || liveNeighbors > 3)) ||
				(!isAlive && liveNeighbors == 3)
			)
				changes.push([rowIndex, columnIndex])
		}
	}

	changes.forEach(function(position) {
		var checkbox = getCheckBox(position[0], position[1]);
		checkbox.checked = checkbox.checked ? false : true;
	});
	
}

const rows = 10;
const columns = 10;
createGrid(rows, columns);
document.getElementById("next").addEventListener("click", iterate);

