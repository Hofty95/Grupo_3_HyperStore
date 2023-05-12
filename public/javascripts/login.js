console.log('login.js Success!');

const $ = (id) => document.getElementById(id);

//CAPTURANDO ELEMENTOS

const formLogin = $('user-login')
const inputEmail = $('email')
const inputPassword = $('password')

//ERROR MSJ

const msgError = (element, message, { target }) => {
    $(element).innerHTML = message;
    target.classList.add("input_invalid");
};

const cleanError = (element, { target }) => {
    target.classList.remove("input_invalid");
    target.classList.remove("input_valid");
    $(element).innerHTML = null;
};

//MATCH EMAIL

/* const verifyEmail = async (email) => {
    try {
        let response = await fetch("/api/users/verificar", {
            method: "POST",
            body: JSON.stringify({
                email: email
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        let result = await response.json();

        return result.data.existUser;

    } catch (error) {
        console.error
    }
} */

//INPUT EMAIL

let regExEmail = /^[\w.-]+@[\w.-]+\.[\w.-]+$/;

inputEmail.addEventListener('blur', async function (event) {
    switch (true) {
        case !this.value.trim():
            msgError('loginEmailError', "El email es obligatorio", event)
            break;
        case !regExEmail.test(this.value.trim()):
            msgError('loginEmailError', 'Tiene que ser un formato de email válido', event)
            break;
        default:
            this.classList.add('input_valid')
            break;
    }
})

inputEmail.addEventListener('focus', function (event) {
    cleanError('loginEmailError', event)
})

//INPUT PASSWORD

inputPassword.addEventListener('blur', async function (event) {
    switch (true) {
        case !this.value.trim():
            msgError('loginPasswordError', "La contraseña es obligatoria", event)
            break;
        default:
            this.classList.add('input_valid')
            break;
    }
})

inputPassword.addEventListener('focus', function (event) {
    cleanError('loginPasswordError', event)
})

//FORM VALIDATION

formLogin.addEventListener('submit', function (event) {
    event.preventDefault();
    let error = false;
    for (let i = 0; i < this.elements.length - 3; i++) {

        if (!this.elements[i].value || this.elements[i].classList.contains('input_invalid')) {
            error = true
        }

    }

    if (!error) {
        this.submit()
    } else {
        for (let i = 0; i < this.elements.length - 3; i++) {

            !this.elements[i].value && this.elements[i].classList.add('input_invalid')          
        }
    }

})