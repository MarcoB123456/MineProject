

function initMine() {
    let gameScreen = document.getElementById("game-screen");

    let mainMineDiv = document.createElement("div");
    mainMineDiv.id = "mine-screen"
    mainMineDiv.innerHTML = `<h1 id="coal-counter">Coal</h1>`
    mainMineDiv.classList.add("red")

    gameScreen.appendChild(mainMineDiv)
}

function openMine() {
    let craftingScreen = document.getElementById("crafting-screen");
    craftingScreen.classList.add("hidden")

    let storeScreen = document.getElementById("store-screen");
    storeScreen.classList.add("hidden")

    let mineScreen = document.getElementById("mine-screen");
    mineScreen.classList.remove("hidden")
}


document.addEventListener("increment", (event) => {
    let coalCounter = document.getElementById("coal-counter");

    if (coalCounter != null) {
        coalCounter.textContent = "Coal: " + event.detail.coal
    }
})