
var serviceList = [
    {
        list1: 'Hydraulic cylinder seal kits',
        list2: 'Control valve kit',
        list3: 'Centre joint kit',
        list4: 'Bucket seal kit',
        list5: 'Boom seal kit',
        list6: 'Arm seal kit',
        list7: 'Boom dipper hose',
        list8: 'Loader arm hose',
        list9: 'Bucket ram hose',
        list10: 'Bulk head hose',
        list11: 'Lift ram hose',
        list12: 'Slew ram hose',
        list13: 'Transmission oil plus',
        list14: 'HVI hydraulic oil',
        list15: 'Engine oil max',
        list16: 'Rear axle oil',
        list17: 'JCB grease',
        list18: 'Gear oil',
        list19: 'Hydraulic filters',
        list20: 'Fuel filters',
        list21: 'Oil filters',
        list22: 'Air filters',
        list23: 'Bucket side cutter teeth',
        list24: 'Bucket teeth',
        list25: 'Bushes',
        list26: 'Pivote Pins',
        list27: 'Annulus carrier',
        list28: 'Bearing'
    }
]

function displayServiceList() {
    document.getElementById('serviceList').innerHTML =
        `<ol>
        <li class="serviceTitle">JCB Seal Kits :</li>
            <ul>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list1}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list2}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list3}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list4}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list5}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list6}</a></li>
            </ul>
        <li class="serviceTitle mt-2">Hose Pipes :</li> 
            <ul>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list7}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list8}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list9}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list10}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list11}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list12}</a></li>
            </ul>
        <li class="serviceTitle mt-2">JCB Lubricants :</li>
            <ul>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list13}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list14}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list15}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list16}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list17}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list18}</a></li>
            </ul>
        <li class="serviceTitle mt-2">Filters :</li>
            <ul>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list19}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list20}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list21}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list22}</a></li>
            </ul>
        <li class="serviceTitle mt-2">Bucket Teeth :</li>
            <ul>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list23}</a></li>
                <li class="serviceParts hoverClass"><a  style="text-decoration: none;">${serviceList[0].list24}</a></li>
            </ul>
        <li class="serviceTitle mt-2">Wear Parts :</li>
            <ul>
                <li class="serviceParts hoverClass"><a style="text-decoration: none;">${serviceList[0].list25}</a></li>
                <li class="serviceParts hoverClass"><a style="text-decoration: none;">${serviceList[0].list26}</a></li>
                <li class="serviceParts hoverClass"><a style="text-decoration: none;">${serviceList[0].list27}</a></li>
                <li class="serviceParts hoverClass"><a style="text-decoration: none;">${serviceList[0].list28}</a></li>
            </ul>    
    </ol>`
}
displayServiceList()

var newInfo //

// function to display the products start
fetch('https://63c91acb320a0c4c9540abbc.mockapi.io/product_information')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((elem) => {
            document.getElementById('demoDivOne').innerHTML +=
                `
            <div class="card m-3 productDiv" id="hydraulicCylinderSealKit">
                <img src='./${elem.productImage}' class="card-img-top" alt="Hydraulic Cylinder Seal Kit" style="border-radius: 10px;">
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
                <div class='m-3' style="text-align:center"> 
                    <button class="btn btn-primary"   onclick='openProductOrderDiv(${elem.productId})'>Order</button>
                </div>
            </div>`
        })
    })
// function to display the products end


