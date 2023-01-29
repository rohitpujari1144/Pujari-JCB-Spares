// For login form
const logInUsernameInput=document.getElementById('logInUsernameInput')
const logInPasswordInput=document.getElementById('logInPasswordInput')
const logInUsernameError=document.getElementById('logInUsernameError')
const logInPasswordError=document.getElementById('logInPasswordError')
const login=document.getElementById('login')

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
const EmailPattern=/^[^]+@[^]+\.[A-zZ]{2,3}$/

// for change password
const changePasswordOtpInput=document.getElementById('changePasswordOtpInput')
const newPasswordInput=document.getElementById('newPasswordInput')
const newConfirmPasswordInput=document.getElementById('newConfirmPasswordInput')
const changePasswordEmailInput=document.getElementById('changePasswordEmailInput')

const changePasswordOtpError=document.getElementById('changePasswordOtpError')
const newPasswordError=document.getElementById('newPasswordError')
const newConfirmPasswordError=document.getElementById('newConfirmPasswordError')
const changePasswordEmailError=document.getElementById('changePasswordEmailError')

// Login info validate start
function logInInfoValidate(){
    // console.log("logInClick function invoked")
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
    if(logInUsernameError.innerText=="" && logInPasswordError.innerText==""){
            fetch('https://63c91acb320a0c4c9540abbc.mockapi.io/users')
            .then((response)=>response.json())
            .then((data)=>{
                // console.log(data)
                let LoginInfo=data.filter((e)=>{
                    return (e.username==logInUsernameInput.value)
                })
                if(LoginInfo.length==1){
                    if(LoginInfo[0].password==logInPasswordInput.value){
                        sessionStorage.setItem('userLoginInfo', JSON.stringify(LoginInfo))
                        console.log(JSON.parse(sessionStorage.getItem('userLoginInfo')));
                        document.getElementById('loginFormContainer').style='display:none'
                        alert('Login successful')
                        document.getElementById('loginFormContainer').style='display: block; left:50%; top:50%; transform: translate(-50%, -50%);'
                        window.open('./new.html')
                        logInUsernameInput.value=''
                        logInPasswordInput.value=''
                    }
                    else{
                        // alert('wrong password')
                        logInPasswordError.innerText="*Invalid Password"
                    }
                } 
                else{
                    // alert('Invalid username')
                    logInUsernameError.innerText="*Invalid username"
                }
            })   
    }
    
}

function loginUsernameValidate(){
    logInUsernameError.innerText=""
}

function loginPasswordValidate(){
    logInPasswordError.innerText=""
}
// Login info validate end

