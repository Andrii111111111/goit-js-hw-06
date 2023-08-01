const data = document.getElementById('name-input')
const output = document.getElementById('name-output')


data.addEventListener("input", ggg)

function ggg(e) {
    if (data.value === "") {
        return output.textContent = 'Anonymous'
     } else {
       return output.textContent = data.value
     }
}





