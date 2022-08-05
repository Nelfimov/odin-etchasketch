let timer = null;

const grid = document.querySelector('div.grid');
const styleGrid = getComputedStyle(grid);

let gridSize = document.querySelector('input[name="grid-size"]');

// COLORS
let color = 'black';
document.querySelector('select').addEventListener('change', () => {
  color = document.querySelector('select').value;
})
function getRainbowColors() {
  color = `rgb(${Math.floor(Math.random() * (250 - 0) + 0)}, 
  ${Math.floor(Math.random() * (250 - 0) + 0)}, 
  ${Math.floor(Math.random() * (250 - 0) + 0)})`;
  return color;
}
document.querySelector('button.eraser').addEventListener('click', () => {
  console.log('Color is white');
  clearInterval(timer);
  color = 'white';
})
document.querySelector('button.rainbow').addEventListener('click', () => {
  console.log('Rainbow is active');
  timer = setInterval(getRainbowColors, 100);
})

function changeGrid(value) {
  console.log(value);
  let i = 0;
  while (grid.childElementCount !== 0) {
    grid.removeChild(grid.lastChild);
  }
  let styleTile = `height: ${styleGrid.height.replace('px', '') / value - 2}px; 
                   width: ${styleGrid.width.replace('px', '') / value - 2}px;`
  while (i < value * value) {
    let tile = document.createElement('div');
    tile.setAttribute('style', 'background-color: white;' + styleTile);
    tile.classList.add('tile');
    grid.appendChild(tile);
    ++i;
  }
  document.querySelectorAll('div.tile').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.setAttribute('style', 'background-color: ' + color + ';' + styleTile);
    });
  });
}

document.onload = changeGrid(gridSize.value);
gridSize.addEventListener('change', () => {
  gridSize = document.querySelector('input[name="grid-size"]');
  console.log(gridSize.value);
  changeGrid(gridSize.value);
});

const clearlink = document.querySelectorAll('a')[1];
clearlink.addEventListener('click', changeGrid(document.querySelector('input[name="grid-size"]').value));