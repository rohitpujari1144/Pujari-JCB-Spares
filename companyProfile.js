function showNavbarDiv() {
    // console.log('showNavbarDiv invoked');
    document.getElementById('navbarDiv').innerHTML =
        `<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" id="navbar">
            <div class="container-fluid" id="navbarElem">
                <a class="navbar-brand companyHeading" style="margin-right:0%; padding:0%">PUJARI JCB SPARES</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link addProductButton" onclick='addProductClick()'>Add Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link logOutButton" onclick='logoutClick()'>Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`
}
showNavbarDiv()

function showNewOrderDiv() {
    // console.log('showNewOrderDiv invoked');
    document.getElementById('newOrderDiv').innerHTML =
        `<div class='newOrders'>
            <h3 class="heading">New Orders</h3>
        </div> 
        <div class="container tableDiv" >
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Product Name</th>
                        <th>Number of Items</th>
                        <th>Product Ordered Date</th>
                        <th>Expected Delivery Date</th>
                        <th>Price/Item</th>
                        <th>Payable Price</th>
                        <th>Payment Mode</th>
                        <th>Delivery Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody id='tableBody'>
                        <tr>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                        </tr>
                    </tbody>
            </table>
        </div>`
}
showNewOrderDiv()

function showDeliveredOrderDiv() {
    // console.log('showNewOrderDiv invoked');
    document.getElementById('deliveredOrderDiv').innerHTML =
        `<div class='newOrders'>
            <h3 class="heading">Delivered Orders</h3>
        </div>
        <div class="container tableDiv">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Product Name</th>
                        <th>Number of Items</th>
                        <th>Product Ordered Date</th>
                        <th>Expected Delivery Date</th>
                        <th>Price/Item</th>
                        <th>Payable Price</th>
                        <th>Payment Mode</th>
                        <th>Delivery Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id='tableBody'>
                    <tr>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr><tr>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr>
                </tbody>
            </table>
        </div>`
}
showDeliveredOrderDiv()

function showAllProductsDiv() {
    // console.log('showAllProductsDiv invoked');
    fetch('https://63c91acb320a0c4c9540abbc.mockapi.io/product_information')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((elem) => {
                document.getElementById('productsDiv').innerHTML +=
                    `
                        <div class="card m-3 productInfoDiv">
                            <img src='./${elem.productImage}' class="card-img-top" alt="Hydraulic Cylinder Seal Kit" style="border-radius: 7px;">
                            <div class="card-body">
                                <h5 class="card-title">${elem.productName}</h5>
                            </div>
                            <ul class="list-group list-group-flush" >
                                <li class="list-group-item">Manufacturer : ${elem.productManufacturer}</li>
                                <li class="list-group-item">Material : ${elem.productMaterial}</li>
                                <li class="list-group-item">Model : ${elem.productModel}</li>
                                <li class="list-group-item">Quantity : ${elem.productQuantity}</li>
                                <li class="list-group-item">Length : ${elem.productLength}</li>
                                <li class="list-group-item">Price : ${elem.productPrice}</li>
                            </ul>
                            <div class='m-2' style="text-align:center;"> 
                                <i class="fa-regular fa-pen-to-square editButton" style='margin-right:20px' onclick='editButtonClick(${elem.productId})'></i>
                                <i class="fa-regular fa-trash-can deleteButton" onclick='deleteButtonClick(${elem.productId})'></i>
                            </div>
                        </div>
                    `
            })
        })
}
showAllProductsDiv()

