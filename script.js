// For login form
const logInUsernameInput = document.getElementById('logInUsernameInput')
const logInPasswordInput = document.getElementById('logInPasswordInput')
const logInUsernameError = document.getElementById('logInUsernameError')
const logInPasswordError = document.getElementById('logInPasswordError')
const login = document.getElementById('login')

// For sign up form
const signUpNameInput = document.getElementById('signUpNameInput')
const signUpEmailIdInput = document.getElementById('signUpEmailIdInput')
const signUpUsernameInput = document.getElementById('signUpUsernameInput')
const signUpPasswordInput = document.getElementById('signUpPasswordInput')
const signUpCPasswordInput = document.getElementById('signUpCPasswordInput')
const signUpNameError = document.getElementById('signUpNameError')
const signUpEmailIdError = document.getElementById('signUpEmailIdError')
const signUpUsernameError = document.getElementById('signUpUsernameError')
const signUpPasswordError = document.getElementById('signUpPasswordError')
const signUpCPasswordError = document.getElementById('signUpCPasswordError')
const EmailPattern = /^[^]+@[^]+\.[A-zZ]{2,3}$/

// for change password
const changePasswordOtpInput = document.getElementById('changePasswordOtpInput')
const newPasswordInput = document.getElementById('newPasswordInput')
const newConfirmPasswordInput = document.getElementById('newConfirmPasswordInput')
const changePasswordEmailInput = document.getElementById('changePasswordEmailInput')

const changePasswordOtpError = document.getElementById('changePasswordOtpError')
const newPasswordError = document.getElementById('newPasswordError')
const newConfirmPasswordError = document.getElementById('newConfirmPasswordError')
const changePasswordEmailError = document.getElementById('changePasswordEmailError')

// Login info validate start
function logInInfoValidate() {
    // console.log("logInClick function invoked")
    if (logInUsernameInput.value == "") {
        logInUsernameInput.style = 'border-color:red'
        logInUsernameError.innerText = "*Please enter username"
    }
    else {
        logInUsernameInput.removeAttribute('style')
        logInUsernameError.innerText = ""
    }
    if (logInPasswordInput.value == "") {
        logInPasswordInput.style = 'border-color:red'
        logInPasswordError.innerText = "*Please enter password"
    }
    else {
        logInPasswordInput.removeAttribute('style')
        logInPasswordError.innerText = ""
    }
    if (logInUsernameError.innerText == "" && logInPasswordError.innerText == "") {
        fetch('https://pujari-jcb-spares-be.onrender.com')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                let LoginInfo = data.filter((e) => e.username == logInUsernameInput.value)
                if (LoginInfo.length == 1) {
                    if (LoginInfo[0].password == logInPasswordInput.value) {
                        sessionStorage.setItem('userLoginInfo', JSON.stringify(LoginInfo))
                        console.log(JSON.parse(sessionStorage.getItem('userLoginInfo')));
                        alert('Login successful')
                        // document.getElementById('loginFormContainer').style = 'display: block; left:50%; top:50%; transform: translate(-50%, -50%);'
                        window.open('/company_home_page_index.html', '_self')
                        // window.close('/index.html')
                        logInUsernameInput.value = ''
                        logInPasswordInput.value = ''
                    }
                    else {
                        // alert('wrong password')
                        logInPasswordInput.style='border-color:red'
                        logInPasswordError.innerText = "*Incorrect Password"
                    }
                }
                else {
                    // alert('Incorrect username')
                    logInUsernameInput.style='border-color:red'
                    logInUsernameError.innerText = "*Incorrect username"
                }
            })
    }
}

function loginUsernameValidate() {
    if (logInUsernameInput.value == "") {
        logInUsernameInput.style = 'border-color:red'
        logInUsernameError.innerText = "*Please enter username"
    }
    else {
        logInUsernameInput.removeAttribute('style')
        logInUsernameError.innerText = ""
    }
}

function loginPasswordValidate() {
    if (logInPasswordInput.value == "") {
        logInPasswordInput.style = 'border-color:red'
        logInPasswordError.innerText = "*Please enter password"
    }
    else {
        logInPasswordInput.removeAttribute('style')
        logInPasswordError.innerText = ""
    }
}
// Login info validate end

