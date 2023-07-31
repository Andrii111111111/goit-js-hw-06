const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elUl = document.querySelector("#ingredients")

function listProducts(arr) {
  return arr.map(el => {
    const elLi = document.createElement("li")
    elLi.textContent = el;
    return elLi
  })
}
elUl.append(...listProducts(ingredients))
console.log(...listProducts(ingredients))