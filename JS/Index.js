fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    let cards = '';

    for (let product of data) {
        cards += `<div class="col">
                    <div class="card h-100 shadow-sm rounded">
                        <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 200px; object-fit: contain;">
                        <div class="card-body">
                            <h5 class="card-title text-truncate">${product.title}</h5>
                            <p class="card-text text-truncate" style="max-height: 4.5em; overflow: hidden;">${product.description}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center bg-light">
                            <span class="text-primary fw-bold">L ${product.price.toFixed(2)}</span>
                            <small class="text-muted">${product.category}</small>
                        </div>
                    </div>
                </div>`;
    }

    cards += '</div>'

    document.getElementById("cardList").innerHTML = cards
})