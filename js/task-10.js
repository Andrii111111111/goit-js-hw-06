function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const quantity = document.querySelector("input")
const divAdd = document.getElementById("boxes")
const add = document.querySelector('[data-create]')
const remove = document.querySelector('[data-destroy]')


add.addEventListener("click", createBoxes)

function createBoxes(amount) {
  amount = quantity.valueAsNumber
  divAdd.style.display = "flex"

for (let i = 1; i <= amount; i++) {
	let div = document.createElement('div');
  divAdd.appendChild(div);
  div.style.width = "30px"
  div.style.height = "30px"
  div.style.backgroundColor = getRandomHexColor()
  
}
}


remove.addEventListener("click", destroyBoxes)

function destroyBoxes() {
  divAdd.innerHTML = "";
}



