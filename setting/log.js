document
    .getElementsByClassName("log_button")[0]
    .addEventListener("click", () => {
        document.getElementsByClassName("log_display")[0].classList.toggle("open");
        document.getElementsByClassName("texts")[0].classList.toggle("open");
    });