// Sign up info validate start
function signUpInfoValidate(){
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
        const userSignupData={
            name:signUpNameInput.value,
            username:signUpUsernameInput.value,
            email:signUpEmailIdInput.value,
            password:signUpPasswordInput.value,
        }

        fetch('https://63c91acb320a0c4c9540abbc.mockapi.io/users',{
            method: 'POST', 
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(userSignupData),
        })
            .then((response) => response.json())
            .then((userSignupData) => {
                console.log('Success : ', userSignupData);
            })
            .catch((error) => {
                console.error('Error : ', error);
            });

        alert("Registration successful !!")
        signUpNameInput.value=''
        signUpEmailIdInput.value=''
        signUpUsernameInput.value=''
        signUpPasswordInput.value=''
        signUpCPasswordInput.value=''
        document.getElementById('signUpDiv').style='display:none'
        document.getElementById('loginFormContainer').style='display: block; left:50%; top:50%; transform: translate(-50%, -50%);'
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
    else if(signUpEmailIdInput.value.match(EmailPattern)){
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
    else if(signUpPasswordInput.value.length<8 || signUpPasswordInput.value.length>15){
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
    // console.log("navbar log in button clicked")
    document.getElementById('loginFormContainer').style='display: block; left:50%; top:50%; transform: translate(-50%, -50%);'
    document.getElementById('signUpDiv').style='display:none'
}

function signUpClick(){
    // console.log("navbar sign up button clicked")
    document.getElementById('signUpDiv').style='display: block; left:50%; top:50%; transform: translate(-50%, -50%);'
    document.getElementById('loginFormContainer').style='display:none'
}

function loginHereClick(){
    // console.log("loginHereClick function invoked")
    document.title='Log In'
    signUpNameInput.value=''
    signUpNameError.innerText=''
    signUpEmailIdInput.value=''
    signUpEmailIdError.innerText=''
    signUpUsernameInput.value=''
    signUpUsernameError.innerText=''
    signUpPasswordInput.value=''
    signUpPasswordError.innerText=''
    signUpCPasswordInput.value=''
    signUpCPasswordError.innerText=''
    document.getElementById('signUpDiv').style='display:none'
    document.getElementById('loginFormContainer').removeAttribute('style')
}

function createAccountClick(){
    // console.log("LoginAccountCreateClick function invoked")
    document.title='Sign Up'
    logInUsernameInput.value=''
    logInUsernameError.innerText=''
    logInPasswordInput.value=''
    logInPasswordError.innerText=''
    document.getElementById('loginFormContainer').style='display:none'
    document.getElementById('signUpDiv').removeAttribute('style')

}

function forgerPasswordClick(){
    // console.log('forgerPasswordClick function invoked')
    document.title='Change Password'
    logInUsernameInput.value=''
    logInUsernameError.innerText=''
    logInPasswordInput.value=''
    logInPasswordError.innerText=''
    document.getElementById('loginFormContainer').style='display:none'
    document.getElementById('changePasswordDiv').removeAttribute('style')
}

// change password function start
function changePasswordClick(){
    // console.log('changePasswordClick function invoked')
    if(changePasswordEmailInput.value==''){
        changePasswordEmailError.innerText='*Please enter email Id'
    }
    else{
        changePasswordEmailError.innerText=''
    }
    if(changePasswordOtpInput.value==''){
        changePasswordOtpError.innerText='*Please enter OTP'
    }
    else{
        changePasswordOtpError.innerText=''
    }
    if(newPasswordInput.value==''){
        newPasswordError.innerText='*Please enter password'
    }
    else{
        newPasswordError.innerText=''
    }
    if(newConfirmPasswordInput.value==''){
        newConfirmPasswordError.innerText='*Please enter password again'
    }
    else{
        newConfirmPasswordError.innerText=''
    }
}

function changePasswordEmailValidate(){
    if(changePasswordEmailInput.value==''){
        changePasswordEmailError.innerText='*Please enter email Id'
    }
    else if(changePasswordEmailInput.value.match(EmailPattern)){
        changePasswordEmailError.innerText=""
    }
    else{
        changePasswordEmailError.innerText="*Please enter a valid email id"
    }
}

function changePasswordOtpValidate(){
    if(changePasswordOtpInput.value==''){
        changePasswordOtpError.innerText='*Please enter OTP'
    }
    else if(isNaN(changePasswordOtpInput.value)){
        changePasswordOtpError.innerText='*Please use only numbers'
    }
    else if(changePasswordOtpInput.value.length<4 || changePasswordOtpInput.value.length>4){
        changePasswordOtpError.innerText='*OTP should be of 4 digits only'
    }
    else{
        changePasswordOtpError.innerText=''
    }
}

function changePasswordInputValidate(){
    if(newPasswordInput.value==''){
        newPasswordError.innerText='*Please enter password'
    }
    else if(!isNaN(newPasswordInput.value)){
        newPasswordError.innerText='*Use only characters'
    }
    else if(newPasswordInput.value.length<8 || newPasswordInput.value.length>15){
        newPasswordError.innerText="*Password should be between 8 to 15 characters"
    }
    else{
        newPasswordError.innerText=''
    }
}

function changeConfirmPasswordInputValidate(){
    if(newConfirmPasswordInput.value==''){
        newConfirmPasswordError.innerText='*Please enter password again'
    }
    else if(newConfirmPasswordInput.value!==newPasswordInput.value){
        newConfirmPasswordError.innerText="*Password is not matching"
    }
    else{
        newConfirmPasswordError.innerText=''
    }
}
// change password function end

function backToLoginClick(){
    changePasswordEmailInput.value=''
    changePasswordEmailError.innerText=''
    changePasswordEmailInput.value=''
    changePasswordEmailError.innerText=''
    changePasswordOtpInput.value=''
    changePasswordOtpError.innerText=''
    newPasswordInput.value=''
    newPasswordError.innerText=''
    newConfirmPasswordInput.value=''
    newConfirmPasswordError.innerText=''
    document.getElementById('changePasswordDiv').style='display:none'
    document.title='Log In'
    document.getElementById('loginFormContainer').removeAttribute('style')
}