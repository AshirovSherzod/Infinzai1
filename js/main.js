let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
    if (document.body.className != "light") {
        this.firstElementChild.src = "images/navigation/dark-mode.svg";
    } else {
        this.firstElementChild.src = "images/navigation/light-mode.svg";
    }
    document.body.classList.toggle("light");
});