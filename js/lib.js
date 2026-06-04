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