// function to order the product start
function openProductOrderDiv(id) {
    // console.log('openProductOrderDiv function invoked')
    document.getElementById('navbar').style = 'filter:blur(2px)'
    document.getElementById('mainDiv').style = 'filter:blur(2px)'
    document.getElementById('productOrderDiv').removeAttribute('style')

    fetch('https://63c91acb320a0c4c9540abbc.mockapi.io/product_information')
        .then((response) => response.json())
        .then((data) => {
            let productInformation = data.filter((e) => {
                return (e.productId == id)
            })
            newInfo = productInformation
            console.log(productInformation)
            sessionStorage.setItem('productInformation', JSON.stringify(productInformation))
            document.getElementById('productOrderDiv').innerHTML =
                `
                <i class="fa-regular fa-circle-xmark" onclick='productOrderDivCrossClick()'></i>
                <div style='display: flex; justify-content:space-evenly'>
                    <div class="productPhotoDiv m-5">
                        <img src="./${productInformation[0].productImage}" style="border-radius: 10px; width:100%; height:100%;" alt="${productInformation[0].productName}">
                    </div>
                    <div class="productInfoDiv m-5" style='background-color:white;'>
                        <h5 class="m-3 ">Product Name : <span>${productInformation[0].productName}</span></h5>
                        <h5 class="m-3">Manufacturer : ${productInformation[0].productManufacturer}</h5>
                        <h5 class="m-3">Quantity : ${productInformation[0].productQuantity}</h5>
                        <h5 class="m-3">Material : ${productInformation[0].productMaterial}</h5>
                        <h5 class="m-3">Length : ${productInformation[0].productLength}</h5>
                        <h5 class="m-3">Model : ${productInformation[0].productModel}</h5>
                        <h5 class="m-3">Price : ${productInformation[0].productPrice}</h5>
                        <h5 class="m-3">Delivery Charges : ${productInformation[0].productDeliveryCharges}</h5>
                        <button class="btn btn-primary mb-3" onclick="placeOrderButtonClick()" style="position: relative; left:50%; transform:translate(-50%)">Place Order</button>
                    </div> 
                </div>
                <div class='paymentDiv' id='paymentDiv' style='display:none'>
                    <div style='display:flex;'>
                        <div class="m-2" style='width:300px'>
                            <label for="deliveryNameInput" class="form-label">Name</label>
                            <input type='text' class="form-control" id="deliveryNameInput" onkeyup="deliveryNameInputValidate()" aria-describedby="emailHelp" autocomplete="off">
                            <span id='deliveryNameError' style='color:red'></span>
                        </div> 
                        <div class="m-2" style='width:300px'>
                            <label for="deliveryAddressInput" class="form-label">Delivery Address</label>
                            <input type='text' class="form-control" id="deliveryAddressInput" aria-describedby="emailHelp" onkeyup="deliveryAddressInputValidate()" autocomplete="off">
                            <span id='deliveryAddressError' style='color:red'></span>
                        </div> 
                    </div>
                    <div style='display:flex'>
                        <div class="m-2" style='width:300px'>
                            <label for="mobileNumberInput" class="form-label">Mobile Number</label>
                            <input type='text' class="form-control" id="mobileNumberInput" aria-describedby="emailHelp" onkeyup="mobileNumberInputValidate()" autocomplete="off">
                            <span id='mobileNumberError' style='color:red'></span>
                        </div> 
                        <div class="m-2" style='width:300px'>
                            <label for="orderProductPrice" class="form-label">Amount</label>
                            <input type='text' class="form-control" id="orderProductPrice" value="${productInformation[0].productPrice}" aria-describedby="emailHelp" readonly>
                        </div> 
                    </div>
                    <div style='display:flex'>
                        <div class="input-group m-1 mt-3 mb-3" style="padding-right: 11px; padding-left: 7px; max-width:350px">
                            <label class="input-group-text" for="inputGroupSelect01">Payment Mode</label>
                            <select class="form-select" id="paymentMode" onchange='paymentModeSelect()'>
                                <option value="choose" selected>Choose...</option>
                                <option value="COD">Cash on Delivery</option>
                                <option value="Credit card">Credit Card</option>
                                <option value="UPI">UPI</option>
                            </select>
                            <span id='paymentModeSelectError' style='color:red'></span>
                        </div>
                        <div class="input-group  mb-3" style='margin-top:15px; margin-right:7px;'>
                            <span class="input-group-text" id="basic-addon1">Number of Items</span>
                            <input type="number" class="form-control" id='numberOfItems' aria-label="Username" aria-describedby="basic-addon1" value='1' onchange='numberOfItemsSelection()' autocomplete="off">
                            <span id='numberOfItemsError' style='color:red'></span>
                        </div>
                    </div>
                    
                    <div id='creditCardPaymentDiv' style='display:none'>
                        <div style='display:flex'>
                            <div class="m-2" style='width:300px'>
                                <label for="creditCardNumberInput" class="form-label">Card Number</label>
                                <input type='text' class="form-control" id="creditCardNumberInput" aria-describedby="emailHelp" onkeyup="creditCardNumberInputValidate()" autocomplete="off">
                                <span id='creditCardNumberError' style='color:red'></span>
                            </div> 
                            <div class="m-2" style='width:300px'>
                                <label for="creditCardHolderNameInput" class="form-label">Card Holder Name</label>
                                <input type='text' class="form-control" id="creditCardHolderNameInput" aria-describedby="emailHelp" onkeyup="creditCardHolderNameInputValidate()" autocomplete="off">
                                <span id='creditCardHolderNameError' style='color:red'></span>
                            </div> 
                        </div>
                        <div style='display:flex'>
                            <div class="m-2" style='width:300px'>
                                <label for="creditCardCvvNumberInput" class="form-label">CVV Number</label>
                                <input type='text' class="form-control" id="creditCardCvvNumberInput" aria-describedby="emailHelp" onkeyup="creditCardCvvNumberInputValidate()" autocomplete="off">
                                <span id='creditCardCvvNumberError' style='color:red'></span>
                            </div> 
                            <div class="m-2" style='width:300px'>
                                <label for="mobileOtpInput" class="form-label">OTP</label>
                                <input type='text' class="form-control" id="mobileOtpInput" aria-describedby="emailHelp" onkeyup="mobileOtpInputValidate()" autocomplete="off">
                                <span id='mobileOtpError' style='color:red'></span>
                            </div> 
                            <div class='m-1' style="text-align:center; padding-top:35px; ">
                                <button class='btn btn-primary' onclick='creditCardPayButtonClick()'>Pay</button>
                            </div>
                        </div>
                    </div>
                    <div id='UpiPaymentDiv' style='display:none'>
                        <div style='display:flex'>
                            <div class="m-2" style='width:300px'>
                                <label for="upiIdInput" class="form-label">UPI ID</label>
                                <input type='text' class="form-control" id="upiIdInput" aria-describedby="emailHelp" onkeyup="upiIdInputValidate()" autocomplete="off">
                                <span id='upiIdError' style='color:red'></span>
                            </div> 
                            <div class='m-1' style="text-align:center; padding-top:35px;">
                                <button class='btn btn-primary' onclick='upiConfirmAndPayButtonClick()'>Confirm & Pay</button> 
                            </div> 
                        </div>
                    </div>
                    <div style='text-align:center'>
                        <button class='btn btn-primary m-2' onclick='confirmOrderButtonClick()'>Confirm Order</button>
                    </div>
                </div>`

        })
}
// function to order the product end

