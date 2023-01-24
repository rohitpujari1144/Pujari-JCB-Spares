// new product upload validation start
const productNameInput=document.getElementById('productNameInput')
const manufacturerInput=document.getElementById('manufacturerInput')
const modelInput=document.getElementById('modelInput')
const priceInput=document.getElementById('priceInput')
const deliveryChargesInput=document.getElementById('deliveryChargesInput')
const productPhoto=document.getElementById('productPhoto')
const quantityInput=document.getElementById('quantityInput')
const materialInput=document.getElementById('materialInput')
const lengthInput=document.getElementById('lengthInput')
const addProductDiv=document.getElementById('addProductDiv')

const productNameError=document.getElementById('productNameError')
const manufacturerError=document.getElementById('manufacturerError')
const modelError=document.getElementById('modelError')
const priceError=document.getElementById('priceError')
const deliveryChargesError=document.getElementById('deliveryChargesError')
const productPhotoError=document.getElementById('productPhotoError')

function navBarAddProductButtonClick(){
    addProductDiv.removeAttribute('style')
    document.getElementById('mainDivOne').style='filter:blur(2px)'
    document.getElementById('navbar').style='filter:blur(2px)'
}

function addProductButtonClick(){
    console.log('addProductButtonClick function invoked')

    if(productNameInput.value==''){
        productNameError.innerText='*Please enter product name'
    }
    else{
        productNameError.innerText=''
    }
    if(manufacturerInput.value==''){
        manufacturerError.innerText='*Please enter manufacturer name'
    }
    else{
        manufacturerError.innerText=''
    }
    if(modelInput.value==''){
        modelError.innerText='*Please enter model name'
    }
    else{
        modelError.innerText=''
    }
    if(priceInput.value==''){
        priceError.innerText='*Please enter price'
    }
    else{
        priceError.innerText=''
    }
    if(deliveryChargesInput.value==''){
        deliveryChargesError.innerText='*Please enter delivery charges'
    }
    else{
        deliveryChargesError.innerText=''
    }
    if(productPhoto.value==''){
        productPhotoError.innerText='*Please upload product photo'
    }
    else{
        productPhotoError.innerText=''  
    }
    if(productNameError.innerText=='' && manufacturerError.innerText=='' && modelError.innerText=='' && priceError.innerText=='' && deliveryChargesError.innerText=='' && productPhotoError.innerText==''){
        alert('Product successfully added !')
        productNameInput.value=''
        manufacturerInput.value=''
        quantityInput.value=''
        materialInput.value=''
        lengthInput.value=''
        modelInput.value=''
        priceInput.value=''
        deliveryChargesInput.value=''
        productPhoto.value=''
    }
}

function productNameValidate(){
    console.log('productNameValidate function invoked')

    if(productNameInput.value==''){
        productNameError.innerText='*Please enter product name'
    }
    else if(!isNaN(productNameInput.value)){
        productNameError.innerText='*Please use only characters'
    }
    else if(productNameInput.value.length<3){
        productNameError.innerText='*Please enter a valid product name'
    }
    else{
        productNameError.innerText=''
    }
}

function manufacturerValidate(){
    console.log('manufacturerValidate function invoked')

    if(manufacturerInput.value==''){
        manufacturerError.innerText='*Please enter manufacturer name'
    }
    else if(!isNaN(manufacturerInput.value)){
        manufacturerError.innerText='*Please use only characters'
    }
    else if(manufacturerInput.value.length<2){
        manufacturerError.innerText='*Please enter a valid manufacturer name'
    }
    else{
        manufacturerError.innerText=''
    }
}

function modelValidate(){
    console.log('modelValidate function invoked')

    if(modelInput.value==''){
        modelError.innerText='*Please enter model name'
    }
    else if(!isNaN(modelInput.value)){
        modelError.innerText='*Please use only characters'
    }
    else if(modelInput.value.length<3){
        modelError.innerText='*Please enter a valid model name'
    }
    else{
        modelError.innerText=''
    }
}

function priceValidate(){
    console.log('priceValidate function invoked')

    if(priceInput.value==''){
        priceError.innerText='*Please enter price'
    }
    else if(isNaN(priceInput.value)){
        priceError.innerText='*Please use only numbers'
    }
    else if(priceInput.value.length<2){
        priceError.innerText='*Please enter a valid price'
    }
    else{
        priceError.innerText=''
    }
}

function deliveryChargesValidate(){
    console.log('deliveryChargesValidate function invoked')

    if(deliveryChargesInput.value==''){
        deliveryChargesError.innerText='*Please enter delivery charges'
    }
    else if(isNaN(deliveryChargesInput.value)){
        deliveryChargesError.innerText='*Please use only numbers'
    }
    else{
        deliveryChargesError.innerText=''
    }
}

function productPhotoUploadButtonClick(){
    console.log('productPhotoUploadButtonClick function invoked')

    if(productPhoto.value==''){
        productPhotoError.innerText='*Please upload product photo'
    }
    else{
        productPhotoError.innerText=''
        alert('Photo successfully uploaded !')
    }
}

function addProductPageCrossMarkClick(){
    console.log('addProductPageCrossMarkClick function invoked')
    document.getElementById('addProductDiv').style='display:none'
    document.getElementById('mainDivOne').removeAttribute('style')
    document.getElementById('navbar').removeAttribute('style')
}
// new product upload validation end














