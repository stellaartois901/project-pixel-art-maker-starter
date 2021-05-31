const table = document.getElementById('pixelCanvas');

const sizePicker = document.getElementById('sizePicker');

sizePicker.addEventListener('submit', function(event) {
	event.preventDefault();
	const height = document.getElementById('inputHeight').value;
	const width = document.getElementById('inputWidth').value;
	makeGrid(height, width)
})

// Your code goes here!

function makeGrid(height, width) {
    table.innerHTML = "";
    for (let y=0; y < height; y++) {
        let row = table.insertRow(y);
        for (let x=0; x < width; x++) {
            let cell = row.insertCell(x);
            // color changes on click
            cell.addEventListener('click', function(event) {
              const element = event.target;
              // get color
              const color = document.getElementById('colorPicker').value;
              // paint cell
              element.style.backgroundColor = color;
            });
        }
    }
}
