const cardsWrapper = document.querySelector(".most-see-product");


fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
        renderData(data)
    })

function renderData(data){
    const cardsFragment = document.createDocumentFragment();
    data.forEach(el => {
        console.log(el);
        const div = document.createElement("div")
        div.classList = "most-see-product-item"

        div.innerHTML = `
            <img src="${el.image}"  alt="image" />
            <div class="most-card-item">
                <strong>$${el.price}</strong>
                <p>${el.title.slice(0,20)}</p>
                <p>${el.rating.count}</p>
                
                <button>Sotib olish</button>
            </div>

        `;
        cardsFragment.appendChild(div)
    })
    cardsWrapper.appendChild(cardsFragment)
}
