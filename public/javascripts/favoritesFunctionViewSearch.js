const userId = document.body.getAttribute('data-userId');

const URL_API_SERVER = "http://localhost:3000/api";
const toggleFavorite = async (id,{target}) => {
  try {
    if(!userId){
      await Swal.fire({
        title : 'Debes Iniciar Sesion',
        icon : 'info',
        timer : 1000,
        showConfirmButton : false,
      })
      location.href = '/user/login';
      return
    }

    const objProductId = {
      productId: id,
    };

    const {
      ok,
      data: { isRemove },
    } = await fetch(`${URL_API_SERVER}/favorites/toggle`, {
      method: "POST",
      body: JSON.stringify(objProductId),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if(!isRemove){
      target.classList.add('fas');
      target.classList.remove('far');
    }else{
      target.classList.add('far');
      target.classList.remove('fas');
    }

  } catch (error) {
    console.log(error);
  }
};