// add product start
function addProductClick() {
    // console.log('addProductClick invoked');
    document.getElementById('mainDiv').style = 'filter:blur(3px)'
    document.getElementById('addProduct').removeAttribute('style')
    document.getElementById('addProduct').innerHTML =
        `<div class="container addProductDiv">
            <div class="row">
                <div class='col'>
                    <h4 class='addProduct'>Add Product</h4>
                </div>
                <div class='col' style='position:relative; left:43%; margin-top:7px'>
                    <i class="fa-regular fa-circle-xmark" onclick='addProductCrossClick()'></i>
                </div>
            </div>
            <div class="row">
                <div class='col addProductPhotoDiv'>
                    <img id='addProductImage' width="100%" height="100%" alt="Product Image" style='border-radius:6px'>
                </div>
                <div class='col' style='margin-top:10px; margin-right:25px'>
                    <div class="input-group">
                        <input type="file" class="form-control" id="productImageInput"
                            aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                        <button class="btn btn-secondary" type="button" id="inputGroupFileAddon04"
                            onclick='uploadImageClick()'>Upload Image</button>
                    </div>
                </div>
            </div>
            <div style='background-color:white; border-radius:6px; margin:20px'>
                <div class="row m-2">
                    <div class="col">
                        <label for="addProductNameInput" class="form-label">Product Name</label>
                        <input type="text" class="form-control" id="addProductNameInput" aria-describedby="emailHelp"
                            autocomplete="off" onkeyup='addProductNameValidate()'>
                        <span id="addProductNameError" style="color: red;"></span>
                    </div>
                    <div class="col">
                        <label for="addProductManufacturerInput" class="form-label">Manufacturer</label>
                        <input type="text" class="form-control" id="addProductManufacturerInput"
                            aria-describedby="emailHelp" autocomplete="off" onkeyup='addProductManufacturerValidate()'>
                        <span id="addProductManufacturerError" style="color: red;"></span>
                    </div>
                </div>
                <div class="row m-2">
                    <div class="col">
                        <label for="addProductMaterialInput" class="form-label">Material</label>
                        <input type="text" class="form-control" id="addProductMaterialInput"
                            aria-describedby="emailHelp" autocomplete="off" onkeyup='addProductMaterialValidate()'>
                        <span id="addProductMaterialError" style="color: red;"></span>
                    </div>
                    <div class="col">
                        <label for="addProductModelInput" class="form-label">Model</label>
                        <input type="text" class="form-control" id="addProductModelInput" aria-describedby="emailHelp"
                            onkeyup='addProductModelValidate()'>
                        <span id="addProductModelError" style="color: red;"></span>
                    </div>
                </div>
                <div class="row m-2">
                    <div class="col">
                        <label for="addProductQuantityInput" class="form-label">Quantity</label>
                        <input type="text" class="form-control" id="addProductQuantityInput"
                            aria-describedby="emailHelp" autocomplete="off" onkeyup='addProductQuantityValidate()'>
                        <span id="addProductQuantityError" style="color: red;"></span>
                    </div>
                    <div class="col">
                        <label for="addProductLengthInput" class="form-label">Length</label>
                        <input type="text" class="form-control" id="addProductLengthInput" aria-describedby="emailHelp"
                            autocomplete="off">
                        <span id="addProductLengthError" style="color: red;"></span>
                    </div>
                </div>
                <div class="row m-2">
                    <div>
                        <label for="addProductPriceInput" class="form-label">Price</label>
                        <input type="text" class="form-control" id="addProductPriceInput" aria-describedby="emailHelp"
                            autocomplete="off" onkeyup='addProductPriceValidate()'>
                        <span id="addProductPriceError" style="color: red;"></span>
                    </div>
                </div>
                <div style="text-align: center;">
                    <button class="btn btn-primary m-2" onclick="addProduct()">Add Product</button>
                </div>
            </div>
        </div>`
}

function uploadImageClick() {
    console.log('uploadImageClick invoked');
    console.log(document.getElementById('productImageInput').value);
    let newImage = document.getElementById('productImageInput').value
    document.getElementById('addProductImage').setAttribute('src', newImage)
}

