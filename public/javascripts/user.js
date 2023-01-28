/* const label = document.querySelector('.label__general')
const input = document.querySelector('.input__general')

input.addEventListener('blur',() => {
  if(input.value){
    label.style.display = "none"
  }else{
    label.style.display = "block"
  }qqqqqqq
});
 */
/* const labels = document.querySelectorAll(".label__general");
const inputs = document.querySelectorAll(".input__general");

const labelsArray = Array.from(labels);
const inputsArray = Array.from(inputs);

inputsArray.forEach((input) => {
  labelsArray.forEach((label) => {
    input.addEventListener("blur", () => {
      if (input.value) {
        label.style.display = "none";
      } else {
        label.style.display = "block";
      }
    });
    });
}); */

const labels = document.querySelectorAll(".label__general");
const inputs = document.querySelectorAll(".input__general")

  const labelsArray = Array.from(labels);
const inputsArray = Array.from(inputs);

inputsArray.forEach((input) => {
  labelsArray.forEach((label) => {
    console.log(label);
    input.addEventListener("blur", () => {
      if (input.value && input.id === label.htmlFor) {
        label.style.display = "none";
      } 
      
      if(!input.value && input.id === label.htmlFor){
        label.style.display = "block";
      }
    });
    });
});