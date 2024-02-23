
var gold;
var coal;
var iron_bar;


function initResources() {
    gold = 0;
    coal = 50;
    iron_bar = 100
}


function incrementResources() {
    gold = gold + 1;
    coal = coal + 1;
    iron_bar = iron_bar + 1


    const incrementEvent = new CustomEvent("increment", {detail: {"gold": gold, "coal": coal, "iron_bar": iron_bar}})

    document.dispatchEvent(incrementEvent)
}