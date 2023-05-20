let checkbox = document.getElementById('checkitem');

if (localStorage.getItem('modoLuz') === 'true') {
  checkbox.checked = true;
  enableLightMode();
}

checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    enableLightMode();
    guardarPreferenciaModoLuz(true);
  } else {
    disableLightMode();
    guardarPreferenciaModoLuz(false);
  }
});

function enableLightMode() {
  let main_body = document.body;
  main_body.classList.add('light-mode');
}

function disableLightMode() {
  let main_body = document.body;
  main_body.classList.remove('light-mode');
}

function guardarPreferenciaModoLuz(preferencia) {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('modoLuz', preferencia);
  } else {
    console.log('El navegador no admite almacenamiento web.');
  }
}