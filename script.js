


// forget password start
function changePasswordClick() {
    const changePasswordOtpInput = document.getElementById('changePasswordOtpInput')
    const newPasswordInput = document.getElementById('newPasswordInput')
    const newConfirmPasswordInput = document.getElementById('newConfirmPasswordInput')
    const changePasswordEmailInput = document.getElementById('changePasswordEmailInput')
    const changePasswordOtpError = document.getElementById('changePasswordOtpError')
    const newPasswordError = document.getElementById('newPasswordError')
    const newConfirmPasswordError = document.getElementById('newConfirmPasswordError')
    const changePasswordEmailError = document.getElementById('changePasswordEmailError')

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
    const changePasswordEmailInput = document.getElementById('changePasswordEmailInput')
    const changePasswordEmailError = document.getElementById('changePasswordEmailError')
    const EmailPattern = /^[^]+@[^]+\.[A-zZ]{2,3}$/

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

function backToLoginClick() {
    document.getElementById('forgetPasswordDiv').style = 'display:none'
    showLoginDiv()
}

function forgerPasswordClick() {
    document.title = 'Forget Password'
    document.getElementById('loginDiv').style = 'display:none'
    document.getElementById('forgetPasswordDiv').style = 'display:block'
    document.getElementById('forgetPasswordDiv').innerHTML =
        `
            <div class="container changePasswordDiv" id="changePasswordDiv">
                <div class="m-3">
                    <label for="changePasswordEmailInput" class="form-label">Email Id</label>
                    <input type="text" class="form-control" id="changePasswordEmailInput" aria-describedby="emailHelp" autocomplete="off" onkeyup="changePasswordEmailValidate()">
                    <span id="changePasswordEmailError" style="color: red;"></span>
                </div>
                <div class="m-3">
                    <label for="changePasswordOtpInput" class="form-label">Enter OTP</label>
                    <input type="text" class="form-control" id="changePasswordOtpInput" aria-describedby="emailHelp" autocomplete="off" onkeyup="changePasswordOtpValidate()">
                    <span id="changePasswordOtpError" style="color: red;"></span>
                </div>
                <div class="m-3">
                    <label for="newPasswordInput" class="form-label">New Password</label>
                    <input type="text" class="form-control" id="newPasswordInput" aria-describedby="emailHelp" autocomplete="off" onkeyup="changePasswordInputValidate()">
                    <span id="newPasswordError" style="color: red;"></span>
                </div>
                <div class="m-3">
                    <label for="newConfirmPasswordInput" class="form-label">Confirm Password</label>
                    <input type="text" class="form-control" id="newConfirmPasswordInput" aria-describedby="emailHelp" autocomplete="off" onkeyup="changeConfirmPasswordInputValidate()">
                    <span id="newConfirmPasswordError" style="color: red;"></span>
                </div>
                <div class="m-4" style="text-align: center;">
                    <button type="button" class="btn btn-outline-success" onclick="changePasswordClick()">Change Password</button>
                </div>
                <div class="mb-4" style="text-align: center;">
                    <h6><a class="createAccount" href="#loginFormContainer" onclick="backToLoginClick()">back to login</a></h6>
                </div>
            </div>
        `
}
// forget password end


// new account creation start
function signUpInfoValidate() {
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

    // console.log('signUpInfoValidate invoked');

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
                                showLoginDiv()
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
    const EmailPattern = /^[^]+@[^]+\.[A-zZ]{2,3}$/

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

function loginHereClick() {
    console.log('loginHereClick invoked');
    document.getElementById('newAccountCreateDiv').style = 'display:none'
    showLoginDiv()
}

function createAccountClick() {
    document.title = 'Sign Up'
    console.log('createAccountClick invoked');
    document.getElementById('loginDiv').style = 'display:none'
    document.getElementById('newAccountCreateDiv').style = 'display:block'
    document.getElementById('newAccountCreateDiv').innerHTML =
        `
            <div class="container signUpDiv" id="signUpDiv">
                <h4 class="mt-3 signUp">Sign Up</h4>

                <div class="m-2">
                    <label for="signUpNameInput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="signUpNameInput" aria-describedby="emailHelp" autocomplete="off" onkeyup="signUpNameValidate()">
                    <span id="signUpNameError" style="color: red;"></span>
                </div>

                <div class="m-2">
                    <label for="signUpEmailIdInput" class="form-label">Email Id</label>
                    <input type="text" class="form-control" id="signUpEmailIdInput" aria-describedby="emailHelp" autocomplete="off" onkeyup="signUpEmailIdValidate()">
                    <span id="signUpEmailIdError" style="color: red;"></span>
                </div>

                <div class="m-2">
                    <label for="signUpUsernameInput" class="form-label">Username</label>
                    <input type="text" class="form-control" id="signUpUsernameInput" aria-describedby="emailHelp" autocomplete="off" onkeyup="signUpUsernameValidate()">
                    <span id="signUpUsernameError" style="color: red;"></span>
                </div>

                <div class="m-2">
                    <label for="signUpPasswordInput" class="form-label">Password</label>
                    <input type="password" class="form-control" id="signUpPasswordInput" aria-describedby="emailHelp" autocomplete="off" onkeyup="signUpPasswordValidate()">
                    <span id="signUpPasswordError" style="color: red;"></span>
                </div>

                <div class="m-2">
                    <label for="signUpCPasswordInput" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="signUpCPasswordInput" aria-describedby="emailHelp" autocomplete="off" onkeyup="signUpCPasswordValidate()">
                    <span id="signUpCPasswordError" style="color: red;"></span>
                </div>

                <div class="m-4 LoginButtonDiv" style="text-align: center;">
                    <button type="button" class="btn btn-outline-success" onclick="signUpInfoValidate()">Register</button>
                </div>

                <div class="mb-4" style="text-align: center;">
                    <h6>already have an account ? <a class="createAccount" href="#loginFormContainer" onclick="loginHereClick()">login here</a></h6>
                </div>
            </div>
        `
}
// new account creation end


// function after successful login start
function showHomepage() {
    let serviceList = [
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

    // console.log('showHomepage invoked');
    document.title = 'Pujari JCB Spares'
    document.body.setAttribute('style', 'bodyStyle.css')
    document.getElementById('navbarElem').innerHTML +=
        `
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#showContactDiv">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a target="_blank" class="nav-link myProfileButton" onclick='myProfileButtonClick()'>My Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link logOutButton" onclick='logoutButtonClick()'>Log out</a>
                    </li>
                </ul>
            </div>
        `

    document.getElementById('sliderAndServices').innerHTML =
        `
            <div style="display: flex;">
                <!-- sliding window div start -->
                <div id="carouselExampleControls" class="carousel slide m-3 slidingImagesDiv" data-bs-ride="carousel">
                    <div class="carousel-inner" style="width: 100%; height:100%">
                        <div class="carousel-item active" style="width: 100%; height:100%">
                            <img src="./Images/JCB slide_1.png" class="d-block w-100 img-fluid slidingImage" alt="...">
                        </div>
                        <div class="carousel-item active" style="width: 100%; height:100%">
                            <img src="./Images/JCB slide_2.png" class="d-block w-100 img-fluid slidingImage" alt="...">
                        </div>
                        <div class="carousel-item active" style="width: 100%; height:100%">
                            <img src="./Images/JCB slide_3.png" class="d-block w-100 img-fluid slidingImage" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <!-- sliding window div end -->
                <!-- our services div start -->
                <div class="m-3 ourServicesDiv">
                    <h3 class="m-3 ourProductsHeading">Our Services : </h3>
                    <div id="serviceList"></div>
                </div>
                <!-- our services div end -->
            </div>
        `

    document.querySelector('#serviceList').innerHTML =
        `
            <ol>
                <li class="serviceTitle">JCB Seal Kits :</li>
                    <ul>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list1}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list2}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list3}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list4}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list5}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list6}</a></li>
                    </ul>
                <li class="serviceTitle mt-2">Hose Pipes :</li> 
                    <ul>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list7}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list8}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list9}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list10}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list11}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list12}</a></li>
                    </ul>
                <li class="serviceTitle mt-2">JCB Lubricants :</li>
                    <ul>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list13}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list14}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list15}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list16}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list17}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list18}</a></li>
                    </ul>
                <li class="serviceTitle mt-2">Filters :</li>
                    <ul>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list19}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list20}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list21}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list22}</a></li>
                    </ul>
                <li class="serviceTitle mt-2">Bucket Teeth :</li>
                    <ul>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list23}</a></li>
                        <li class="serviceParts hoverClass"><a  style="text-decoration: none; color:blue">${serviceList[0].list24}</a></li>
                    </ul>
                <li class="serviceTitle mt-2">Wear Parts :</li>
                    <ul>
                        <li class="serviceParts hoverClass"><a style="text-decoration: none; color:blue">${serviceList[0].list25}</a></li>
                        <li class="serviceParts hoverClass"><a style="text-decoration: none; color:blue">${serviceList[0].list26}</a></li>
                        <li class="serviceParts hoverClass"><a style="text-decoration: none; color:blue">${serviceList[0].list27}</a></li>
                        <li class="serviceParts hoverClass"><a style="text-decoration: none; color:blue">${serviceList[0].list28}</a></li>
                    </ul>    
            </ol>
        `

    fetch('https://63c91acb320a0c4c9540abbc.mockapi.io/product_information')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((elem) => {
                document.getElementById('demoDivOne').innerHTML +=
                    `
                        <div class="card m-3 productDiv" id="hydraulicCylinderSealKit">
                            <img src='./${elem.productImage}' class="card-img-top" alt="${elem.productName}" style="border-radius: 7px;">
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
                                <button class="btn btn-outline-primary" onclick='openProductOrderDiv(${elem.productId})'>Order</button>
                            </div>
                        </div>
                    `
            })
        })

    document.getElementById('showContactDiv').innerHTML =
        `
            <div class="contactDiv" id="contactDiv">
                <i class="fa-solid fa-location-dot iconFont m-2"><span class="contacts"> PUJARI JCB SPARES, Plot No. 15, Jaysingpur MIDC, Jaysingpur, Maharashtra</span></i> <br>
                <i class="fa-solid fa-envelope iconFont  m-2"><span class="contacts"> pujarijcbspares@gmail.com</span></i><br>
                <i class="fa-solid fa-phone iconFont  m-2"><span class="contacts"> 02322 235 856</span></i>
            </div>
        `
}
// function after successful login end


function myProfileButtonClick() {
    window.open('/userProfile.html')
}


// login div start
function logInInfoValidate() {
    const logInUsernameInput = document.getElementById('logInUsernameInput')
    const logInPasswordInput = document.getElementById('logInPasswordInput')

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
                        logInUsernameInput.value = ''
                        logInPasswordInput.value = ''
                        document.getElementById('loginDiv').style = 'display:none'
                        showHomepage()
                    }
                    else {
                        // alert('wrong password')
                        logInPasswordInput.style = 'border-color:red'
                        logInPasswordError.innerText = "*Incorrect Password"
                    }
                }
                else {
                    // alert('Incorrect username')
                    logInUsernameInput.style = 'border-color:red'
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

function showLoginDiv() {
    document.title = 'Log In'
    document.getElementById('loginDiv').style = 'display:block'
    document.getElementById('loginDiv').innerHTML =
        `<div class="container loginFormContainer" id="loginFormContainer">
            <div class="mt-3 LogIn">
                <h4 style="text-align: center;">Log In</h4>
            </div>

            <div class="m-2">
                <label for="logInUsernameInput" class="form-label">Username</label>
                <input type="text" class="form-control" id="logInUsernameInput" aria-describedby="emailHelp" autocomplete="off" onkeyup="loginUsernameValidate()">
                <span id="logInUsernameError" style="color: red;"></span>
            </div>

            <div class="m-2">
                <label for="logInPasswordInput" class="form-label">Password</label>
                <input type="password" class="form-control" id="logInPasswordInput" aria-describedby="emailHelp" autocomplete="off" onkeyup="loginPasswordValidate()">
                <span id="logInPasswordError" style="color: red;"></span>
            </div>

            <div class="m-4 LoginButtonDiv" style="text-align: center;">
                <button type="button" class="btn btn-outline-success" onclick="logInInfoValidate()">Log In</button>
            </div>

            <h6 style="text-align:center">forget password ? <a class="forgetPassword" onclick="forgerPasswordClick()">click here</a></h6>

            <div class="mb-4" style="text-align: center;">
                <h6>new user ? <a class="createAccount" href="#signUpDiv" onclick="createAccountClick()">create an account</a></h6>
            </div>
        </div>`
}
showLoginDiv()
// login div end

function logoutButtonClick() {
    // console.log('logoutButtonClick invoked');
    sessionStorage.removeItem('userLoginInfo')
    sessionStorage.removeItem('productInformation')
    window.close(this)
    window.close('userprofile.html')
    window.open('index.html')
}


