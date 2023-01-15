// For login form
const logInUsernameInput=document.getElementById('logInUsernameInput')
const logInPasswordInput=document.getElementById('logInPasswordInput')
const logInUsernameError=document.getElementById('logInUsernameError')
const logInPasswordError=document.getElementById('logInPasswordError')
const getLocalUsername=localStorage.getItem('username')
const getLocalPassword=localStorage.getItem('password')

// For sign up form
const signUpNameInput=document.getElementById('signUpNameInput')
const signUpEmailIdInput=document.getElementById('signUpEmailIdInput')
const signUpUsernameInput=document.getElementById('signUpUsernameInput')
const signUpPasswordInput=document.getElementById('signUpPasswordInput')
const signUpCPasswordInput=document.getElementById('signUpCPasswordInput')
const signUpNameError=document.getElementById('signUpNameError')
const signUpEmailIdError=document.getElementById('signUpEmailIdError')
const signUpUsernameError=document.getElementById('signUpUsernameError')
const signUpPasswordError=document.getElementById('signUpPasswordError')
const signUpCPasswordError=document.getElementById('signUpCPasswordError')
const signUpEmailPattern=/^[^]+@[^]+\.[A-zZ]{2,3}$/

// Login info validate start
function logInValidateInfo(){
    console.log("logInClick function invoked")
    if(logInUsernameInput.value==""){
        logInUsernameError.innerText="*Please enter username"
    }

    else{
        logInUsernameError.innerText=""
    }
    if(logInPasswordInput.value==""){
        logInPasswordError.innerText="*Please enter password"
    }
    else{
        logInPasswordError.innerText=""
    }
    if(logInUsernameError.innerText=="" || logInPasswordError.innerText==""){
        if(logInUsernameInput.value!==getLocalUsername){
            logInUsernameError.innerText="*Invalid username"
        }
        if(logInPasswordInput.value!==getLocalPassword){
            logInPasswordError.innerText="*Invalid password"
        }
        else{
            alert("Login Successful !!")
            logInUsernameInput.value=""
            logInPasswordInput.value=""
            document.getElementById('loginFormContainer').style='display:none'
            document.getElementById('mainDiv').classList.remove('blurDiv')
        }
    }
}

function UsernameInput2(){
    logInUsernameError.innerText=""
}

function passwordInput2(){
    logInPasswordError.innerText=""
}
// Login info validate end

// Sign up info validate start
function signUpValidateInfo(){
    if(signUpNameInput.value==""){
        signUpNameError.innerText="*Please enter name"
    }
    else if(signUpEmailIdInput.value==""){
        signUpEmailIdError.innerText="*Please enter email id"
    }
    else if(signUpUsernameInput.value==""){
        signUpUsernameError.innerText="*Please enter username"
    }
    else if(signUpPasswordInput.value==""){
        signUpPasswordError.innerText="*Please enter password"
    }
    else if(signUpCPasswordInput.value==""){
        signUpCPasswordError.innerText="*Please enter password again"
    }
    else{
        localStorage.setItem('name', signUpNameInput.value)
        localStorage.setItem('email', signUpEmailIdInput.value)
        localStorage.setItem('username', signUpUsernameInput.value)
        localStorage.setItem('password', signUpPasswordInput.value)
        alert("Registration successful !!")
        document.getElementById('signUpDiv').style='display:none'
        document.getElementById('mainDiv').classList.remove('blurDiv')
        signUpNameInput.value=""
        signUpEmailIdInput.value=""
        signUpUsernameInput.value
        signUpPasswordInput.value=""
        signUpCPasswordInput.value=""
    }
}

function signUpNameValidate(){
    if(signUpNameInput.value==""){
        signUpNameError.innerText="*Please enter name"
    }
    else if(!isNaN(signUpNameInput.value)){
        signUpNameError.innerText="*Please use only characters"
    }
    else if(signUpNameInput.value.length<3){
        signUpNameError.innerText="*Please enter a valid name"
    }
    else{
        signUpNameError.innerText=""
    }
}

function signUpEmailIdValidate(){
    if(signUpEmailIdInput.value==""){
        signUpEmailIdError.innerText="*Please enter email id"
    }
    else if(signUpEmailIdInput.value.match(signUpEmailPattern)){
        signUpEmailIdError.innerText=""
    }
    else{
        signUpEmailIdError.innerText="*Please enter a valid email id"
    }
}

function signUpUsernameValidate(){
    if(signUpUsernameInput.value==""){
        signUpUsernameError.innerText="*Please enter username"
    }
    else if(!isNaN(signUpUsernameInput.value)){
        signUpUsernameError.innerText="*Please use only characters"
    }
    else if(signUpUsernameInput.value.length<3){
        signUpUsernameError.innerText="*Please enter a valid username"
    }
    else{
        signUpUsernameError.innerText=""
    }
}

function signUpPasswordValidate(){
    if(signUpPasswordInput.value==""){
        signUpPasswordError.innerText="*Please enter password"
    }
    else if(!isNaN(signUpPasswordInput.value)){
        signUpPasswordError.innerText="*Please use only characters for password"
    }
    else if(signUpPasswordInput.value.length<7 || signUpPasswordInput.value.length>15){
        signUpPasswordError.innerText="*Password should be between 8 to 15 characters"
    }
    else{
        signUpPasswordError.innerText=""
    }
}

function signUpCPasswordValidate(){
    if(signUpCPasswordInput.value==""){
        signUpCPasswordError.innerText="*Please enter password again"
    }
    else if(signUpCPasswordInput.value!==signUpPasswordInput.value){
        signUpCPasswordError.innerText="*Password is not matching"
    }
    else{
        signUpCPasswordError.innerText=""
    }
}
// Sign up info validate end


function logInClick(){
    console.log("navbar log in button clicked")
    document.getElementById('formContainer').style='display: block;  left:50%; top:50%; transform: translate(-50%, -50%);'
    document.getElementById('mainDiv').classList.add('blurDiv')
}

function signUpClick(){
    console.log("navbar sign up button clicked")
    document.getElementById('signUpDiv').style='display: block;  left:50%; top:50%; transform: translate(-50%, -50%);'
    document.getElementById('mainDiv').classList.add('blurDiv')
}

function crossClick(){
    console.log("crossClick function invoked")
    document.getElementById('formContainer').style='display:none'
    document.getElementById('signUpDiv').style='display:none'
    document.getElementById('mainDiv').classList.remove('blurDiv')
}