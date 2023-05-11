console.log("formAddEdit.js Success!");

const $ = (id) => document.getElementById(id);

const formEdit = $("formEdit");
const inputName = $("name");
const inputPrice = $("price");
const inputImages = $("images");
const inputDescription = $("description");
const inputSpecifications = $("specifications");
const inputDiscount = $("discount");
const inputCategories = $("categories");
const inputGama = $("gama");
const inputBrand = $("brand");

const errorMsg = (element, message, { target }) => {
  $(element).innerHTML = message;
  target.classList.add("input_invalid");
};

const errorClean = (element, { target }) => {
  target.classList.remove("input_invalid");
  target.classList.remove("input_valid");
  $(element).innerHTML = null;
};

/* Input Name */

inputName.addEventListener("blur", function (event) {
  switch (true) {
    case !this.value.trim():
      errorMsg("nameError", "El Nombre del producto es obligatorio", event);
      break;
    case this.value.trim().length < 5 || this.value.trim().length > 150:
      errorMsg(
        "nameError",
        "El nombre debe tener como minimo 5 caracteres y un maximo de 150",
        event
      );
      break;
    default:
      this.classList.add("input_valid");
      break;
  }
});

inputName.addEventListener("focus", function (event) {
  errorClean("nameError", event);
});

/* Input price */

inputPrice.addEventListener("blur", function (event) {
  switch (true) {
    case !this.value:
      errorMsg(
        "priceError",
        "Debes ingresar un precio para el producto",
        event
      );
      break;
    case this.value < 0:
      errorMsg("priceError", "Solo números positivos", event);
      break;
    default:
      this.classList.add("input_valid");
      break;
  }
});

inputPrice.addEventListener("focus", function (event) {
  errorClean("priceError", event);
});

/* input Description */

inputDescription.addEventListener("blur", function (event) {
  switch (true) {
    case !this.value:
      errorMsg(
        "descriptionError",
        "Debes ingresar una descripcon para el producto",
        event
      );
      break;
    case this.value.trim().length < 20 || this.value.trim().length > 500:
      errorMsg(
        "descriptionError",
        "la descripcion debe tener como minimo 20 caracteres y un maximo de 500",
        event
      );
      break;
    default:
      this.classList.add("input_valid");
      break;
  }
});

inputDescription.addEventListener("focus", function (event) {
  errorClean("descriptionError", event);
});

/* input Specifications */

inputSpecifications.addEventListener("blur", function (event) {
  switch (true) {
    case !this.value:
      errorMsg(
        "specificationsError",
        "Debes ingresar las especificaciones para el producto",
        event
      );
      break;
    case this.value.trim().length < 20 || this.value.trim().length > 500:
      errorMsg(
        "specificationsError",
        "las especificaciones deben tener como minimo 20 caracteres y un maximo de 500",
        event
      );
      break;
    default:
      this.classList.add("input_valid");
      break;
  }
});

inputSpecifications.addEventListener("focus", function (event) {
  errorClean("specificationsError", event);
});

/* input Discount */

inputDiscount.addEventListener("blur", function (event) {
  switch (true) {
    case !this.value:
      errorMsg(
        "discountError",
        "Debes ingresar un descuento para el producto, de lo contrario ingresar cero",
        event
      );
      break;
    case this.value.trim().length > 2:
      errorMsg(
        "discountError",
        "Solo un maximo de dos caracteres, una oferta no puede exceder el 99%",
        event
      );
      break;
    case this.value < 0:
      errorMsg("priceError", "Solo números positivos", event);
      break;
    default:
      this.classList.add("input_valid");
      break;
  }
});

inputDiscount.addEventListener("focus", function (event) {
  errorClean("discountError", event);
});

/* input Specifications */

inputSpecifications.addEventListener("blur", function (event) {
    switch (true) {
      case !this.value:
        errorMsg(
          "specificationsError",
          "Debes ingresar las especificaciones para el producto",
          event
        );
        break;
      case this.value.trim().length < 20 || this.value.trim().length > 500:
        errorMsg(
          "specificationsError",
          "las especificaciones deben tener como minimo 20 caracteres y un maximo de 500",
          event
        );
        break;
      default:
        this.classList.add("input_valid");
        break;
    }
  });
  
  inputSpecifications.addEventListener("focus", function (event) {
    errorClean("specificationsError", event);
  });

  /* input Categories */
  
  inputCategories.addEventListener('change', function (event) {
    if (!this.value) {
      errorMsg('categoriesError', "Debes seleccionar al menos una categoria que pertenece el producto", event)
    } else {
      this.classList.add('input_valid')
    }
  })

  inputCategories.addEventListener('focus', function (event) {
    errorClean('categoriesError', event)
  })

    /* input Gama */
  
    inputGama.addEventListener('blur', function (event) {
        if (!this.value) {
          errorMsg('gamaError', "Debes seleccionar a que gama pertenece el producto", event)
        } else {
          this.classList.add('input_valid')
        }
      })
    
      inputGama.addEventListener('focus', function (event) {
        errorClean('gamaError', event)
      })
    
          /* input Brands */
  
    inputBrand.addEventListener('blur', function (event) {
        if (!this.value) {
          errorMsg('brandError', "Debes seleccionar a que marca pertenece el producto", event)
        } else {
          this.classList.add('input_valid')
        }
      })
    
      inputBrand.addEventListener('focus', function (event) {
        errorClean('brandError', event)
      })

      /* input Images */

      const regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;

      inputImages.addEventListener("change", function (event) {
        switch (true) {
          case !regExExt.exec(this.value):
            errorMsg(
              "imagesError",
              "Solo se admiten imágenes jpg | jpeg | png | gif | webp",
              event
            );
            break;
          default:
            errorClean("imagesError",event)
            break;
        }
      });

      /* Form */

      formEdit.addEventListener('submit',function (event) {
        
        event.preventDefault();

        let error = false

        for (let i = 0; i < this.elements.length - 1; i++) {
          
          if(!this.elements[i].value || this.elements[i].classList.contains('input_invalid')){
            error = true
          }
          
        }

        if (!error) {
          this.submit()
        }else{
          for (let i = 0; i < this.elements.length - 1; i++) {
            !this.elements[i].value && this.elements[i].classList.add('input_invalid')
          }
          $('formError').innerHTML = "Todos los campos son obligatorios."
        }
      })