function numberOfItemsSelection() {
    const numberOfItems = document.getElementById('numberOfItems')
    const numberOfItemsError = document.getElementById('numberOfItemsError')
    var orderProductPrice = document.getElementById('orderProductPrice')
    // console.log('numberOfItemsSelection function invoked')
    if (numberOfItems.value < 1) {
        numberOfItemsError.innerText = '*Please select atleast 1'
    }
    else {
        numberOfItemsError.innerText = ''
        orderProductPrice.value = newInfo[0].productPrice * numberOfItems.value
    }
}


function placeOrderButtonClick() {
    // console.log('placeOrderButtonClick function invoked')
    document.getElementById('paymentDiv').removeAttribute('style')
}



function confirmOrderButtonClick() {


    const deliveryNameInput = document.getElementById('deliveryNameInput')
    const deliveryAddressInput = document.getElementById('deliveryAddressInput')
    const mobileNumberInput = document.getElementById('mobileNumberInput')
    const creditCardNumberInput = document.getElementById('creditCardNumberInput')
    const creditCardHolderNameInput = document.getElementById('creditCardHolderNameInput')
    const creditCardCvvNumberInput = document.getElementById('creditCardCvvNumberInput')
    const mobileOtpInput = document.getElementById('mobileOtpInput')
    const upiIdInput = document.getElementById('upiIdInput')

    const deliveryNameError = document.getElementById('deliveryNameError')
    const deliveryAddressError = document.getElementById('deliveryAddressError')
    const mobileNumberError = document.getElementById('mobileNumberError')
    const creditCardNumberError = document.getElementById('creditCardNumberError')
    const creditCardHolderNameError = document.getElementById('creditCardHolderNameError')
    const creditCardCvvNumberError = document.getElementById('creditCardCvvNumberError')
    const mobileOtpError = document.getElementById('mobileOtpError')
    const upiIdError = document.getElementById('upiIdError')
    const paymentModeSelectError = document.getElementById('paymentModeSelectError')

    // console.log('confirmOrderButtonClick button click')

    if (deliveryNameInput.value == '') {
        deliveryNameError.innerText = '*Please enter name'
    }
    else {
        deliveryNameError.innerText = ''
    }
    if (deliveryAddressInput.value == '') {
        deliveryAddressError.innerText = '*Please Enter delivery address'
    }
    else {
        deliveryAddressError.innerText = ''
    }
    if (mobileNumberInput.value == '') {
        mobileNumberError.innerText = '*Please Enter mobile number'
    }
    else {
        mobileNumberError.innerText = ''
    }
    if (creditCardNumberInput.value == '') {
        creditCardNumberError.innerText = '*Please Enter 16 digit credit card number'
    }
    else {
        creditCardNumberError.innerText = ''
    }
    if (creditCardHolderNameInput.value == '') {
        creditCardHolderNameError.innerText = '*Please Enter credit card holder name'
    }
    else {
        creditCardHolderNameError.innerText = ''
    }
    if (creditCardCvvNumberInput.value == '') {
        creditCardCvvNumberError.innerText = '*Please Enter credit card CVV number'
    }
    else {
        creditCardCvvNumberError.innerText = ''
    }
    if (mobileOtpInput.value == '') {
        mobileOtpError.innerText = '*Please Enter OTP'
    }
    else {
        mobileOtpError.innerText = ''
    }
    if (upiIdInput.value == '') {
        upiIdError.innerText = '*Please Enter OTP'
    }
    else {
        upiIdError.innerText = ''
    }
    if (document.getElementById('paymentMode').value == 'choose') {
        paymentModeSelectError.innerText = '*Please select payment mode'
    }
    else {
        paymentModeSelectError.innerText = ''
    }
    if ((deliveryNameError.innerText == '' && deliveryAddressError.innerText == '' && mobileNumberError.innerText == '' && paymentModeSelectError.innerText == '' && numberOfItemsError.innerText == '') || (deliveryNameError.innerText == '' && deliveryAddressError.innerText == '' && mobileNumberError.innerText == '' && paymentModeSelectError.innerText == '' && numberOfItemsError.innerText == '' && creditCardNumberError.innerText == '' && creditCardHolderNameError.innerText == '' && creditCardCvvNumberError.innerText == '' && mobileOtpError.innerText == '') || (deliveryNameError.innerText == '' && deliveryAddressError.innerText == '' && mobileNumberError.innerText == '' && paymentModeSelectError.innerText == '' && numberOfItemsError.innerText == '' && upiIdError.innerText == '')) {
        // https://www.tutorialspoint.com/How-to-add-rows-to-a-table-using-JavaScript-DOM notes to append data into table

        alert('Order confirmed !!')
        // console.log(newInfo)
        // console.log(newInfo[0])
        // console.log(newInfo[0].productName)
        // console.log(newInfo[0].productPrice)

        var today = new Date()
        var year = today.getFullYear()
        var mes = today.getMonth() + 1
        var dia = today.getDate()
        var todayDate = dia + "-" + mes + "-" + year
        var nextDate = (dia + 5) + "-" + mes + "-" + year
        // console.log(today)
        // console.log(year)
        // console.log(mes)
        // console.log(dia)
        // console.log(fecha)

        var tableBody = document.createElement('tbody')
        var row = document.createElement("tr")

        var c1 = document.createElement("td")
        var c2 = document.createElement("td")
        var c3 = document.createElement("td")
        var c4 = document.createElement("td")
        var c5 = document.createElement("td")
        var c6 = document.createElement("td")
        var c7 = document.createElement("td")
        var c8 = document.createElement("td")

        c1.innerText = "Product Name"
        c2.innerText = "5"
        c3.innerText = "Todays Date"
        c4.innerText = "Excepted delivery Date"
        c5.innerText = "Price"
        c6.innerText = "Payment Mode"
        c7.innerText = "Delivery Status"
        c8.innerText = "Cancle order"

        row.append(c1, c2, c3, c4, c5, c6, c7, c8)
        tableBody.append(row)
        document.getElementById('orderDetailsTable').append(tableBody)

        document.getElementById('productOrderDiv').style = 'display:none'
        document.getElementById('navbar').removeAttribute('style')
        document.getElementById('mainDiv').removeAttribute('style')
    }
}

