console.log('profile.js Success!');

const $ = (id) => document.getElementById(id);

//CAPTURANDO ELEMENTOS

const formUser = $('formUser')
const inputImage = $('image')
const imageName = $('imageFile')
const inputName = $('name')
const inputSurname = $('surname')
const inputStreet = $('street')
const inputPostcode = $('postcode')
const inputProvince = $('province')
const inputLocation = $('location')


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

//INPUT NAME

inputName.addEventListener('blur', function (event) {
    switch (true) {
        case !this.value.trim():
            msgError('userNameError', "El nombre es obligatorio", event)
            break;
        case this.value.trim().length < 2:
            msgError('userNameError', "El nombre debe tener mínimo 2 caracteres", event)
            break;
        default:
            this.classList.add('input_valid')
            break;
    }
})

inputName.addEventListener('focus', function (event) {
    cleanError('userNameError', event)
})

//INPUT SURNAME

inputSurname.addEventListener('blur', function (event) {
    switch (true) {
        case !this.value.trim():
            msgError('userSurnameError', "El apellido es obligatorio", event)
            break;
        case this.value.trim().length < 2:
            msgError('userSurnameError', "El apellido debe tener mínimo 2 caracteres", event)
            break;
        default:
            this.classList.add('input_valid')
            break;
    }
})

inputSurname.addEventListener('focus', function (event) {
    cleanError('userSurnameError', event)
})

//INPUT STREET

inputStreet.addEventListener('blur', function (event) {
    switch (true) {
        case !this.value.trim():
            msgError('userStreetError', "El nombre de la calle es obligatoria", event)
            break;
        case this.value.trim().length < 2:
            msgError('userStreetError', "Debe tener mínimo 2 caracteres", event)
            break;
        default:
            this.classList.add('input_valid')
            break;
    }
})

inputStreet.addEventListener('focus', function (event) {
    cleanError('userStreetError', event)
})

//INPUT POST CODE

inputPostcode.addEventListener('blur', function (event) {
    switch (true) {
        case !this.value.trim():
            msgError('userPostcodeError', "El código postal es requerido", event)
            break;
        case this.value < 0:
            msgError('userPostcodeError', "Solo números positivos", event)
            break;
        default:
            this.classList.add('input_valid')
            break;
    }
})

inputPostcode.addEventListener('focus', function (event) {
    cleanError('userPostcodeError', event)
})

//INPUT PROVINCE

inputProvince.addEventListener('blur', function (event) {
    switch (true) {
        case !this.value.trim():
            msgError('userProvinceError', "El nombre de la ciudad es obligatoria", event)
            break;
        case this.value.trim().length < 2:
            msgError('userProvinceError', "Debe tener mínimo 2 caracteres", event)
            break;
        default:
            this.classList.add('input_valid')
            break;
    }
})

inputProvince.addEventListener('focus', function (event) {
    cleanError('userProvinceError', event)
})

//INPUT LOCATION

inputLocation.addEventListener('blur', function (event) {
    switch (true) {
        case !this.value.trim():
            msgError('userLocationError', "El nombre de la localidad es obligatoria", event)
            break;
        case this.value.trim().length < 2:
            msgError('userLocationError', "Debe tener mínimo 2 caracteres", event)
            break;
        default:
            this.classList.add('input_valid')
            break;
    }
})

inputLocation.addEventListener('focus', function (event) {
    cleanError('userLocationError', event)
})

//INPUT IMAGE

const regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;

inputImage.addEventListener("change", function (event) {
  switch (true) {
    case !regExExt.exec(this.value):
      msgError(
        "imagesError",
        "Solo se admiten imágenes jpg | jpeg | png | gif | webp",
        event
      );
      break;
    default:
      cleanError("imagesError",event)
      const file = this.files[0];
      $('imageFile').value = file.name;
      break;
  }
});

//FORM VALIDATION

formUser.addEventListener('submit', function (event) {
    event.preventDefault();
    let error = false;
    for (let i = 1; i < this.elements.length - 1; i++) {

        if (!this.elements[i].value || this.elements[i].classList.contains('input_invalid')) {
            error = true
        }

    }

    if (!error) {
        this.submit()
    } else {
        for (let i = 1; i < this.elements.length - 1; i++) {

            !this.elements[i].value && this.elements[i].classList.add('input_invalid')
            
        }
        $('formError').innerHTML = "Los campos señalados son obligatorios."
    }

})