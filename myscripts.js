// EGG A SKETCH

/* Creates a grid in which it creates 
the number of divs that you select in
the prompt */








/* Creates n numberOfDivs depending on
the user's input */

for (numberOfDivs = 0; numberOfDivs < 16 ; numberOfDivs++) {
    let div = document.createElement("div");

    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";

    document.getElementById("main").appendChild(div);
}

/* Erase button to ask again for number
of divs and reset the grid */

