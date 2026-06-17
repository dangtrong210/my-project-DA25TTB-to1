function printBCC(num)
{
    let result = "";
    let i = 1;
    while(i<=10)
    {
        result += `${num} x ${i} = ${num*i} <br>`; 
        i++;
    }
    document.getElementById("result").innerHTML = result;
}

function tinhtien()
{
    const soluong = document.getElementsByClassName("soluong");
    const dongia = document.getElementsByClassName("dongia");
    const thanhtien = document.getElementsByClassName("thanhtien");
    let i = 0, thanhtoan=0; 
    while(i<soluong.length)
    {
        thanhtien[i].innerHTML=Number(dongia[i].innerHTML)*Number(soluong[i].innerHTML); 
        thanhtoan+=Number(thanhtien[i].innerHTML);
        i++;
    }
    document.getElementById("thanhtoan").innerHTML = thanhtoan;
}
tinhtien();


function create(obj){
    const item=document.createElement("div");
    item.setAttribute("class","card product-item");
    const img=document.createElement("div");
    img.setAttribute("class","ratio ratio-1x1 product-img");
    const info=document.createElement("div");
    info.setAttribute("class","card-body product-info");

    item.appendChild(card);
    item.innerHTML+=`
        <div class ="ratio ratio-1x1 product-img" >
            <img class="image" src="${obj.image}" alt="Banh mi" style="object-fit:cover;" >
        </div>
        <div class ="card-body product-info">
            <h4 class="name">${obj.name}</h4>
            <h5 class="price">Gia: ${obj.price}</h5>
            <p class="description">Gom: ${obj.description}</p>
            <a class="link"  href="#">Xem chi tiet san pham</a>
        </div>
    `;
    document.getElementById("product-list").appendChild(item);
}


/* 
<div class ="row row-cols-1 row-cols-md-4 g-4 product-list">
    <div class="card product-item">
        <div class ="ratio ratio-1x1 product-img" >
            <img class="image" src="../assets/image/banhmi.jfif" alt="Banh mi" style="object-fit:cover;" >
        </div>
        <div class ="card-body product-info">
            <h4 class="name">Banh mi</h4>
            <h5 class="price">Gia: 15000</h5>
            <p class="description">Gom: thit, rau, ...</p>
            <a class="link"  href="#">Xem chi tiet san pham</a>
        </div>
    </div>
</div>
*/