// Sign up info validate start
function signUpInfoValidate() {
    if (signUpNameInput.value == "") {
        signUpNameInput.style = 'border-color:red'
        signUpNameError.innerText = "*Please enter name"
    }
    else {
        if (!isNaN(signUpNameInput.value)) {
            signUpNameInput.style = 'border:1px solid red'
            signUpNameError.innerText = "*Please use only characters"
        }
        else if (signUpNameInput.value.length < 3) {
            signUpNameInput.style = 'border:1px solid red'
            signUpNameError.innerText = "*Please enter a valid name"
        }
        else {
            signUpNameInput.removeAttribute('style')
            signUpNameError.innerText = ""
        }
    }
    if (signUpEmailIdInput.value == "") {
        signUpEmailIdInput.style = 'border-color:red'
        signUpEmailIdError.innerText = "*Please enter email id"
    }
    else {
        if (signUpEmailIdInput.value.match(EmailPattern)) {
            signUpEmailIdInput.removeAttribute('style')
            signUpEmailIdError.innerText = ""
        }
        else {
            signUpEmailIdInput.style = 'border:1px solid red'
            signUpEmailIdError.innerText = "*Please enter a valid email id"
        }
    }
    if (signUpUsernameInput.value == "") {
        signUpUsernameInput.style = 'border-color:red'
        signUpUsernameError.innerText = "*Please enter username"
    }
    else {
        if (!isNaN(signUpUsernameInput.value)) {
            signUpUsernameInput.style = 'border:1px solid red'
            signUpUsernameError.innerText = "*Please use only characters"
        }
        else if (signUpUsernameInput.value.length < 3) {
            signUpUsernameInput.style = 'border:1px solid red'
            signUpUsernameError.innerText = "*Please enter a valid username"
        }
        else {
            signUpUsernameInput.removeAttribute('style')
            signUpUsernameError.innerText = ""
        }
    }
    if (signUpPasswordInput.value == "") {
        signUpPasswordInput.style = 'border-color:red'
        signUpPasswordError.innerText = "*Please enter password"
    }
    else {
        if (!isNaN(signUpPasswordInput.value)) {
            signUpPasswordInput.style = 'border:1px solid red'
            signUpPasswordError.innerText = "*Please use only characters for password"
        }
        else if (signUpPasswordInput.value.length < 8 || signUpPasswordInput.value.length > 15) {
            signUpPasswordInput.style = 'border:1px solid red'
            signUpPasswordError.innerText = "*Password should be between 8 to 15 characters"
        }
        else {
            signUpPasswordInput.removeAttribute('style')
            signUpPasswordError.innerText = ""
        }
    }
    if (signUpCPasswordInput.value == "") {
        signUpCPasswordInput.style = 'border-color:red'
        signUpCPasswordError.innerText = "*Please enter password again"
    }
    else {
        if (signUpCPasswordInput.value !== signUpPasswordInput.value) {
            signUpCPasswordInput.style = 'border:1px solid red'
            signUpCPasswordError.innerText = "*Password is not matching"
        }
        else {
            signUpCPasswordInput.removeAttribute('style')
            signUpCPasswordError.innerText = ""
        }
    }
    if (signUpNameError.innerText == "" && signUpEmailIdError.innerText == "" && signUpUsernameError.innerText == "" && signUpPasswordError.innerText == "" && signUpCPasswordError.innerText == "") {
        fetch('https://pujari-jcb-spares-be.onrender.com')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                let newData = data.filter((e) => e.email == signUpEmailIdInput.value)
                if (newData.length == 0) {
                    let newUsername = data.filter((e) => e.username == signUpUsernameInput.value)
                    if (newUsername.length == 0) {
                        const userSignupData = {
                            name: signUpNameInput.value,
                            email: signUpEmailIdInput.value,
                            username: signUpUsernameInput.value,
                            password: signUpPasswordInput.value
                        }
                        fetch('https://pujari-jcb-spares-be.onrender.com/userSignUp', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(userSignupData),
                        })
                            .then((response) => console.log(response))
                            .then((userSignupData) => {
                                console.log('Success : ', userSignupData);
                                alert('Sign up successful')
                                signUpNameInput.value = ''
                                signUpEmailIdInput.value = ''
                                signUpUsernameInput.value = ''
                                signUpPasswordInput.value = ''
                                signUpCPasswordInput.value = ''
                                document.getElementById('signUpDiv').style = 'display:none'
                                document.getElementById('loginFormContainer').style = 'display: block; left:50%; top:50%; transform: translate(-50%, -50%);'
                            })
                            .catch((error) => {
                                console.error('Error : ', error)
                            })
                    }
                    else {
                        console.log(newUsername)
                        alert(`User with username ${signUpUsernameInput.value} already exist`)
                    }
                }
                else {
                    console.log(newData)
                    alert(`User with email id ${signUpEmailIdInput.value} already exist`)
                }
            })
    }
}

