const cardsContainer = document.querySelector("#cards-container");
const URL_API_SERVER = "http://localhost:3000/api";

const getFavorites = async () => {
  return fetch(`${URL_API_SERVER}/favorites`).then((res) => res.json());
};
const convertFormatPeso = (n) =>
  n.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

const paintProducts = ({ products }) => {
  cardsContainer.innerHTML = "";

  if (products.length) {
    products.forEach(({ name, id, price, discount, images }) => {
      const priceWithDiscount = discount
        ? price - (price * discount) / 100
        : price;
      const priceFormatARG = convertFormatPeso(priceWithDiscount);
      const template = `
           <div class="col-12 col-sm-6 col-lg-3">
           <section class="product-box">
             <figure class="product-box_image">
               <a href="/product/detalle/${id}">
               <img src="/images/Productos-img/${images[0].name
               }" alt="...">
               </a>
             </figure>
             <article class="product-box_data">
             <p class="card-text">${priceFormatARG}${
        discount ? `<span class="text-danger mx-3">${discount}% OFF</span>` : ""
      }</p>
               <p>
                ${name}
               </p>
               <div class="product-box_data_content d-flex justify-content-between w-100">
               <span>Envío Gratis</span>
               <button>
                  <i class="fas fa-star" style="color: #7809d3;" cursor:pointer onclick="toggleFavorite(${id})"></i>
               </button>           
              </div>
             </article>
             </a>
           </section>
         </div>
            `;

      cardsContainer.innerHTML += template;
    });
    return;
  }

  cardsContainer.innerHTML = "<h1>No existen productos en favoritos</h1>";
};

window.addEventListener("load", async () => {
  try {
    const { ok, data } = await getFavorites();
    if (ok) {
      paintProducts({ products: data });
    }
  } catch (error) {
    console.log(error);
  }
});

const toggleFavorite = async (id) => {
  try {
    const result = await Swal.fire({
      title: "¿Quieres quitar el producto de favoritos?",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Quitar",
    });

    if (result.isConfirmed) {

      const objProductId = {
        productId: id,
      };

      const { ok } = await fetch(`${URL_API_SERVER}/favorites/toggle`, {
        method: "POST",
        body: JSON.stringify(objProductId),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      if(ok){
        const { ok, data } = await getFavorites();
        ok && paintProducts({ products : data}) 
      }

    }

  } catch (error) {
    console.log(error);
  }
};
