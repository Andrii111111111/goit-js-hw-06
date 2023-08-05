const size = document.getElementById("font-size-control")
const text = document.getElementById("text")

size.addEventListener('input', chengeSize)

function chengeSize(e) {
    text.style.fontSize = `${e.target.value}px`;
}






