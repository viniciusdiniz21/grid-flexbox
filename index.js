let block = document.querySelectorAll('div')

block.forEach(element => {
    element.addEventListener("mouseover", borda)
    element.addEventListener("mouseout", removeBorda)
});

function borda() {
    this.classList.add("border")
}

function removeBorda() {
    this.classList.remove("border")
}