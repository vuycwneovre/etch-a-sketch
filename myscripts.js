// EGG A SKETCH

const grid = document.querySelector(".container");

/* Creates n numberOfDivs depending on
the user's input */

numberOfDivs = prompt("Input the number of squares per side:");

let gridArea = numberOfDivs * numberOfDivs;
let widthAndHeight = 480 / numberOfDivs;

// grid and divs creation
for (i = 0; i < gridArea ; i++) {
    let div = document.createElement("div");
    document.getElementById("main").appendChild(div);

    div.style.width = widthAndHeight + "px";
    div.style.height = widthAndHeight + "px";
}

/* mouserover random color */

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

addEventListener("click", function(){
    let cell = grid.children;
    for (let i = 0; i < gridArea; i++) {
        cell[i].addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
    }
});