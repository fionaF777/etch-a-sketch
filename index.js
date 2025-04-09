const gridContainer = document.getElementById("grid-container");


createGridSize();
drawGridItemOnMouseMove();


function createGridItems(squaresPerSide) {
    const gridSize = (squaresPerSide * squaresPerSide) * 2;

    gridContainer.style.width = "100%";
    gridContainer.style.height = "70vh";
    
    for(let i = 0; i < squaresPerSide; i++) {
        for(let j = 0; j < squaresPerSide; j++) {
            const html = document.createElement("div");
            html.classList.add("grid-item");

            //width is calculated by dividing 100% by the number of squares per side

            html.style.width = `${100 / squaresPerSide}%`;

            html.style.opacity = 1;
            gridContainer.appendChild(html);
        } 
    }
}


function createGridSize() {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        gridContainer.innerHTML = "";
        let squaresCount = Number(prompt("Enter the number of squares per side (1-100):"));
        
        while(squaresCount > 100 || squaresCount < 1) {
            squaresCount = Number(prompt("Please re-enter a number between 1 and 100:"));
        }

        createGridItems(squaresCount);
    })
}


function getRandomColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    return randomColor;
}


function drawGridItemOnMouseMove() {
    gridContainer.addEventListener("mouseover", (e) => {
        if(e.target.classList.contains("grid-item")) {
            e.target.style.backgroundColor = `${getRandomColor()}`;
    
            let opacity = Number(e.target.style.opacity) - ((10 / 100) * 1);
            e.target.style.opacity = opacity;
        }
    });
}