function signUpNameValidate() {
    if (signUpNameInput.value == "") {
        signUpNameInput.style = 'border:1px solid red'
        signUpNameError.innerText = "*Please enter name"
    }
    else if (!isNaN(signUpNameInput.value)) {
        signUpNameInput.style = 'border:1px solid red'
        signUpNameError.innerText = "*Please use only characters"
    }
    else if (signUpNameInput.value.length < 3) {
        signUpNameInput.style = 'border:1px solid red'
        signUpNameError.innerText = "*Please enter a valid name"
    }
    else {
        signUpNameInput.removeAttribute('style')
        signUpNameError.innerText = ""
    }
}

function signUpEmailIdValidate() {
    if (signUpEmailIdInput.value == "") {
        signUpEmailIdInput.style = 'border:1px solid red'
        signUpEmailIdError.innerText = "*Please enter email id"
    }
    else if (signUpEmailIdInput.value.match(EmailPattern)) {
        signUpEmailIdInput.removeAttribute('style')
        signUpEmailIdError.innerText = ""
    }
    else {
        signUpEmailIdInput.style = 'border:1px solid red'
        signUpEmailIdError.innerText = "*Please enter a valid email id"
    }
}

function signUpUsernameValidate() {
    if (signUpUsernameInput.value == "") {
        signUpUsernameInput.style = 'border:1px solid red'
        signUpUsernameError.innerText = "*Please enter username"
    }
    else if (!isNaN(signUpUsernameInput.value)) {
        signUpUsernameInput.style = 'border:1px solid red'
        signUpUsernameError.innerText = "*Please use only characters"
    }
    else if (signUpUsernameInput.value.length < 3) {
        signUpUsernameInput.style = 'border:1px solid red'
        signUpUsernameError.innerText = "*Please enter a valid username"
    }
    else {
        signUpUsernameInput.removeAttribute('style')
        signUpUsernameError.innerText = ""
    }
}

function signUpPasswordValidate() {
    if (signUpPasswordInput.value == "") {
        signUpPasswordInput.style = 'border:1px solid red'
        signUpPasswordError.innerText = "*Please enter password"
    }
    else if (!isNaN(signUpPasswordInput.value)) {
        signUpPasswordInput.style = 'border:1px solid red'
        signUpPasswordError.innerText = "*Please use only characters for password"
    }
    else if (signUpPasswordInput.value.length < 8 || signUpPasswordInput.value.length > 15) {
        signUpPasswordInput.style = 'border:1px solid red'
        signUpPasswordError.innerText = "*Password should be between 8 to 15 characters"
    }
    else {
        signUpPasswordInput.removeAttribute('style')
        signUpPasswordError.innerText = ""
    }
}

function signUpCPasswordValidate() {
    if (signUpCPasswordInput.value == "") {
        signUpCPasswordInput.style = 'border:1px solid red'
        signUpCPasswordError.innerText = "*Please enter password again"
    }
    else if (signUpCPasswordInput.value !== signUpPasswordInput.value) {
        signUpCPasswordInput.style = 'border:1px solid red'
        signUpCPasswordError.innerText = "*Password is not matching"
    }
    else {
        signUpCPasswordInput.removeAttribute('style')
        signUpCPasswordError.innerText = ""
    }
}
// Sign up info validate end


