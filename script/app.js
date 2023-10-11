const cardsWrapper = document.querySelector(".most-see-product");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    renderData(data.products);
  });

function renderData(data) {
  const cardsFragment = document.createDocumentFragment();
  data.forEach((el) => {
    console.log(el);
    const div = document.createElement("div");
    div.classList = "most-see-product-item";

    div.innerHTML = `
            <img src="${el.image[0]}"  alt="image" />
            <div class="most-card-item">
                <strong>$${el.price}</strong>
                <p>${el.title}</p>
                <p>${el.stock}</p>
                
                <button>Sotib olish</button>
            </div>

        `;
    cardsFragment.appendChild(div);
  });
  cardsWrapper.appendChild(cardsFragment);
}
