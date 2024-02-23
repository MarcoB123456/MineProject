
function initCrafting() {
    let gameScreen = document.getElementById("game-screen");

    let mainCraftingDiv = document.createElement("div");
    mainCraftingDiv.id = "crafting-screen"
    mainCraftingDiv.innerHTML = `<h1 id="iron-bar-counter">Iron bars: </h1>`
    mainCraftingDiv.classList.add("yellow")
    mainCraftingDiv.classList.add("hidden")

    gameScreen.appendChild(mainCraftingDiv)
}

function openCrafting() {
    let craftingScreen = document.getElementById("crafting-screen");
    craftingScreen.classList.remove("hidden")

    let storeScreen = document.getElementById("store-screen");
    storeScreen.classList.add("hidden")

    let mineScreen = document.getElementById("mine-screen");
    mineScreen.classList.add("hidden")
}

document.addEventListener("increment", (event) => {
    let ironBarCounter = document.getElementById("iron-bar-counter");

    if (ironBarCounter != null) {
        ironBarCounter.textContent = "Iron bars: " + event.detail.iron_bar
    }
})