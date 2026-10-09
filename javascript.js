let numberOfGrids = 18;
const grid = [];
const gridContainer = document.getElementById('container');
const containerSize = 900;

gridContainer.style.width = `${containerSize}px`;
gridContainer.style.height = `${containerSize}px`;

for(let i = 0; i < numberOfGrids; i++){
    for(let j = 0; j < numberOfGrids; j++){
        const square = document.createElement('div');

        const gridSizePixel = Math.ceil(containerSize/numberOfGrids)

        square.classList.add('gridSquares');
        square.style.width = `${gridSizePixel}px`
        square.style.height = `${gridSizePixel}px`

        gridContainer.appendChild(square);
        grid.push(square);
    }
}


Array.from(grid).forEach(square => {
    square.addEventListener('mouseenter', changeSquareColor)
})

const changeButton = document.getElementById('changeSize')
const resetButton = document.getElementById('reset')
changeButton.addEventListener('click', getSize)
resetButton.addEventListener('click', () => changeGrid(numberOfGrids))

function getSize(){
    let userInput = Number(prompt('How many squares per side?',''));

    if (Number.isNaN(userInput)){
        alert('Please Type a number');
    }else if(userInput > 100){
        alert('Maximum of 100 only please')
    }else{
        changeGrid(userInput);
    }
}

function changeGrid(size){
    gridContainer.replaceChildren();
    numberOfGrids = size;

    for(let i = 0; i < numberOfGrids; i++){
        for(let j = 0; j < numberOfGrids; j++){
            const square = document.createElement('div');

            const gridSizePixel = (containerSize/numberOfGrids)

            square.classList.add('gridSquares');
            square.style.width = `${gridSizePixel}px`
            square.style.height = `${gridSizePixel}px`
            square.style.opacity = '1';

            gridContainer.appendChild(square);
            grid.push(square);
        }
    }

    Array.from(grid).forEach(square => {
        square.addEventListener('mouseenter',changeSquareColor)
    })
}

function changeSquareColor(square){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    square.target.style.backgroundColor = `rgb(${red} ${green} ${blue})`
}