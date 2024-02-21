let number = 0;

setInterval(setValue, 1000)

function setValue() {
    let element = document.getElementById("text");
    element.textContent = "Hello world: " + number

    number = number + 1;
}