function creditCardPayButtonClick() {
    // console.log('creditCardPayButtonClick function invoked')
    if (deliveryNameInput.value == '') {
        deliveryNameError.innerText = '*Please enter name'
    }
    else {
        deliveryNameError.innerText = ''
    }
    if (deliveryAddressInput.value == '') {
        deliveryAddressError.innerText = '*Please Enter delivery address'
    }
    else {
        deliveryAddressError.innerText = ''
    }
    if (mobileNumberInput.value == '') {
        mobileNumberError.innerText = '*Please Enter mobile number'
    }
    else {
        mobileNumberError.innerText = ''
    }
    if (creditCardNumberInput.value == '') {
        creditCardNumberError.innerText = '*Please Enter 16 digit credit card number'
    }
    else {
        creditCardNumberError.innerText = ''
    }
    if (creditCardHolderNameInput.value == '') {
        creditCardHolderNameError.innerText = '*Please Enter credit card holder name'
    }
    else {
        creditCardHolderNameError.innerText = ''
    }
    if (creditCardCvvNumberInput.value == '') {
        creditCardCvvNumberError.innerText = '*Please Enter credit card CVV number'
    }
    else {
        creditCardCvvNumberError.innerText = ''
    }
    if (mobileOtpInput.value == '') {
        mobileOtpError.innerText = '*Please Enter OTP'
    }
    else {
        mobileOtpError.innerText = ''
    }
}

