const inp = document.getElementById('validation-input')
const len = document.querySelector('input[data-length="6"]')


inp.addEventListener("blur", qqq)
function qqq(e) {
    if (e.currentTarget.value.length === Number(len.dataset.length)) {
        inp.classList.remove('invalid')
        inp.classList.add('valid')
    } else {
        inp.classList.remove('valid')
        inp.classList.add('invalid')
    }    
}
 





