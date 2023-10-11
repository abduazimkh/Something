const cardsWrapper = document.querySelector(".most-see-product");

// let a = ['https://dummyjson.com/products', 'https://fakestoreapi.com/products']

// let b = a.Math.trunc([Math.random() * a.length])

fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>{
        renderData(data.products)
    })

function renderData(data){
    const cardsFragment = document.createDocumentFragment();
    data.forEach((el, i) => {
        console.log(el);
        const div = document.createElement("div")
        div.classList = "most-see-product-item"

        div.innerHTML = `
            <a href="../pages/card.html?cardId=${i}">
                <img src="${el.images[0]}"  alt="image" />
            </a>
            <div class="most-card-item">
                <strong>$${el.price}</strong>
                <p>${el.title.slice(0,20)}</p>
                <p>${el.stock}</p>
                
                <button>Sotib olish</button>
            </div>

        `;
        cardsFragment.appendChild(div)
    })
    cardsWrapper.appendChild(cardsFragment)
}
