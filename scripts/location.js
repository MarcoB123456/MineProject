document.addEventListener("keydown", (event) => {
    const keyName = event.key;

    if (keyName === "m") {
        document.location.pathname = "/mine"
        console.log("Children yearn for the mines")
    } else if (keyName === "c") {
        console.log("Put the children to work in the factories")
    } else if (keyName === "s") {
        console.log("Make the children sell produce otherwise sell the child")
    }
})