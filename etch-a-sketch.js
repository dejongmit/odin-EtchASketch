const container = document.querySelector('.gridContainer');
const resetButon = document.querySelector('button');

function createGrid(gridSize = 16) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let child = document.createElement('div',);
        child.setAttribute('class', 'box');
        container.appendChild(child);
    }
}

function color(e) {
    let currentBox = e.srcElement;
    currentBox.style.backgroundColor = 'black';
}

createGrid();

let boxes = document.querySelectorAll('.box');
boxes.forEach((item) => {
    item.addEventListener('mouseenter', (e) => color(e));
});

resetButon.addEventListener('click', (e) => { //reset the grid and reload event listeners for the newly created divs
    let gridSize = parseInt(prompt("Enter the new grid's side length"));
    if (isNaN(gridSize) || gridSize > 100) {
        alert("Enter a number less than 100!")
    } else {
        boxes.forEach((item) => {
            container.removeChild(item);
        })
        createGrid(gridSize)
        boxes = document.querySelectorAll('.box');
        boxes.forEach((item) => {
            item.addEventListener('mouseenter', (e) => color(e));
            
            let boxWidth = 675 / gridSize;
            item.style.width = boxWidth + 'px';
            item.style.height = boxWidth + 'px';
        });
    }
});


