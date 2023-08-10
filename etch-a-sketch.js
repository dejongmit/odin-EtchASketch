const container = document.querySelector('.gridContainer');
const resetButon = document.querySelector('button');
let gridSize = 16;

function createGrid() {
    for (let i = 0; i < grid * gridSize; i++) {
        let child = document.createElement('div',);
        child.setAttribute('class', 'box');
        container.appendChild(child);
    }
}

function color(e) {
    let currentBox = e.srcElement;
    currentBox.style.backgroundColor = 'black';
}

for (let i = 0; i < 16 * 16; i++) {
    let child = document.createElement('div',);
    child.setAttribute('class', 'box');
    container.appendChild(child);
}

const boxes = document.querySelectorAll('.box');
boxes.forEach((item) => {
    item.addEventListener('mouseenter', (e) => color(e));
});

resetButon.addEventListener('click', (e) => {

});