function addProduct() {
    // console.log('addProductClick invoked');

    const addProductNameInput = document.getElementById('addProductNameInput')
    const addProductManufacturerInput = document.getElementById('addProductManufacturerInput')
    const addProductMaterialInput = document.getElementById('addProductMaterialInput')
    const addProductModelInput = document.getElementById('addProductModelInput')
    const addProductQuantityInput = document.getElementById('addProductQuantityInput')
    const addProductLengthInput = document.getElementById('addProductLengthInput')
    const addProductPriceInput = document.getElementById('addProductPriceInput')
    const addProductNameError = document.getElementById('addProductNameError')
    const addProductManufacturerError = document.getElementById('addProductManufacturerError')
    const addProductMaterialError = document.getElementById('addProductMaterialError')
    const addProductModelError = document.getElementById('addProductModelError')
    const addProductQuantityError = document.getElementById('addProductQuantityError')
    const addProductLengthError = document.getElementById('addProductLengthError')
    const addProductPriceError = document.getElementById('addProductPriceError')

    if (addProductNameInput.value == '') {
        addProductNameError.innerText = '*Please enter product name'
    }
    else {
        addProductNameError.innerText = ''
    }
    if (addProductManufacturerInput.value == '') {
        addProductManufacturerError.innerText = '*Please enter manufacturer name'
    }
    else {
        addProductManufacturerError.innerText = ''
    }
    if (addProductMaterialInput.value == '') {
        addProductMaterialError.innerText = '*Please enter material name'
    }
    else {
        addProductMaterialError.innerText = ''
    }
    if (addProductModelInput.value == '') {
        addProductModelError.innerText = '*Please enter JCB model for which product is sutaible'
    }
    else {
        addProductModelError.innerText = ''
    }
    if (addProductQuantityInput.value == '') {
        addProductQuantityError.innerText = `*Please enter quantity or enter 'NA'`
    }
    else {
        addProductQuantityError.innerText = ''
    }
    if (addProductLengthInput.value == '') {
        addProductLengthError.innerText = `*Please enter length or enter 'NA'`
    }
    else {
        addProductLengthError.innerText = ''
    }
    if (addProductPriceInput.value == '') {
        addProductPriceError.innerText = `*Please enter price`
    }
    else {
        addProductPriceError.innerText = ''
    }
    if (addProductNameError.innerText == '' && addProductManufacturerError.innerText == '' && addProductMaterialError.innerText == '' && addProductModelError.innerText == '' && addProductQuantityError.innerText == '' && addProductLengthError.innerText == '' && addProductPriceError.innerText == '') {

        fetch('https://63c91acb320a0c4c9540abbc.mockapi.io/product_information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProductDetails)
        })
            .then((response) => console.log(response))
            .then((newProductDetails) => {
                console.log('Success : ', newProductDetails);
                alert('New Product added successfully')
            })
            .catch((error) => {
                console.log('Error : ', error);
            })
    }
}

function addProductNameValidate() {
    // console.log('addProductNameValidate invoked');
    if (addProductNameInput.value == '') {
        addProductNameError.innerText = '*Please enter product name'
    }
    else if (!isNaN(addProductNameInput.value)) {
        addProductNameError.innerText = '*Please use characters only'
    }
    else if (addProductNameInput.value.length < 3) {
        addProductNameError.innerText = '*Please enter a valid product name'
    }
    else {
        addProductNameError.innerText = ''
    }
}

function addProductManufacturerValidate() {
    // console.log('addProductManufacturerValidate invoked');
    if (addProductManufacturerInput.value == '') {
        addProductManufacturerError.innerText = '*Please enter manufacturer name'
    }
    else if (!isNaN(addProductManufacturerInput.value)) {
        addProductManufacturerError.innerText = '*Please use characters only'
    }
    else if (addProductManufacturerInput.value.length < 3) {
        addProductManufacturerError.innerText = '*Please enter a valid manufacturer name'
    }
    else {
        addProductManufacturerError.innerText = ''
    }
}

function addProductMaterialValidate() {
    // console.log('addProductMaterialValidate invoked');
    if (addProductMaterialInput.value == '') {
        addProductMaterialError.innerText = '*Please enter material name'
    }
    else if (!isNaN(addProductMaterialInput.value)) {
        addProductMaterialError.innerText = '*Please use characters only'
    }
    else if (addProductMaterialInput.value.length < 3) {
        addProductMaterialError.innerText = '*Please enter a valid material name'
    }
    else {
        addProductMaterialError.innerText = ''
    }
}

function addProductModelValidate() {
    // console.log('addProductModelValidate invoked');
    if (addProductModelInput.value == '') {
        addProductModelError.innerText = '*Please enter model name'
    }
    else if (addProductModelInput.value.length < 2) {
        addProductModelError.innerText = '*Please enter JCB model for which product is sutaible'
    }
    else {
        addProductModelError.innerText = ''
    }
}

function addProductQuantityValidate() {
    // console.log('addProductQuantityValidate invoked');
    if (addProductQuantityInput.value == '') {
        addProductQuantityError.innerText = `*Please enter quantity or enter 'NA'`
    }
    else {
        addProductQuantityError.innerText = ''
    }
}

function addProductPriceValidate() {
    console.log('addProductPriceValidate invoked');
    if (addProductPriceInput.value == '') {
        addProductPriceError.innerText = '*Please enter model name'
    }
    else if (isNaN(addProductPriceInput.value)) {
        addProductPriceError.innerText = '*Please use numbers only'
    }
    else {
        addProductPriceError.innerText = ''
    }
}

function addProductCrossClick() {
    document.getElementById('addProduct').style = 'display:none'
    document.getElementById('mainDiv').removeAttribute('style')
}
// add product end

