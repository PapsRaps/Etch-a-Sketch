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
    square.addEventListener('mouseenter', square =>{
        square.target.style.backgroundColor = 'black'
    })
})

const addButton = document.querySelector('button');
addButton.addEventListener('click', getSize)

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

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const square = document.createElement('div');

            const gridSizePixel = (containerSize/size)

            square.classList.add('gridSquares');
            square.style.width = `${gridSizePixel}px`
            square.style.height = `${gridSizePixel}px`

            gridContainer.appendChild(square);
            grid.push(square);
        }
    }

    Array.from(grid).forEach(square => {
        square.addEventListener('mouseenter', square =>{
            square.target.style.backgroundColor = 'black'
        })
    })
}