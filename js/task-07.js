const size = document.getElementById("font-size-control")
const text = document.getElementById("text")

size.addEventListener('input', qqq)

function qqq(e) {
    text.style.fontSize = `${e.target.value}px`;
}






