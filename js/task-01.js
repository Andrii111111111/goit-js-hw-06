
const body = document.querySelector('#categories');
const elements = document.querySelectorAll('.item');

console.log(`Number of categories: ${ body.children.length }`)

elements.forEach(function (element) {
     console.log(`Category: ${ element.firstElementChild.textContent }`)
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});