function logInClick() {
    // console.log("navbar log in button clicked")
    document.getElementById('loginFormContainer').style = 'display: block; left:50%; top:50%; transform: translate(-50%, -50%);'
    document.getElementById('signUpDiv').style = 'display:none'
}

function signUpClick() {
    // console.log("navbar sign up button clicked")
    document.getElementById('signUpDiv').style = 'display: block; left:50%; top:50%; transform: translate(-50%, -50%);'
    document.getElementById('loginFormContainer').style = 'display:none'
}

function loginHereClick() {
    // console.log("loginHereClick function invoked")
    document.title = 'Log In'
    signUpNameInput.value = ''
    signUpNameInput.removeAttribute('style')
    signUpNameError.innerText = ''
    signUpEmailIdInput.value = ''
    signUpEmailIdInput.removeAttribute('style')
    signUpEmailIdError.innerText = ''
    signUpUsernameInput.value = ''
    signUpUsernameInput.removeAttribute('style')
    signUpUsernameError.innerText = ''
    signUpPasswordInput.value = ''
    signUpPasswordInput.removeAttribute('style')
    signUpPasswordError.innerText = ''
    signUpCPasswordInput.value = ''
    signUpCPasswordInput.removeAttribute('style')
    signUpCPasswordError.innerText = ''
    document.getElementById('signUpDiv').style = 'display:none'
    document.getElementById('loginFormContainer').removeAttribute('style')
}

function createAccountClick() {
    // console.log("LoginAccountCreateClick function invoked")
    document.title = 'Sign Up'
    logInUsernameInput.value = ''
    logInUsernameInput.removeAttribute('style')
    logInUsernameError.innerText = ''
    logInPasswordInput.value = ''
    logInPasswordInput.removeAttribute('style')
    logInPasswordError.innerText = ''
    document.getElementById('loginFormContainer').style = 'display:none'
    document.getElementById('signUpDiv').removeAttribute('style')

}

function forgerPasswordClick() {
    // console.log('forgerPasswordClick function invoked')
    document.title = 'Change Password'
    logInUsernameInput.value = ''
    logInUsernameInput.removeAttribute('style')
    logInUsernameError.innerText = ''
    logInPasswordInput.value = ''
    logInPasswordInput.removeAttribute('style')
    logInPasswordError.innerText = ''
    document.getElementById('loginFormContainer').style = 'display:none'
    document.getElementById('changePasswordDiv').removeAttribute('style')
}

// change password function start
function changePasswordClick() {
    // console.log('changePasswordClick function invoked')
    if (changePasswordEmailInput.value == '') {
        changePasswordEmailInput.style = 'border-color:red'
        changePasswordEmailError.innerText = '*Please enter email Id'
    }
    else {
        if (changePasswordEmailInput.value.match(EmailPattern)) {
            changePasswordEmailInput.removeAttribute('style')
            changePasswordEmailError.innerText = ""
        }
        else {
            changePasswordEmailInput.style = 'border-color:red'
            changePasswordEmailError.innerText = "*Please enter a valid email id"
        }
    }
    if (changePasswordOtpInput.value == '') {
        changePasswordOtpInput.style = 'border-color:red'
        changePasswordOtpError.innerText = '*Please enter OTP'
    }
    else {
        if (isNaN(changePasswordOtpInput.value)) {
            changePasswordOtpInput.style = 'border-color:red'
            changePasswordOtpError.innerText = '*Please use only numbers'
        }
        else if (changePasswordOtpInput.value.length < 4 || changePasswordOtpInput.value.length > 4) {
            changePasswordOtpInput.style = 'border-color:red'
            changePasswordOtpError.innerText = '*OTP should be of 4 digits only'
        }
        else {
            changePasswordOtpInput.removeAttribute('style')
            changePasswordOtpError.innerText = ''
        }
    }
    if (newPasswordInput.value == '') {
        newPasswordInput.style = 'border-color:red'
        newPasswordError.innerText = '*Please enter password'
    }
    else {
        if (!isNaN(newPasswordInput.value)) {
            newPasswordInput.style = 'border-color:red'
            newPasswordError.innerText = '*Use only characters'
        }
        else if (newPasswordInput.value.length < 8 || newPasswordInput.value.length > 15) {
            newPasswordInput.style = 'border-color:red'
            newPasswordError.innerText = "*Password should be between 8 to 15 characters"
        }
        else {
            newPasswordInput.removeAttribute('style')
            newPasswordError.innerText = ''
        }
    }
    if (newConfirmPasswordInput.value == '') {
        newConfirmPasswordInput.style = 'border-color:red'
        newConfirmPasswordError.innerText = '*Please enter password again'
    }
    else {
        if (newConfirmPasswordInput.value !== newPasswordInput.value) {
            newConfirmPasswordInput.style = 'border-color:red'
            newConfirmPasswordError.innerText = "*Password is not matching"
        }
        else {
            newConfirmPasswordInput.removeAttribute('style')
            newConfirmPasswordError.innerText = ''
        }
    }
}

