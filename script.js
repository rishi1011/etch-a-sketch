const container = document.querySelector(".container");
const clearBtn = document.querySelector(".btn.clear");
const eraseBtn = document.querySelector(".btn.erase");
const paintBtn = document.querySelector(".btn.paint");
const paintRainbowBtn = document.querySelector(".btn.paint.rainbow");
const rangeInput = document.querySelector(".range.input");
const rangeValue = document.querySelector(".range.value");
const favColor = document.getElementById("favcolor");
const shadeBtn = document.querySelector(".btn.paint.shade");

createGrid(16);

function createGrid(value) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`
    for (let i = 0; i < (value * value); i++) {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
    addGridListeners();
}

function addGridListeners() {
    const gridItems = document.querySelectorAll(".grid-item");
    
    eraseBtn.addEventListener('click', eraseGrid);
    paintBtn.addEventListener('click', paintGrid);
    clearBtn.addEventListener('click', clearGrid);
    paintRainbowBtn.addEventListener('click', paintRainbowGrid);
    shadeBtn.addEventListener('click', shadeGrid);

    function shadeGrid() {
        gridItems.forEach(item => {
            let opacity = 0;
            item.addEventListener('mouseover', (event) => {
                opacity += 10;
                event.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity}%)`;
            });
        });
    }

    function paintRainbowGrid() {
        gridItems.forEach(item => {
            item.addEventListener('mouseover', (event) => {
                const R = Math.floor(Math.random() * 256);
                const G = Math.floor(Math.random() * 256);
                const B = Math.floor(Math.random() * 256);
                console.log(R,G,B);
                event.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
            });
        });
    }

    function paintGrid() {
        gridItems.forEach(item => {
            item.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = favColor.value;
            });
        });
    }
    
    function eraseGrid() {
        gridItems.forEach(item => {
            item.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = "aliceblue";
            });
        });
    }
    
    function clearGrid() {
        gridItems.forEach(item => {
            item.style.backgroundColor = "aliceblue";
        });
    }
}

rangeInput.addEventListener('mousemove', (event) => {
    rangeValue.innerText = `${event.target.value} X ${event.target.value}`;
    rangeInput.addEventListener('change', (e) => {
        createGrid(e.target.value);
    });
});


