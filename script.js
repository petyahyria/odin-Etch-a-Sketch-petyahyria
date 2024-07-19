const container = document.querySelector("#container");
const addSketchBtn = document.createElement("button");
addSketchBtn.textContent = "Add Scetch"
addSketchBtn.classList.add("add-sketch-btn");
document.body.insertBefore(addSketchBtn, container);

const addRowOfSquares = (numberOfSquares) => {
    let row = document.createElement("div");
    row.classList.add("flex");
    container.appendChild(row);
    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement("div");
        const WIDTH_OF_CONTAINER = container.offsetWidth;
        // "numberOfSquares + 1" because gaps between elements and sides is greater by one then numberOfElements
        let squareSize = ((WIDTH_OF_CONTAINER - 5 * (numberOfSquares + 1))/numberOfSquares);
        square.style.cssText = `
                                background-color: #25283D;
                                width: ${squareSize}px;
                                height: ${squareSize}px;
                                flex-shrink: 1;
                                `
        row.appendChild(square);
    }
}

let createGridOfSquares = (numberOfSquares) => {
    for (let i = 0; i < numberOfSquares; i++) {
        addRowOfSquares(numberOfSquares);
    }
}

createGridOfSquares(16);

let askUserNumber = () => {
    let numberOfSquares = +prompt("Enter a number from 0 to 100:");
        while(numberOfSquares < 0 || numberOfSquares > 100){
            numberOfSquares = +prompt("Enter a number from 0 to 100:");
        }
        return numberOfSquares;
}

let deletePreviousSketch = () => {
    while(container.firstChild){
        container.removeChild(container.lastChild)
    }
}

let addNewSketch = (numberOfSquares) => {
    deletePreviousSketch();
    createGridOfSquares(askUserNumber());
}

addSketchBtn.addEventListener("click", addNewSketch);