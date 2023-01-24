const placeOrderButton=document.getElementById('placeOrderButton')
const placeOrderMainDiv=document.getElementById('placeOrderMainDiv')
const paymentMode=document.getElementById('paymentMode')
const creditCardPaymentDiv=document.getElementById('creditCardPaymentDiv')
const UpiPaymentDiv=document.getElementById('UpiPaymentDiv')
const confirmOrderButton=document.getElementById('confirmOrderButton')

const nameInput=document.getElementById('nameInput')
const deliveryAddressInput=document.getElementById('deliveryAddressInput')
const mobileNumberInput=document.getElementById('mobileNumberInput')
const creditCardHolderNameInput=document.getElementById('creditCardHolderNameInput')
const creditCardNumberInput=document.getElementById('creditCardNumberInput')
const creditCardExpiryDateInput=document.getElementById('creditCardExpiryDateInput')
const creditCardCvvNumberInput=document.getElementById('creditCardCvvNumberInput')
const creditCardOtpInput=document.getElementById('creditCardOtpInput')
const upiIdInput=document.getElementById('upiIdInput')

const nameError=document.getElementById('nameError')
const deliveryAddressError=document.getElementById('deliveryAddressError')
const mobileNumberError=document.getElementById('mobileNumberError')
const paymentModeError=document.getElementById('paymentModeError')
const creditCardHolderNameError=document.getElementById('creditCardHolderNameError')
const creditCardNumberError=document.getElementById('creditCardNumberError')
const creditCardExpiryDateError=document.getElementById('creditCardExpiryDateError')
const creditCardCvvNumberError=document.getElementById('creditCardCvvNumberError')
const creditCardOtpError=document.getElementById('creditCardOtpError')
const upiIdError=document.getElementById('upiIdError')


function placeOrderButtonClick(){
    placeOrderMainDiv.removeAttribute('style')
    document.getElementById('mainContainer').style='filter:blur(2px)'
}

function crossMarkClick(){
    placeOrderMainDiv.style='display:none'
    document.getElementById('mainContainer').removeAttribute('style')
}

function paymentModeSelect(){
    console.log('paymentModeSelect function invoked')

    if(paymentMode.value=='choose'){
        UpiPaymentDiv.style='display:none'
        creditCardPaymentDiv.style='display:none'
    }

    else if(paymentMode.value=='cashOnDelivery'){
        console.log('cod selected')
        UpiPaymentDiv.style='display:none'
        creditCardPaymentDiv.style='display:none'
    }

    else if(paymentMode.value=='creditCard'){
        console.log('creditCard selected')
        creditCardPaymentDiv.removeAttribute('style')
        UpiPaymentDiv.style='display:none'
    }

    else if(paymentMode.value=='upi'){
        console.log('upi selected')
        UpiPaymentDiv.removeAttribute('style')
        creditCardPaymentDiv.style='display:none'
    }
}

function creditCardPayButtonClick(){
    if(nameInput.value==''){
        nameError.innerText='*Please enter name'
    }
    else{
        nameError.innerText=''
    }
    if(deliveryAddressInput.value==''){
        deliveryAddressError.innerText='*Please enter address'
    }
    else{
        deliveryAddressError.innerText=''
    }
    if(mobileNumberInput.value==''){
        mobileNumberError.innerText='*Please enter mobile number'
    }
    else{
        mobileNumberError.innerText=''
    }
    if(paymentMode.value=='choose'){
        paymentModeError.innerText='*Please select payment mode'
    }
    else{
        paymentModeError.innerText=''
    }
    if(creditCardHolderNameInput.value==''){
        creditCardHolderNameError.innerText='*Please enter name'
    }
    else{
        creditCardHolderNameError.innerText=''
    }
    if(creditCardNumberInput.value==''){
        creditCardNumberError.innerText='*Please enter 16 digit credit card number'
    }
    else{
        creditCardNumberError.innerText=''
    }
    if(creditCardExpiryDateInput.value==''){
        creditCardExpiryDateError.innerText='*Please enter credit card expiry date'
    }
    else{
        creditCardExpiryDateError.innerText=''
    }
    if(creditCardCvvNumberInput.value==''){
        creditCardCvvNumberError.innerText='*Please enter credit card CVV number'
    }
    else{
        creditCardCvvNumberError.innerText=''
    }
    if(creditCardOtpInput.value==''){
        creditCardOtpError.innerText='*Please enter OTP'
    }
    else{
        creditCardOtpError.innerText=''
    }
}

function upiPayButtonClick(){
    if(nameInput.value==''){
        nameError.innerText='*Please enter name'
    }
    else{
        nameError.innerText=''
    }
    if(deliveryAddressInput.value==''){
        deliveryAddressError.innerText='*Please enter address'
    }
    else{
        deliveryAddressError.innerText=''
    }
    if(mobileNumberInput.value==''){
        mobileNumberError.innerText='*Please enter mobile number'
    }
    else{
        mobileNumberError.innerText=''
    }
    if(paymentMode.value=='choose'){
        paymentModeError.innerText='*Please select payment mode'
    }
    else{
        paymentModeError.innerText=''
    }
    if(upiIdInput.value==''){
    upiIdError.innerText='*Please enter UPI ID'
    }
    else{
    upiIdError.innerText=''
    }
}

