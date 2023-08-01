const butMi = document.querySelector('[data-action="decrement"]') 
const butPl = document.querySelector('[data-action="increment"]') 
const number = document.getElementById('value')
 let counterValue = 0 ;



butMi.addEventListener("click", remNum);

function remNum(e) {
    counterValue -= 1  
    number.textContent = counterValue
}


butPl.addEventListener("click", addNum);

function addNum(e) { 
    counterValue += 1
    number.textContent = counterValue
}


