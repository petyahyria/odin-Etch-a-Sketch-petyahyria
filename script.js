const container = document.querySelector("#container");
console.log(container);
const addRowOfSquares = (numberOfSquares) => {
    let row = document.createElement("div");
    row.classList.add("flex");
    row.style.padding = "5px";
    container.appendChild(row);
    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement("div");
        // "numberOfSquares - 1" because gaps between elements is less by one then numberOfElements
        let squareSize = (500 - 5 * (numberOfSquares - 1))/numberOfSquares;
        console.log(square);
        square.style.cssText = `
                                background-color: #25283D;
                                width: ${squareSize}px;
                                height: ${squareSize}px;
                                flex-shrink: 1;
                                `
        row.appendChild(square);
    }
}

addRowOfSquares(16);