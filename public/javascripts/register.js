
const $ = (id) => document.getElementById(id);

const msgError = (element, message, { target }) => {
    $(element).innerHTML = message;
    target.classList.add("is-invalid");
  };
  
  const cleanError = (element, { target }) => {
    target.classList.remove("is-invalid");
    target.classList.remove("is-valid");
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
        this.classList.add('is-valid')
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
           this.classList.add('is-valid')
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
           this.classList.add('is-valid')
           break;
    }
   })
   
   $('email').addEventListener('focus',function(e){
       cleanError('errorEmail',e)
   })


   $('password').addEventListener('blur',function(e){
    switch (true) {
       case !this.value.trim():
           msgError('errorPassword','La contraseña es obligatoria',e)
           break;
       case !regExPass2.test(this.value.trim()):
           msgError('errorPassword',"Debe tener entre 6 y 12 caracteres \n tener una mayuscula, \n una minuscula,  \n un numero",e)
           break;    
       default:
           this.classList.add('is-valid')
           break;
    }
   })
   $('password').addEventListener('focus',function(e){
       cleanError('errorPassword',e)
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
           this.classList.add('is-valid')
           break;
    }
   })
   
   $('password2').addEventListener('focus',function(e){
       cleanError('errorPassword2',e)
   })

console.log('hello world');