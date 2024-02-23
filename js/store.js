
function initStore() {
    let gameScreen = document.getElementById("game-screen");

    let mainStoreDiv = document.createElement("div");
    mainStoreDiv.id = "store-screen"
    mainStoreDiv.innerHTML = `<h1 id="gold-counter">Yo what is up</h1>`
    mainStoreDiv.classList.add("blue")
    mainStoreDiv.classList.add("hidden")

    gameScreen.appendChild(mainStoreDiv)
}
function openStore() {
    let craftingScreen = document.getElementById("crafting-screen");
    craftingScreen.classList.add("hidden")

    let storeScreen = document.getElementById("store-screen");
    storeScreen.classList.remove("hidden")

    let mineScreen = document.getElementById("mine-screen");
    mineScreen.classList.add("hidden")
}

document.addEventListener("increment", (event) => {
    let goldCounter = document.getElementById("gold-counter");

    if (goldCounter != null) {
        goldCounter.textContent = "Gold: " + event.detail.gold
    }
})