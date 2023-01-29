

// user profile information function start
const nameInput=document.getElementById('nameInput')
const emailIdInput=document.getElementById('emailIdInput')
const mobileInput=document.getElementById('mobileInput')
const addressInput=document.getElementById('addressInput')
const occupationInput=document.getElementById('occupationInput')

const nameError=document.getElementById('nameError')
const mobileError=document.getElementById('mobileError')
const addressError=document.getElementById('addressError')
const occupationError=document.getElementById('occupationError')

const submitButton=document.getElementById('submitButton')

nameInput.value=localStorage.getItem('name')
emailIdInput.value=localStorage.getItem('email')

function editInfoButtonClick(){
    console.log('editInfoButtonClick function invoked')
    nameInput.removeAttribute('readonly')
    mobileInput.removeAttribute('readonly')
    addressInput.removeAttribute('readonly')
    occupationInput.removeAttribute('readonly')
    submitButton.removeAttribute('disabled')
}

function submitInfoButtonClick(){
    console.log('submitInfoButtonClick function invoked')
    if(nameInput.value==''){
        nameError.innerText='*Please enter name'
    }
    if(mobileInput.value==''){
        mobileError.innerText='*Please enter mobile number'
    }
    if(addressInput.value==''){
        addressError.innerText='*Please enter address'
    }
    if(occupationInput.value==''){
        occupationError.innerText='*Please enter occupation'
    }
    if(nameError.innerText=='' && mobileError.innerText=='' && addressError.innerText=='' && occupationError.innerText==''){
        alert('Information successfully sumbitted')

        
        nameInput.setAttribute('readonly', 'true')
        mobileInput.setAttribute('readonly', 'true')
        addressInput.setAttribute('readonly', 'true')
        occupationInput.setAttribute('readonly', 'true')
        submitButton.setAttribute('disabled', 'true')
    }
}

function nameValidate(){
    console.log('nameValidate function invoked')
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

function mobileValidate(){
    if(mobileInput.value==''){
        mobileError.innerText='*Please enter mobile number'
    }
    else if(isNaN(mobileInput.value)){
        mobileError.innerText='*Please use only numbers'
    }
    else if(mobileInput.value.length<10 || mobileInput.value.length>10){
        mobileError.innerText='*Please enter a valid mobile number'
    }
    else{
        mobileError.innerText=''
    }
}

function addressValidate(){
    if(addressInput.value==''){
        addressError.innerText='*Please enter address'
    }
    else if(addressInput.value.length<10){
        addressError.innerText='*Please enter a valid address'
    }
    else{
        addressError.innerText=''
    }
}

function occupationValidate(){
    if(occupationInput.value==''){
        occupationError.innerText='*Please enter occupation'
    }
    else if(!isNaN(occupationInput.value)){
        occupationError.innerText='*Please use only characters'
    }
    else if(occupationInput.value.length<5){
        occupationError.innerText='*Please enter a valid occupation'
    }
    else{
        occupationError.innerText=''
    }
}
// user profile information function end

function logOutButtonClick(){
    sessionStorage.removeItem('userLoginInfo')
    window.open('./index.html')
}