// edit product start
function editButtonClick(productId) {
    // console.log(productId);
    // console.log('editButtonClick invoked');

    fetch('https://63c91acb320a0c4c9540abbc.mockapi.io/product_information')
        .then((response) => response.json())
        .then((data) => {
            let newData = data.filter((e) => {
                return (e.productId == productId)
                // console.log(newData);
            })
            console.log(newData);
            sessionStorage.setItem('editProductInfo', JSON.stringify(newData))
            document.getElementById('mainDiv').style = 'filter:blur(3px)'
            document.getElementById('editProduct').removeAttribute('style')
            document.getElementById('editProduct').innerHTML =
                `<div class="container editProductDiv">
            <div class="row">
                <div class='col'>
                    <h4 class='editProductDetails'>Edit Product Details</h4>
                </div>
                <div class='col' style='position:relative; left:43%; margin-top:7px'>
                    <i class="fa-regular fa-circle-xmark" onclick='editProductCrossClick()'></i>
                </div>
            </div>
            <div class="row">
                <div class='col productPhotoDiv'>
                    <img id='productImage' src="${newData[0].productImage}" width="100%" height="100%" style='border-radius:6px'>
                </div>
                <div class='col' style='margin-top:10px; margin-right:25px'>
                    <div class="input-group">
                        <input type="file" class="form-control" id="productImageInput" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                        <button class="btn btn-secondary" type="button" id="inputGroupFileAddon04">Change Image</button>
                    </div>
                </div>
            </div>
            <div style='background-color:white; border-radius:6px; margin:20px'>
                <div class="row m-2">
                    <div class="col">
                        <label for="productNameInput" class="form-label">Product Name</label>
                        <input type="text" class="form-control" id="productNameInput" aria-describedby="emailHelp" value='${newData[0].productName}'
                            autocomplete="off" onkeyup='productNameValidate()'>
                        <span id="productNameError" style="color: red;"></span>
                    </div>
                    <div class="col">
                        <label for="manufacturerInput" class="form-label">Manufacturer</label>
                        <input type="text" class="form-control" id="manufacturerInput" aria-describedby="emailHelp" value='${newData[0].productManufacturer}'
                            autocomplete="off" onkeyup='manufacturerValidate()'>
                        <span id="manufacturerError" style="color: red;"></span>
                    </div>
                </div>
                <div class="row m-2">
                    <div class="col">
                        <label for="materialInput" class="form-label">Material</label>
                        <input type="text" class="form-control" id="materialInput" aria-describedby="emailHelp" value='${newData[0].productMaterial}'
                            autocomplete="off" onkeyup='materialValidate()'>
                        <span id="materialError" style="color: red;"></span>
                    </div>
                    <div class="col">
                        <label for="modelInput" class="form-label">Model</label>
                        <input type="text" class="form-control" id="modelInput" aria-describedby="emailHelp" autocomplete="off" value='${newData[0].productModel}' onkeyup='modelValidate()'>
                        <span id="modelError" style="color: red;"></span>
                    </div>
                </div>
                <div class="row m-2">
                    <div class="col">
                        <label for="quantityInput" class="form-label">Quantity</label>
                        <input type="text" class="form-control" id="quantityInput" aria-describedby="emailHelp" value='${newData[0].productQuantity}'
                            autocomplete="off">
                        <span id="quantityError" style="color: red;"></span>
                        </div>
                    <div class="col">
                        <label for="lengthInput" class="form-label">Length</label>
                        <input type="text" class="form-control" id="lengthInput" aria-describedby="emailHelp" value='${newData[0].productLength}'
                            autocomplete="off">
                        <span id="lengthError" style="color: red;"></span>
                    </div>
                </div>
                <div class="row m-2">
                    <div>
                        <label for="priceInput" class="form-label">Price</label>
                        <input type="text" class="form-control" id="priceInput" aria-describedby="emailHelp" autocomplete="off" value='${newData[0].productPrice}' onkeyup='priceValidate()'>
                        <span id="priceError" style="color: red;"></span>
                    </div>
                </div>
                <div style="text-align: center;">
                    <button class="btn btn-primary m-2" onclick='updateProductInfoClick()'>Update</button>
                </div>
            </div>
        </div>`
        })
}