function upiConfirmAndPayButtonClick() {
    // console.log('upiConfirmAndPayButtonClick function invoked')
    if (deliveryNameInput.value == '') {
        deliveryNameError.innerText = '*Please enter name'
    }
    else {
        deliveryNameError.innerText = ''
    }
    if (deliveryAddressInput.value == '') {
        deliveryAddressError.innerText = '*Please Enter delivery address'
    }
    else {
        deliveryAddressError.innerText = ''
    }
    if (mobileNumberInput.value == '') {
        mobileNumberError.innerText = '*Please Enter mobile number'
    }
    else {
        mobileNumberError.innerText = ''
    }
    if (upiIdInput.value == '') {
        upiIdError.innerText = '*Please Enter OTP'
    }
    else {
        upiIdError.innerText = ''
    }
}

function deliveryNameInputValidate() {
    // console.log('deliveryNameInputValidate function invoked')
    if (deliveryNameInput.value == '') {
        deliveryNameError.innerText = '*Please enter name'
    }
    else if (!isNaN(deliveryNameInput.value)) {
        deliveryNameError.innerText = '*Please use only characters'
    }
    else if (deliveryNameInput.value.length < 3) {
        deliveryNameError.innerText = '*Please enter a valid name'
    }
    else {
        deliveryNameError.innerText = ''
    }
}

function deliveryAddressInputValidate() {
    // console.log('deliveryAddressInputValidate function invoked')
    if (deliveryAddressInput.value == '') {
        deliveryAddressError.innerText = '*Please Enter delivery address'
    }
    else if (deliveryAddressInput.value.length < 10) {
        deliveryAddressError.innerText = '*Please Enter a valid delivery address'
    }
    else {
        deliveryAddressError.innerText = ''
    }
}

function mobileNumberInputValidate() {
    // console.log('mobileNumberInputValidate function invoked')
    if (mobileNumberInput.value == '') {
        mobileNumberError.innerText = '*Please Enter mobile number'
    }
    else if (isNaN(mobileNumberInput.value)) {
        mobileNumberError.innerText = '*Please use only numbers'
    }
    else if (mobileNumberInput.value.length < 10 || mobileNumberInput.value.length > 10) {
        mobileNumberError.innerText = '*Mobile number should be of 10 digits only'
    }
    else {
        mobileNumberError.innerText = ''
    }
}

function creditCardNumberInputValidate() {
    // console.log('creditCardNumberInputValidate function invoked')
    if (creditCardNumberInput.value == '') {
        creditCardNumberError.innerText = '*Please Enter 16 digit credit card number'
    }
    else if (isNaN(creditCardNumberInput.value)) {
        creditCardNumberError.innerText = '*Please use only numbers'
    }
    else if (creditCardNumberInput.value.length < 16 || creditCardNumberInput.value.length > 16) {
        creditCardNumberError.innerText = '*Credit card number should be of 16 digits'
    }
    else {
        creditCardNumberError.innerText = ''
    }
}

function creditCardHolderNameInputValidate() {
    // console.log('creditCardHolderNameInputValidate function invoked')
    if (creditCardHolderNameInput.value == '') {
        creditCardHolderNameError.innerText = '*Please Enter credit card holder name'
    }
    else if (!isNaN(creditCardHolderNameInput.value)) {
        creditCardHolderNameError.innerText = '*Please use only characters'
    }
    else if (creditCardHolderNameInput.value.length < 4) {
        creditCardHolderNameError.innerText = '*Please Enter a valid name'
    }
    else {
        creditCardHolderNameError.innerText = ''
    }
}

