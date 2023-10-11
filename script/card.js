const cardUrlId = +new URLSearchParams(location.search).get("cardId");
const wrapper = document.querySelector(".wrapper")


fetch(`https://dummyjson.com/products/${cardUrlId}`)
.then(res=> res.json())
.then(data=>{
    console.log(data);

    const div = document.createElement("div");
    div.className = "wrapper-item"
    div.innerHTML = `
        <img src="${data.images[0]}"  alt="image" />
        <div class="most-card-item">
            <h1>${data.title.toUpperCase()}</h1>
            <p>${data.brand.toUpperCase()}</p>
            <p>${data.description.toUpperCase()}</p>
            <strong>$${data.price}</strong>
            <p>${data.stock}</p>
            <p>${data.rating}</p>
            <p>${data.discountPercentage}</p>
            <a href="../index.html">
                <button>Bosh sahifaga qaytish</button>
            </a>
        </div>
    `;

    wrapper.appendChild(div)

})