function updateProductInfoClick() {
    // console.log('updateProductInfoClick invoked');

    const productNameInput = document.getElementById('productNameInput')
    const manufacturerInput = document.getElementById('manufacturerInput')
    const materialInput = document.getElementById('materialInput')
    const modelInput = document.getElementById('modelInput')
    const quantityInput = document.getElementById('quantityInput')
    const lengthInput = document.getElementById('lengthInput')
    const priceInput = document.getElementById('priceInput')
    const productNameError = document.getElementById('productNameError')
    const manufacturerError = document.getElementById('manufacturerError')
    const materialError = document.getElementById('materialError')
    const modelError = document.getElementById('modelError')
    const priceError = document.getElementById('priceError')

    const parseEditProductInfo = JSON.parse(sessionStorage.getItem('editProductInfo'))
    // console.log(parseEditProductInfo)

    if (productNameInput.value == '') {
        productNameError.innerText = '*Please enter product name'
    }
    else {
        productNameError.innerText = ''
    }
    if (manufacturerInput.value == '') {
        manufacturerError.innerText = '*Please enter manufacturer name'
    }
    else {
        manufacturerError.innerText = ''
    }
    if (materialInput.value == '') {
        materialError.innerText = '*Please enter material used'
    }
    else {
        materialError.innerText = ''
    }
    if (modelInput.value == '') {
        modelError.innerText = '*Please enter JCB model to whome the product is sutaible'
    }
    else {
        modelError.innerText = ''
    }
    if (quantityInput.value == '') {
        quantityError.innerText = `*Please enter quantity or enter 'NA'`
    }
    else {
        quantityError.innerText = ''
    }
    if (lengthInput.value == '') {
        lengthError.innerText = `*Please enter length or enter 'NA'`
    }
    else {
        lengthError.innerText = ''
    }
    if (priceInput.value == '') {
        priceError.innerText = '*Please enter price'
    }
    else {
        priceError.innerText = ''
    }
    if (productNameError.innerText == '' && manufacturerError.innerText == '' && materialError.innerText == '' && modelError.innerText == '' && quantityError.innerText == '' && lengthError.innerText == '' && priceError.innerText == '') {
        const updatedProductData = {
            productName: productNameInput.value,
            productManufacturer: manufacturerInput.value,
            productMaterial: materialInput.value,
            productModel: modelInput.value,
            productPrice: priceInput.value
        }
        fetch(`https://63c91acb320a0c4c9540abbc.mockapi.io/product_information/${parseEditProductInfo[0].productId}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updatedProductData)
        })
            .then(response => console.log(response))
            .then((updatedProductData) => {
                // console.log(updatedProductData);
                alert('Product Information Updated')
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

function productNameValidate() {
    // console.log('productNameValidate invoked');
    if (productNameInput.value == '') {
        productNameError.innerText = '*Please enter product name'
    }
    else if (productNameInput.value.length < 3) {
        productNameError.innerText = '*Please enter a valid product name'
    }
    else {
        productNameError.innerText = ''
    }
}

function manufacturerValidate() {
    // console.log('manufacturerValidate invoked');
    if (manufacturerInput.value == '') {
        manufacturerError.innerText = '*Please enter manufacturer name'
    }
    else if (manufacturerInput.value.length < 2) {
        manufacturerError.innerText = '*Please enter a valid manufacturer name'
    }
    else {
        manufacturerError.innerText = ''
    }
}

function materialValidate() {
    // console.log('materialValidate invoked');
    if (materialInput.value == '') {
        materialError.innerText = '*Please enter material used'
    }
    else if (materialInput.value.length < 3) {
        materialError.innerText = '*Please enter a valid material name'
    }
    else {
        materialError.innerText = ''
    }
}

function modelValidate() {
    // console.log('modelValidate invoked');
    if (modelInput.value == '') {
        modelError.innerText = '*Please enter JCB model to whome the product is sutaible'
    }
    else if (modelInput.value.length < 2) {
        modelError.innerText = '*Please enter a valid model name'
    }
    else {
        modelError.innerText = ''
    }
}

function priceValidate() {
    console.log('priceValidate invoked');
    if (priceInput.value == '') {
        priceError.innerText = '*Please enter price'
    }
    else if (isNaN(priceInput.value)) {
        priceError.innerText = '*Please use numbers only'
    }
    else {
        priceError.innerText = ''
    }
}

function editProductCrossClick() {
    // console.log('crossClick invoked');
    document.getElementById('editProduct').style = 'display:none'
    document.getElementById('mainDiv').removeAttribute('style')
}
// edit product end

function deleteButtonClick(productId) {
    // console.log('deleteButtonClick invoked');
    // console.log(productId);

    const deleteProductConfirmation = confirm('Do you want to delete the product ?')
    if (deleteProductConfirmation) {
        // fetch(`https://63c91acb320a0c4c9540abbc.mockapi.io/product_information/${productId}`, {
        //     method:'DELETE',
        // })
        alert('Product deleted successfully')
    }
}