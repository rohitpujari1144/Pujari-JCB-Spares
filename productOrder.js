function openProductOrderDiv(id) {
    // console.log('openProductOrderDiv function invoked')
    document.getElementById('navbar').style = 'filter:blur(2px)'
    document.getElementById('mainDiv').style = 'filter:blur(2px)'

    fetch('https://63c91acb320a0c4c9540abbc.mockapi.io/product_information')
        .then((response) => response.json())
        .then((data) => {
            let productInformation = data.filter((e) => {
                return (e.productId == id)
            })
            newInfo = productInformation
            console.log(productInformation)
            sessionStorage.setItem('productInformation', JSON.stringify(productInformation))
            document.getElementById('productOrderDiv').style = 'display:block'
            document.getElementById('productOrderDiv').innerHTML =
                `<div class="container productOrderDiv">
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
                            <button class="btn btn-outline-success mb-3 placeOrderButton" onclick="placeOrderButtonClick()">Place Order</button>
                        </div> 
                    </div>
                    <div id='newPaymentDiv'></div>
                </div>`
        })

}

function placeOrderButtonClick() {
    const prodprice = JSON.parse(sessionStorage.getItem('productInformation'))
    // console.log(prodprice[0].productPrice);
    document.getElementById('newPaymentDiv').innerHTML =
        `<div class='paymentDiv' id='paymentDiv'>
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
                    <input type='text' class="form-control" id="orderProductPrice" value="${prodprice[0].productPrice}" aria-describedby="emailHelp" readonly>
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
                <button class='btn btn-outline-primary m-2' onclick='confirmOrderButtonClick()'>Confirm Order</button>
            </div>
        </div>`
}


function numberOfItemsSelection() {
    // console.log('numberOfItemsSelection invoked');
    if (document.getElementById('numberOfItems').value >= 1) {
        let parseProdprice = JSON.parse(sessionStorage.getItem('productInformation'))
        let newProdPrice = (parseProdprice[0].productPrice) * (document.getElementById('numberOfItems').value)
        // console.log(newProdPrice);
        document.getElementById('orderProductPrice').value = newProdPrice
        document.getElementById('numberOfItemsError').innerText = ''
    }
    else {
        // console.log('Please select atleast one');
        document.getElementById('numberOfItemsError').innerText = '*Please select atleast one'
    }
}


function confirmOrderButtonClick() {
    // console.log('confirmOrderButtonClick invoked');
    const deliveryNameInput = document.getElementById('deliveryNameInput')
    const deliveryAddressInput = document.getElementById('deliveryAddressInput')
    const mobileNumberInput = document.getElementById('mobileNumberInput')
    const numberOfItems = document.getElementById('numberOfItems')
    const paymentMode = document.getElementById('paymentMode')
    const creditCardNumberInput = document.getElementById('creditCardNumberInput')
    const creditCardHolderNameInput = document.getElementById('creditCardHolderNameInput')
    const creditCardCvvNumberInput = document.getElementById('creditCardCvvNumberInput')
    const mobileOtpInput = document.getElementById('mobileOtpInput')
    const upiIdInput = document.getElementById('upiIdInput')

    const deliveryNameError = document.getElementById('deliveryNameError')
    const deliveryAddressError = document.getElementById('deliveryAddressError')
    const mobileNumberError = document.getElementById('mobileNumberError')
    const numberOfItemsError = document.getElementById('numberOfItemsError')
    const creditCardNumberError = document.getElementById('creditCardNumberError')
    const creditCardHolderNameError = document.getElementById('creditCardHolderNameError')
    const creditCardCvvNumberError = document.getElementById('creditCardCvvNumberError')
    const mobileOtpError = document.getElementById('mobileOtpError')
    const upiIdError = document.getElementById('upiIdError')
    const paymentModeSelectError = document.getElementById('paymentModeSelectError')

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
    if (paymentMode.value == 'choose') {
        paymentModeSelectError.innerText = '*Please select payment mode'
    }
    else {
        paymentModeSelectError.innerText = ''
    }
    if ((deliveryNameError.innerText == '' && deliveryAddressError.innerText == '' && mobileNumberError.innerText == '' && paymentModeSelectError.innerText == '' && numberOfItemsError.innerText == '') || (deliveryNameError.innerText == '' && deliveryAddressError.innerText == '' && mobileNumberError.innerText == '' && paymentModeSelectError.innerText == '' && numberOfItemsError.innerText == '' && creditCardNumberError.innerText == '' && creditCardHolderNameError.innerText == '' && creditCardCvvNumberError.innerText == '' && mobileOtpError.innerText == '') || (deliveryNameError.innerText == '' && deliveryAddressError.innerText == '' && mobileNumberError.innerText == '' && paymentModeSelectError.innerText == '' && numberOfItemsError.innerText == '' && upiIdError.innerText == '')) {
        // https://www.tutorialspoint.com/How-to-add-rows-to-a-table-using-JavaScript-DOM notes to append data into table

        const parseUserData = JSON.parse(sessionStorage.getItem('userLoginInfo'))
        const parseProductData = JSON.parse(sessionStorage.getItem('productInformation'))

        let today = new Date()
        let year = today.getFullYear()
        let mes = today.getMonth() + 1
        let dia = today.getDate()
        let todayDate = dia + "-" + mes + "-" + year
        let nextDate = (dia + 5) + "-" + mes + "-" + year
        // console.log(today)
        // console.log(year)
        // console.log(mes)
        // console.log(dia)

        const orderData = {
            custUsername: parseUserData[0].username,
            prodName: parseProductData[0].productName,
            prodQuantity: numberOfItems.value,
            orderedDate: todayDate,
            deliveryDate: nextDate,
            prodPrice: parseProductData[0].productPrice,
            totalPrice: orderProductPrice.value,
            paymentMode: paymentMode.value,
        }
        fetch('https://pujari-jcb-spares-order-be.onrender.com/newOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData),
        })
            .then((response) => console.log(response))
            .then((orderData) => {
                sessionStorage.removeItem('userOrderInfo')
                console.log('Success : ', orderData);
                alert('Order confirmed !!')
                document.getElementById('productOrderDiv').style = 'display:none'
                document.getElementById('navbar').removeAttribute('style')
                document.getElementById('mainDiv').removeAttribute('style')

                fetch('https://pujari-jcb-spares-order-be.onrender.com/')
                    .then((response) => response.json())
                    .then((data) => {
                        const parseUserData = JSON.parse(sessionStorage.getItem('userLoginInfo'))
                        let userOrderInfo = data.filter((e) => e.custUsername == parseUserData[0].username)
                        sessionStorage.setItem('userOrderInfo', JSON.stringify(userOrderInfo))
                        // console.log(userOrderInfo)
                    })
            })
            .catch((error) => {
                console.error('Error : ', error)
            })
        // console.log(orderData);
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
    // console.log('productOrderDivCrossClick invoked');
    document.getElementById('productOrderDiv').style = 'display:none'
    document.getElementById('navbar').removeAttribute('style')
    document.getElementById('mainDiv').removeAttribute('style')
}




