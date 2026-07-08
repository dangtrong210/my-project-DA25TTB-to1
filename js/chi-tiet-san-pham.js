function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
}

function showDetail(product) {
    const container = document.getElementById("detail-container");
    container.innerHTML = `
        <div class="detail-wrapper">
            <div class="detail-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="detail-info">
                <h2 class="detail-name">${product.name}</h2>
                <h4 class="detail-price">${product.price}</h4>
                <p class="detail-desc">${product.info}</p>
            </div>
        </div>
    `;
}

function createRelatedItem(obj, index) {
    const relatedList = document.getElementById("related-list");
    relatedList.innerHTML += `
        <div class="card product-item">
            <div class="ratio ratio-1x1 product-img">
                <img class="image" src="${obj.image}" alt="${obj.name}" style="object-fit:cover;">
            </div>
            <div class="card-body product-info">
                <h4 class="name">${obj.name}</h4>
                <h5 class="price">${obj.price}</h5>
                <p class="description">${obj.info}</p>
                <a class="link" href="chi-tiet-san-pham.html?id=${index}">Xem chi tiết sản phẩm</a>
            </div>
        </div>
    `;
}

function showRelated(currentId) {
    let i = 0;
    let count = 0;
    while (i < products.length && count < 4) {
        if (i != currentId) {
            createRelatedItem(products[i], i);
            count++;
        }
        i++;
    }
}

function initDetailPage() {
    const id = getProductId();
    if (isNaN(id) || id < 0 || id >= products.length) {
        document.getElementById("detail-container").innerHTML = "<p>Không tìm thấy sản phẩm</p>";
        return;
    }
    const product = products[id];
    showDetail(product);
    showRelated(id);
}

initDetailPage();