function changePasswordEmailValidate() {
    if (changePasswordEmailInput.value == '') {
        changePasswordEmailInput.style = 'border-color:red'
        changePasswordEmailError.innerText = '*Please enter email Id'
    }
    else if (changePasswordEmailInput.value.match(EmailPattern)) {
        changePasswordEmailInput.removeAttribute('style')
        changePasswordEmailError.innerText = ""
    }
    else {
        changePasswordEmailInput.style = 'border-color:red'
        changePasswordEmailError.innerText = "*Please enter a valid email id"
    }
}

function changePasswordOtpValidate() {
    if (changePasswordOtpInput.value == '') {
        changePasswordOtpInput.style = 'border-color:red'
        changePasswordOtpError.innerText = '*Please enter OTP'
    }
    else if (isNaN(changePasswordOtpInput.value)) {
        changePasswordOtpInput.style = 'border-color:red'
        changePasswordOtpError.innerText = '*Please use only numbers'
    }
    else if (changePasswordOtpInput.value.length < 4 || changePasswordOtpInput.value.length > 4) {
        changePasswordOtpInput.style = 'border-color:red'
        changePasswordOtpError.innerText = '*OTP should be of 4 digits only'
    }
    else {
        changePasswordOtpInput.removeAttribute('style')
        changePasswordOtpError.innerText = ''
    }
}

function changePasswordInputValidate() {
    if (newPasswordInput.value == '') {
        newPasswordInput.style = 'border-color:red'
        newPasswordError.innerText = '*Please enter password'
    }
    else if (!isNaN(newPasswordInput.value)) {
        newPasswordInput.style = 'border-color:red'
        newPasswordError.innerText = '*Use only characters'
    }
    else if (newPasswordInput.value.length < 8 || newPasswordInput.value.length > 15) {
        newPasswordInput.style = 'border-color:red'
        newPasswordError.innerText = "*Password should be between 8 to 15 characters"
    }
    else {
        newPasswordInput.removeAttribute('style')
        newPasswordError.innerText = ''
    }
}

function changeConfirmPasswordInputValidate() {
    if (newConfirmPasswordInput.value == '') {
        newConfirmPasswordInput.style = 'border-color:red'
        newConfirmPasswordError.innerText = '*Please enter password again'
    }
    else if (newConfirmPasswordInput.value !== newPasswordInput.value) {
        newConfirmPasswordInput.style = 'border-color:red'
        newConfirmPasswordError.innerText = "*Password is not matching"
    }
    else {
        newConfirmPasswordInput.removeAttribute('style')
        newConfirmPasswordError.innerText = ''
    }
}
// change password function end

function backToLoginClick() {
    changePasswordEmailInput.value = ''
    changePasswordEmailInput.removeAttribute('style')
    changePasswordEmailError.innerText = ''
    changePasswordOtpInput.value = ''
    changePasswordOtpInput.removeAttribute('style')
    changePasswordOtpError.innerText = ''
    newPasswordInput.value = ''
    newPasswordInput.removeAttribute('style')
    newPasswordError.innerText = ''
    newConfirmPasswordInput.value = ''
    newConfirmPasswordInput.removeAttribute('style')
    newConfirmPasswordError.innerText = ''
    document.getElementById('changePasswordDiv').style = 'display:none'
    document.title = 'Log In'
    document.getElementById('loginFormContainer').removeAttribute('style')
}


