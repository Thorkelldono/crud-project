var productNameInput= document.getElementById('productName');
var productPriceInput= document.getElementById('productPrice')
var productCatInput= document.getElementById('productCat')
var productDescInput= document.getElementById('productDesc')
var addBtn = document.getElementById('addBtn')
var inputs = document.getElementsByClassName('form-control')
var searchInput = document.getElementById('searchProduct')
currentIndex = 0;
var products = [];

if (JSON.parse(localStorage.getItem('productsList'))!=null){
    products=JSON.parse(localStorage.getItem('productsList'));
    displayProduct();
}


addBtn.onclick=function(){
    if(addBtn.innerHTML == 'add product'){
        addProduct();

    }else{
        updateProduct();
    }
displayProduct();
clearFrom();
} 
//ADD PRODUCT
function addProduct(){
    var product={
        pName:productNameInput.value,
        pPrice:productPriceInput.value,
        pCat:productCatInput.value,
        pDesc:productDescInput.value
    }
    products.push(product);
    localStorage.setItem('productsList', JSON.stringify(products))
}
//DISPLAY PRODUCT
function displayProduct(){
    var box='';
    for(var i=0;i<products.length;i++){

        box+=`<tr>
        <td>${products[i].pName}</td>
        <td>${products[i].pPrice}</td>
        <td>${products[i].pCat}</td>
        <td>${products[i].pDesc}</td>
        <td><button onclick="getProductInfo(${i})" class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`
    }
    document.getElementById('tableBody').innerHTML=box
}

//DELETE PRODUCT
function deleteProduct(index){
    products.splice(index,1)
    displayProduct();
localStorage.setItem('productsList', JSON.stringify(products))

}

////CLEAR FORM
function clearFrom(){
    for(var i =0;i<inputs.length;i++){
        inputs[i].value= ''
    }
}
 
//SEARCH PRODUCT
searchInput.onkeyup= function(){
    var box='';
    for(var i=0;i<products.length;i++){
        if(products[i].pName.toLowerCase().includes(searchInput.value.toLowerCase())){
            box+=`<tr>
            <td>${products[i].pName}</td>
            <td>${products[i].pPrice}</td>
            <td>${products[i].pCat}</td>
            <td>${products[i].pDesc}</td>
            <td><button onclick="getProductInfo(${i})" class="btn btn-warning">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
            </tr>` 
        }
    }
    document.getElementById('tableBody').innerHTML=box
}


//UPDATE PRODUCT
function getProductInfo(index){
    // console.log(products[index]);
    currentIndex= index;
    var currentProduct = products[index]
    productNameInput.value = currentProduct.pName
    productPriceInput.value = currentProduct.pPrice
    productCatInput.value = currentProduct.pCat
    productDescInput.value = currentProduct.pDesc
    addBtn.innerHTML = 'Update Product';
}


function updateProduct(){
    var product={
        pName:productNameInput.value,
        pPrice:productPriceInput.value,
        pCat:productCatInput.value,
        pDesc:productDescInput.value
    }
    products[currentIndex]=product
    localStorage.setItem('productsList', JSON.stringify(products))
    addBtn.innerHTML= 'add product';
}


//VALIDATION
let nameAlert = document.getElementById('nameAlert')
productNameInput.onkeyup = function(){
    let nameRegex = /^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9]*$/
            // let nameRegex = /^[a-zA-Z]{2,}( {0,1}[a-zA-Z]{2,}){0,}$/
    if (nameRegex.test(productNameInput.value)) {
        addBtn.removeAttribute('disabled');
        productNameInput.classList.add('is-valid');
        productNameInput.classList.remove('is-invalid');
        nameAlert.classList.add('d-none')
    } else {
        addBtn.disabled='true';
        productNameInput.classList.add('is-invalid');
        productNameInput.classList.remove('is-valid');
        nameAlert.classList.remove('d-none')
    }
    // console.log(nameRegex.test(productNameInput.value));
}

let priceAlert = document.getElementById('priceAlert')
productPriceInput.onkeyup = function(){
    let priceRegex = /^[1-9][0-9]{1,5}$/
    if (priceRegex.test(productPriceInput.value)) {
        addBtn.removeAttribute('disabled');
        productPriceInput.classList.add('is-valid');
        productPriceInput.classList.remove('is-invalid');
        priceAlert.classList.add('d-none')
    } else {
        addBtn.disabled='true';
        productPriceInput.classList.add('is-invalid');
        productPriceInput.classList.remove('is-valid');
        priceAlert.classList.remove('d-none')
    }
}

let catAlert = document.getElementById('catAlert')
productCatInput.onkeyup = function(){
    let catRegex = /^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9]*$/
    if (catRegex.test(productCatInput.value)) {
        addBtn.removeAttribute('disabled');
        productCatInput.classList.add('is-valid');
        productCatInput.classList.remove('is-invalid');
        catAlert.classList.add('d-none')
    } else {
        addBtn.disabled='true';
        productCatInput.classList.add('is-invalid');
        productCatInput.classList.remove('is-valid');
        catAlert.classList.remove('d-none')
    }
}

let descAlert = document.getElementById('descAlert')
productDescInput.onkeyup = function(){
    let descRegex = /^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9]*$/
    if (descRegex.test(productDescInput.value)) {
        addBtn.removeAttribute('disabled');
        productDescInput.classList.add('is-valid');
        productDescInput.classList.remove('is-invalid');
        descAlert.classList.add('d-none')
    } else {
        addBtn.disabled='true';
        productDescInput.classList.add('is-invalid');
        productDescInput.classList.remove('is-valid');
        descAlert.classList.remove('d-none')
    }
}