const products = document.querySelector(".products")
const container = document.querySelector('.prod')
const createbtn = document.querySelector("#createbtn")
const imgurl = document.querySelector(".img-url")
const productname = document.querySelector(".product-name")
const productcategory = document.querySelector(".product-category")
const productcost = document.querySelector(".product-cost")

const productsData = []

function addetNewProd() {
    let producData = {
        imgurl: imgurl.value,
        productname: productname.value,
        productcategory: productcategory.value,
        productcost: productcost.value
    }

    productsData.push(producData)
    imgurl.value = ""
    productname.value = ""
    productcategory.value = ""
    productcost.value = ""
  
    // console.log(prod);
    newHtmlData()
}

function remove(id){
    // console.log(productsData[id]);
    delete productsData[id]
    newHtmlData()
}

function newHtmlData () {
    const prod = productsData?.map((items, i) => {
        return `<div key="${i}" class="products">
        <div class="product-inform">
        <img src="${items.imgurl}" alt="">
        <div class="product-about">
        <h2>${items.productname}</h2>
        <p>Category: <span>${items.productcategory}</span></p>
        </div>
        </div>
        <div class="product-action">
        <h2 class="cost">$ ${items.productcost}</h2>
        <h2 class="quantity">3</h2>
        <i class="fa-solid fa-trash" onclick="remove(${i})"></i>
        </div>
        </div>`
    }).join("")
    container.innerHTML = prod
}