function confirmOrderButtonClick(){
    if(nameInput.value==''){
        nameError.innerText='*Please enter name'
    }
    else{
        nameError.innerText=''
    }
    if(deliveryAddressInput.value==''){
        deliveryAddressError.innerText='*Please enter address'
    }
    else{
        deliveryAddressError.innerText=''
    }
    if(mobileNumberInput.value==''){
        mobileNumberError.innerText='*Please enter mobile number'
    }
    else{
        mobileNumberError.innerText=''
    }
    if(paymentMode.value=='choose'){
        paymentModeError.innerText='*Please select payment mode'
    }
    else{
        paymentModeError.innerText=''
    }
    if(creditCardHolderNameInput.value==''){
        creditCardHolderNameError.innerText='*Please enter name'
    }
    else{
        creditCardHolderNameError.innerText=''
    }
    if(creditCardNumberInput.value==''){
        creditCardNumberError.innerText='*Please enter 16 digit credit card number'
    }
    else{
        creditCardNumberError.innerText=''
    }
    if(creditCardExpiryDateInput.value==''){
        creditCardExpiryDateError.innerText='*Please enter credit card expiry date'
    }
    else{
        creditCardExpiryDateError.innerText=''
    }
    if(creditCardCvvNumberInput.value==''){
        creditCardCvvNumberError.innerText='*Please enter credit card CVV number'
    }
    else{
        creditCardCvvNumberError.innerText=''
    }
    if(creditCardOtpInput.value==''){
        creditCardOtpError.innerText='*Please enter OTP'
    }
    else{
        creditCardOtpError.innerText=''
    }
    if(upiIdInput.value==''){
        upiIdError.innerText='*Please enter UPI ID'
        }
        else{
        upiIdError.innerText=''
        }
}

function nameValidate(){
    if(nameInput.value==''){
        nameError.innerText='*Please enter name'
    }
    else if(!isNaN(nameInput.value)){
        nameError.innerText='*Please use only characters'
    }
    else if(nameInput.value.length<3){
        nameError.innerText='*Please enter a valid name'
    }
    else{
        nameError.innerText=''
    }
}

function addressValidate(){
    if(deliveryAddressInput.value==''){
        deliveryAddressError.innerText='Please enter address'
    }
    else if(deliveryAddressInput.value.length<10){
        deliveryAddressError.innerText='Please enter detailed address'
    }
    else{
        deliveryAddressError.innerText=''
    }
}

function mobileNumberValidate(){
    if(mobileNumberInput.value==''){
        mobileNumberError.innerText='*Please enter mobile number'
    }
    else if(isNaN(mobileNumberInput.value)){
        mobileNumberError.innerText='*Please use only numbers'
    }
    else if((mobileNumberInput.value.length<10) || (mobileNumberInput.value.length>10)){
        mobileNumberError.innerText='*Please enter a valid mobile number'
    }
    else{
        mobileNumberError.innerText=''
    }
}

function creditCardHolderNameValidate(){
    if(creditCardHolderNameInput.value==''){
        creditCardHolderNameError.innerText='*Please enter name'
    }
    else if(!isNaN(creditCardHolderNameInput.value)){
        creditCardHolderNameError.innerText='*Please use only characters'
    }
    else if(creditCardHolderNameInput.value.length<3){
        creditCardHolderNameError.innerText='*Please enter a valid name'
    }
    else{
        creditCardHolderNameError.innerText=''
    }
}

function creditCardNumberValidate(){
    if(creditCardNumberInput.value==''){
        creditCardNumberError.innerText='*Please enter 16 digit credit card number'
    }
    else if(isNaN(creditCardNumberInput.value)){
        creditCardNumberError.innerText='*Please use only numbers'
    }
    else if(creditCardNumberInput.value.length<16 || creditCardNumberInput.value.length>16){
        creditCardNumberError.innerText='*Please enter a valid credit card number'
    }
    else{
        creditCardNumberError.innerText=''
    }
}

function creditCardExpiryDateValidate(){
    if(creditCardExpiryDateInput.value==''){
        creditCardExpiryDateError.innerText='*please enter credit card expiry date'
    }
    else if(creditCardExpiryDateInput.value.length<5 || creditCardExpiryDateInput.value.length>5){
        creditCardExpiryDateError.innerText='Please enter a valid expiry date'
    }
    else{
        creditCardExpiryDateError.innerText=''

    }
}

function cvvNumberValidate(){
    if(creditCardCvvNumberInput.value==''){
        creditCardCvvNumberError.innerText='*Please enter 3 digit CVV number'
    }
    else if(isNaN(creditCardCvvNumberInput.value)){
        creditCardCvvNumberError.innerText='*Please use numbers only'
    }
    else if(creditCardCvvNumberInput.value.length<3 || creditCardCvvNumberInput.value.length>3){
        creditCardCvvNumberError.innerText='*Please enter a valid CVV number'
    }
    else{
        creditCardCvvNumberError.innerText=''
    }
}

function otpValidate(){
    if(creditCardOtpInput.value==''){
        creditCardOtpError.innerText='*Please enter OTP'
    }
    else if(isNaN(creditCardOtpInput.value)){
        creditCardOtpError.innerText='*Please use only numbers'
    }
    else if(creditCardOtpInput.value.length<4 || creditCardOtpInput.value.length>4){
        creditCardOtpError.innerText='*Please enter a valid OTP'
    }
    else{
        creditCardOtpError.innerText=''
    }
}

function upiValidate(){
    if(upiIdInput.value==''){
        upiIdError.innerText='Please enter a UPI ID'
    }
    else{
        upiIdError.innerText=''
    }
}