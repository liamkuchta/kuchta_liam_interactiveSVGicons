console.log("JavaScript File is linked");

const main = document.querySelectorAll("#main svg")

console.log(icons);

function logId() {
    console.log(this.id);
}
main.forEach(svg => svg.addEventListener("click", logId));