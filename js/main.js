document.addEventListener("readystatechange", (event) => {
    if (event.target.readystate === "complete"){
        console.log("readystate: complete");
        initApp();
    }
});

const initApp = () => {
    const contact = document.querySelector("#contact");
    const a = contact.querySelector("a");
    a.addEventListener("click", () => {

        console.log("Clicked")
    })
}