function creditCardCvvNumberInputValidate() {
    // console.log('creditCardCvvNumberInputValidate function validate')
    if (creditCardCvvNumberInput.value == '') {
        creditCardCvvNumberError.innerText = '*Please Enter credit card CVV number'
    }
    else if (isNaN(creditCardCvvNumberInput.value)) {
        creditCardCvvNumberError.innerText = '*Please use numbers only'
    }
    else if (creditCardCvvNumberInput.value.length < 3 || creditCardCvvNumberInput.value.length > 3) {
        creditCardCvvNumberError.innerText = '*Credit card CVV number should be of 3 dogits only'
    }
    else {
        creditCardCvvNumberError.innerText = ''
    }
}

function mobileOtpInputValidate() {
    // console.log('mobileOtpInputValidate function invoked')
    if (mobileOtpInput.value == '') {
        mobileOtpError.innerText = '*Please Enter OTP'
    }
    else if (isNaN(mobileOtpInput.value)) {
        mobileOtpError.innerText = '*Please use numbers only'
    }
    else if (mobileOtpInput.value.length < 4 || mobileOtpInput.value.length > 4) {
        mobileOtpError.innerText = '*OTP should be of 4 digits only'
    }
    else {
        mobileOtpError.innerText = ''
    }
}

function upiIdInputValidate() {
    // console.log('upiIdInputValidate function invoked')
    if (upiIdInput.value == '') {
        upiIdError.innerText = '*Please Enter UPI Id'
    }
    else if (isNaN(upiIdInput.value)) {
        upiIdError.innerText = '*Please use numbers only'
    }
    else {
        upiIdError.innerText = ''
    }
}

function paymentModeSelect() {
    // console.log('paymentModeSelect function invoked')
    if (document.getElementById('paymentMode').value == 'choose') {
        creditCardNumberInput.value = ''
        creditCardHolderNameInput.value = ''
        creditCardCvvNumberInput.value = ''
        mobileOtpInput.value = ''
        creditCardNumberError.innerText = ''
        creditCardHolderNameError.innerText = ''
        creditCardCvvNumberError.innerText = ''
        mobileOtpError.innerText = ''
        upiIdInput.value = ''
        upiIdError.innerText = ''

        document.getElementById('paymentModeSelectError').innerText = '*Please select payment mode'
        document.getElementById('creditCardPaymentDiv').style = 'display:none'
        document.getElementById('UpiPaymentDiv').style = 'display:none'
    }
    else if (document.getElementById('paymentMode').value == 'COD') {
        creditCardNumberInput.value = ''
        creditCardHolderNameInput.value = ''
        creditCardCvvNumberInput.value = ''
        mobileOtpInput.value = ''
        creditCardNumberError.innerText = ''
        creditCardHolderNameError.innerText = ''
        creditCardCvvNumberError.innerText = ''
        mobileOtpError.innerText = ''
        upiIdInput.value = ''
        upiIdError.innerText = ''

        document.getElementById('paymentModeSelectError').innerText = ''
        document.getElementById('creditCardPaymentDiv').style = 'display:none'
        document.getElementById('UpiPaymentDiv').style = 'display:none'
    }
    else if (document.getElementById('paymentMode').value == 'Credit card') {
        upiIdInput.value = ''
        upiIdError.innerText = ''

        document.getElementById('paymentModeSelectError').innerText = ''
        document.getElementById('creditCardPaymentDiv').removeAttribute('style')
        document.getElementById('UpiPaymentDiv').style = 'display:none'
    }
    else if (document.getElementById('paymentMode').value == 'UPI') {
        creditCardNumberInput.value = ''
        creditCardHolderNameInput.value = ''
        creditCardCvvNumberInput.value = ''
        mobileOtpInput.value = ''
        creditCardNumberError.innerText = ''
        creditCardHolderNameError.innerText = ''
        creditCardCvvNumberError.innerText = ''
        mobileOtpError.innerText = ''

        document.getElementById('paymentModeSelectError').innerText = ''
        document.getElementById('creditCardPaymentDiv').style = 'display:none'
        document.getElementById('UpiPaymentDiv').removeAttribute('style')
    }
}

function productOrderDivCrossClick() {
    document.getElementById('paymentDiv').style = 'display:none'
    document.getElementById('productOrderDiv').style = 'display:none'
    document.getElementById('navbar').removeAttribute('style')
    document.getElementById('mainDiv').removeAttribute('style')
}

function logoutButtonClick() {
    sessionStorage.removeItem('userLoginInfo')
    window.open('./index.html')
}














