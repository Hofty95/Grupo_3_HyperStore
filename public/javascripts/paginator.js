const $ = (element) => document.querySelector(element);

const btnPrev = $("#btn-prev");
const btnNext = $("#btn-next");
const containerItemsPage = $("#container-items-page");
const containerProductsCard = $("#container-products-card");
let pageActive = 1;
const apiGetProduct = "http://localhost:3000/api/product/results";

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const getProducts = async ({ page = 1 } = {}) => {
  const res = await fetch(`${apiGetProduct}?page=${page}`);
  return await res.json();
};

const paintProducts = (products) => {
  containerProductsCard.innerHTML = "";
  products.forEach(({ id, images, price, name }) => {
    const template = `
<div class="col-12 col-sm-6 col-lg-3">
  <section class="product-box">
    <figure class="product-box_image">
      <a href="/product/detalle/${id}"><img src="/images/Productos-img/${
      images.length ? images[0].name : "default-image.jpg"
    }" alt="..."></a>
    </figure>
    <article class="product-box_data">
      <h2>$ ${toThousand(price)}</h2>
      <p>
        ${name} 
      </p>
      <span>Envío Gratis</span>
    </article>
    </a>
  </section>
</div>
`;

   containerProductsCard.innerHTML += template
  });
};

const getPage = async (page) =>{
  pageActive = page;

    const {
        data: { pages, currentPage, products },
      } = await getProducts({ page });
    
      paintProducts(products);
      paintItemPages({numberPages : pages, itemActive : currentPage });
      statusPrevAndNext({ currentPage, pages})

}

const paintItemPages = ({numberPages, itemActive}) =>{
    containerItemsPage.innerHTML = ''
    for (let i = 1; i <= numberPages; i++) {
        containerItemsPage.innerHTML += `
        <li class="page-item ${itemActive === i && 'active'}">
        <a class="page-link" href="#" onclick="getPage(${i})">${i}</a></li>
        `
    }
}


const statusPrevAndNext = ({ currentPage, pages }) =>{
  if(currentPage === pages){
    btnNext.hidden = true;
  }else{
    btnNext.hidden = false;
  }

  if(currentPage === 1){
    btnPrev.hidden = true;
  }else{
    btnPrev.hidden = false;
  }
}


window.addEventListener("load", async (e) => {
  try {
    const {
      data: { pages, currentPage, products },
    } = await getProducts();

    paintProducts(products);
    paintItemPages({numberPages : pages, itemActive : currentPage });
    statusPrevAndNext({ currentPage, pages })

  } catch (error) {
    console.log(error);
  }
});


const handlerEventPrevNext = (btnElement, {isNext = false}= {}) =>{
  btnElement.addEventListener('click',async(e)=>{
    try {
      const {
        data: { pages, currentPage, products },
      } = await getProducts({ page : isNext ? ++pageActive : --pageActive });
  
      paintProducts(products);
      paintItemPages({numberPages : pages, itemActive : currentPage });
      statusPrevAndNext({ currentPage, pages})
  
  
    } catch (error) {
      console.log(error);
    }
  })  
}

handlerEventPrevNext(btnNext,{ isNext : true })
handlerEventPrevNext(btnPrev)

