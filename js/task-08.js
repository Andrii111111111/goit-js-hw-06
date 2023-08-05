
const data = document.querySelector('.login-form')


data.addEventListener("submit", sendData)

function sendData(e) {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Заповни всі поля!");
    }
    console.log({ Email:email.value , Password:password.value });
    e.currentTarget.reset();
}





 
