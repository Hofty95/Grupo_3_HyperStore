
const $ = (id) => document.getElementById(id);

const msgError = (element, message, { target }) => {
    $(element).innerHTML = message;
    target.classList.add("input_invalid");
};
  
  const cleanError = (element, { target }) => {
    target.classList.remove("input_invalid");
    target.classList.remove("input_valid");
    $(element).innerHTML = null;
  };


let regExLetter = /^[A-Z]+$/i;
let regExEmail = /^[\w.-]+@[\w.-]+\.[\w.-]+$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/; //mayuscula, numero y 6 a 12 caracteres
let regExPass2 =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_-])[A-Za-z\d$@$!%*?&_-]{6,12}/;


$('name').addEventListener('blur',function(e){
 switch (true) {
    case !this.value.trim():
        msgError('errorName','El nombre es obligatorio',e)
        break;
    case this.value.trim().length < 2 || this.value.trim().length > 50:
        msgError('errorName','Minimo entre 2 y 50 carcateres',e)
        break;
    case !regExLetter.test(this.value.trim()):
        msgError('errorName','Solo caracteres alfabeticos',e)
        break;    
 
    default:
        this.classList.add('input_valid')
        break;
 }
})

$('name').addEventListener('focus',function(e){
    cleanError('errorName',e)
})


$('surname').addEventListener('blur',function(e){
    switch (true) {
       case !this.value.trim():
           msgError('errorSurname','El apellido es obligatorio',e)
           break;
       case this.value.trim().length < 2 || this.value.trim().length > 50:
           msgError('errorSurname','',e)
           break;
       case !regExLetter.test(this.value.trim()):
           msgError('errorSurname','Solo caracteres alfabeticos',e)
           break;    
    
       default:
           this.classList.add('input_valid')
           break;
    }
   })
   
   $('surname').addEventListener('focus',function(e){
       cleanError('errorSurname',e)
   })

   $('email').addEventListener('blur',function(e){
    switch (true) {
       case !this.value.trim():
           msgError('errorEmail','El email es obligatorio',e)
           break;
       case !regExEmail.test(this.value.trim()):
           msgError('errorEmail','Tiene que ser un email valido',e)
           break;    
    
       default:
           this.classList.add('input_valid')
           break;
    }
   })
   
   $('email').addEventListener('focus',function(e){
       cleanError('errorEmail',e)
   })


   $('password').addEventListener('blur',function(e){
    $('msgPassword').hidden = true
    switch (true) {
       case !this.value.trim():
           msgError('errorPassword','La contraseña es obligatoria',e)
           break;
       case !regExPass2.test(this.value.trim()):
           msgError('errorPassword',"Debe tener entre 6 y 12 caracteres \n tener una mayuscula, \n una minuscula,  \n un numero",e)
           break;    
       default:
           this.classList.add('input_valid')
           break;
    }
   })
   $('password').addEventListener('focus',function(e){
       cleanError('errorPassword',e);
       $('msgPassword').hidden = false;
   })

const exRegs = {
    exRegMayu: /[A-Z]/,
    exRegMinu: /[a-z]/,
    exRegNum: /[0-9]/,
    exRegEsp: /[$@!%*?&_-]/,
}

const validPassword = (element,exReg,value) =>{
    if(!exReg.test(value)){
        $(element).classList.add('text_danger');
    }else{        
        $(element).classList.add('text_sucess');
        $(element).classList.remove('text_danger');
    }
}

$('password').addEventListener('keyup',function(){
    validPassword("mayuscula", exRegs.exRegMayu, this.value);
    validPassword("minuscula", exRegs.exRegMinu, this.value);
    validPassword("number", exRegs.exRegNum, this.value);
    validPassword("special", exRegs.exRegEsp, this.value);
})

   
   $('password2').addEventListener('blur',function(e){
    switch (true) {
       case !this.value.trim():
           msgError('errorPassword2','Debes confimar la contraseña',e)
           break;
       case this.value.trim() !== $('password').value.trim():
           msgError('errorPassword2','La confirmacion no coincdide',e)
           break;    
       default:
           this.classList.add('input_valid')
           break;
    }
   })
   
   $('password2').addEventListener('focus',function(e){
       cleanError('errorPassword2',e)
   })


   $('form-register').addEventListener('submit',function(e){
    e.preventDefault();
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

