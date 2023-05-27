const formDeleteList = document.querySelectorAll('.form-delete');
const userDeleteForms = document.querySelectorAll('.user-delete-form');

formDeleteList.forEach(form => {
  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const currentForm = event.target;

      Swal.fire({
          title: '¿Estás seguro de eliminar este producto?',
          text: 'Esta acción no se puede revertir.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#7F00FF',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, elimínalo',
          cancelButtonText: 'Cancelar'
      }).then((result) => {
          if (result.isConfirmed) {
              currentForm.submit();
          }
      });
  });
});

userDeleteForms.forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const currentForm = event.target;

        Swal.fire({
            title: '¿Estás seguro de eliminar este usuario?',
            text: "Esta acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7F00FF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimínalo!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                currentForm.submit();
            }
        });
    });
});

console.log(userDeleteForms)