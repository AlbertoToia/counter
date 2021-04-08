//Container
let container = document.createElement("container");

container.className = "container";

container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";

document.body.appendChild(container);


//Div esterno
let externalDiv = document.createElement("div");

externalDiv.style.display = "flex";
externalDiv.style.justifyContent = "center";

container.appendChild(externalDiv);


//Div interni
let minusDiv = document.createElement("div")
let valueDiv = document.createElement("div");
let plusDiv = document.createElement("div");

minusDiv.className = "minus"
plusDiv.className = "plus"

minusDiv.textContent = "-";
plusDiv.textContent = "+";
valueDiv.textContent = 0;

externalDiv.appendChild(minusDiv);
externalDiv.appendChild(valueDiv);
externalDiv.appendChild(plusDiv);


//Funzione per lo stile, w e h impostati di default per i due div laterali.
function setStyle (element, b, w = 90, h = 70){
    element.style.width = w + "px";
    element.style.height = h + "px";
    element.style.backgroundColor = b;
    element.style.display = "flex"
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
    element.style.fontSize = "2rem";
    element.style.color = "#555"
}

setStyle(minusDiv, "rgb(233, 164, 80)");
setStyle(valueDiv, "#ccc", 70);
setStyle(plusDiv, "rgb(233, 164, 80)");


//Funzione per lo stile | bordi
function setBorder (element, position){
    let border = "solid 1px #000";
    let radius = "8px";

    element.style.border = border;
    if (position == "center") {
        element.style.borderLeft = "none";
        element.style.borderRight = "none";
    } else if (position == "left") {
        element.style.borderTopLeftRadius = radius;
        element.style.borderBottomLeftRadius = radius;
    } else if (position == "right") {
        element.style.borderTopRightRadius = radius;
        element.style.borderBottomRightRadius = radius;
    }

}

setBorder(plusDiv, "right");
setBorder(minusDiv, "left");
setBorder(valueDiv, "center");


//Counter
let currentValue = Number(valueDiv.textContent)

//Click sul +
plusDiv.addEventListener("click", (event) =>{
    currentValue++;
    valueDiv.textContent = currentValue;
});

//Click sul -
minusDiv.addEventListener("click", (event) =>{
    currentValue--;
    valueDiv.textContent = currentValue;
});

//Uso dei tasti + e -
addEventListener("keydown", (event) =>{
    if (event.keyCode == 107) {
        currentValue++;
        valueDiv.textContent = currentValue;
    } else if (event.keyCode == 109) {
        currentValue--;
        valueDiv.textContent = currentValue;
    }
});
