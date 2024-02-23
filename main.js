let number = 0;

setInterval(incrementResources, 1000)

window.onload = init;

function init() {
    initResources()
    initMine()
    initStore()
    initCrafting()
}

function setValue() {
    let element = document.getElementById("text");
    element.textContent = "Hello world: " + number

    number = number + 1;
}




