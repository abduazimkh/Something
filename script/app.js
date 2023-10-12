const cardsWrapper = document.querySelector(".most-see-product");

// let a = ['https://dummyjson.com/products', 'https://fakestoreapi.com/products']

// let b = a.Math.trunc([Math.random() * a.length])

const form = document.querySelector("#form"),
    searchInput = form.querySelector("#search"),
    searchButton = form.querySelector(".search-button");

// form.addEventListener("submit", (e) =>{
//     e.preventDefault();

//     if(searchInput.value){

//     }
// })

searchInput.addEventListener('input', (e) => {
        
    fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
    .then(res => res.json())
    .then(data => 
        {
            renderData(data)
        });


})



fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>{
        renderData(data.products)
})

function renderData(data){
    cardsWrapper.innerHTML = '';
    const cardsFragment = document.createDocumentFragment();
    data.forEach((el, i) => {
        // console.log(el);
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




// fetch('https://dummyjson.com/products/categories')
// .then(res => res.json())
// .then(data => console.log(data));