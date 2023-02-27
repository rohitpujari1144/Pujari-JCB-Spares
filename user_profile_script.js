function showUserInfo() {
    const nameInput = document.getElementById('nameInput')
    const emailIdInput = document.getElementById('emailIdInput')
    const mobileInput = document.getElementById('mobileInput')
    const addressInput = document.getElementById('addressInput')
    const occupationInput = document.getElementById('occupationInput')
    const submitButton = document.getElementById('submitButton')

    let parseData = JSON.parse(sessionStorage.getItem('userInfo'))

    document.getElementById('userInfo').innerHTML =
        `
            <div class="container m-3 userProfileDiv">
                <h3 class="m-2 heading">Your Profile</h3>
                <div class="m-3">
                    <label for="nameInput" class="form-label heading">Name</label>
                    <input type="email" class="form-control" id="nameInput" aria-describedby="emailHelp" onkeyup="nameValidate()" value='${parseData[0].name}' readonly>
                    <span id="nameError" style="color: red;"></span>
                </div>
                <div class="m-3">
                    <label for="emailIdInput" class="form-label heading">Email Id</label>
                    <input type="email" class="form-control" id="emailIdInput" aria-describedby="emailHelp" value='${userInfo[0].email}' readonly>
                </div>
                <div class="m-3">
                    <label for="mobileInput" class="form-label heading">Mobile Number</label>
                    <input type="email" class="form-control" id="mobileInput" aria-describedby="emailHelp" onkeyup="mobileValidate()" value='${userInfo[0].mobile_number}' readonly>
                    <span id="mobileError" style="color: red;"></span>
                </div>
                <div class="m-3">
                    <label for="addressInput" class="form-label heading">Address</label>
                    <input type="email" class="form-control" id="addressInput" aria-describedby="emailHelp" onkeyup="addressValidate()" value='${userInfo[0].address}' readonly>
                    <span id="addressError" style="color: red;"></span>
                </div>
                <div class="m-3">
                    <label for="occupationInput" class="form-label heading">Occupation</label>
                    <input type="email" class="form-control" id="occupationInput" aria-describedby="emailHelp" onkeyup="occupationValidate()" value='${userInfo[0].occupation}' readonly>
                    <span id="occupationError" style="color: red;"></span>
                </div>
                <div style="text-align:center" class="mb-2">
                    <button type="button" class="btn btn-primary" style="margin-right: 10px;" id="submitButton" onclick="submitInfoButtonClick()" disabled>Submit</button>
                    <button type="button" class="btn btn-primary" onclick="editInfoButtonClick()">Edit</button>
                </div>
            </div>
            `
}

// fetch('https://63c91acb320a0c4c9540abbc.mockapi.io/users')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         let userInfo = data.filter((e) => {
//             return (e.id == 1)
//         })
//         console.log(userInfo)
//         sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
//         console.log(sessionStorage.getItem('userInfo'))
//         document.getElementById('userInfo').innerHTML =
//             `
//             <div class="container m-3 userProfileDiv">
//                 <h3 class="m-2 heading">Your Profile</h3>
//                 <div class="m-3">
//                     <label for="nameInput" class="form-label heading">Name</label>
//                     <input type="email" class="form-control" id="nameInput" aria-describedby="emailHelp" onkeyup="nameValidate()" value='${userInfo[0].name}' readonly>
//                     <span id="nameError" style="color: red;"></span>
//                 </div>
//                 <div class="m-3">
//                     <label for="emailIdInput" class="form-label heading">Email Id</label>
//                     <input type="email" class="form-control" id="emailIdInput" aria-describedby="emailHelp" value='${userInfo[0].email}' readonly>
//                 </div>
//                 <div class="m-3">
//                     <label for="mobileInput" class="form-label heading">Mobile Number</label>
//                     <input type="email" class="form-control" id="mobileInput" aria-describedby="emailHelp" onkeyup="mobileValidate()" value='${userInfo[0].mobile_number}' readonly>
//                     <span id="mobileError" style="color: red;"></span>
//                 </div>
//                 <div class="m-3">
//                     <label for="addressInput" class="form-label heading">Address</label>
//                     <input type="email" class="form-control" id="addressInput" aria-describedby="emailHelp" onkeyup="addressValidate()" value='${userInfo[0].address}' readonly>
//                     <span id="addressError" style="color: red;"></span>
//                 </div>
//                 <div class="m-3">
//                     <label for="occupationInput" class="form-label heading">Occupation</label>
//                     <input type="email" class="form-control" id="occupationInput" aria-describedby="emailHelp" onkeyup="occupationValidate()" value='${userInfo[0].occupation}' readonly>
//                     <span id="occupationError" style="color: red;"></span>
//                 </div>
//                 <div style="text-align:center" class="mb-2">
//                     <button type="button" class="btn btn-primary" style="margin-right: 10px;" id="submitButton" onclick="submitInfoButtonClick()" disabled>Submit</button>
//                     <button type="button" class="btn btn-primary" onclick="editInfoButtonClick()">Edit</button>
//                 </div>
//             </div>
//             `
//     })

// user profile information function start
function editInfoButtonClick() {
    const nameInput = document.getElementById('nameInput')
    const emailIdInput = document.getElementById('emailIdInput')
    const mobileInput = document.getElementById('mobileInput')
    const addressInput = document.getElementById('addressInput')
    const occupationInput = document.getElementById('occupationInput')
    const submitButton = document.getElementById('submitButton')

    // console.log('editInfoButtonClick function invoked')
    nameInput.removeAttribute('readonly')
    mobileInput.removeAttribute('readonly')
    addressInput.removeAttribute('readonly')
    occupationInput.removeAttribute('readonly')
    submitButton.removeAttribute('disabled')
}

function submitInfoButtonClick() {
    // console.log('submitInfoButtonClick function invoked')
    if (nameInput.value == '') {
        nameError.innerText = '*Please enter name'
    }
    if (mobileInput.value == '') {
        mobileError.innerText = '*Please enter mobile number'
    }
    if (addressInput.value == '') {
        addressError.innerText = '*Please enter address'
    }
    if (occupationInput.value == '') {
        occupationError.innerText = '*Please enter occupation'
    }
    if (nameError.innerText == '' && mobileError.innerText == '' && addressError.innerText == '' && occupationError.innerText == '') {
        const submitButton = document.getElementById('submitButton')

        const editedUserInfo = {
            name: nameInput.value,
            mobile_number: mobileInput.value,
            address: addressInput.value,
            occupation: occupationInput
        }

        fetch('https://63c91acb320a0c4c9540abbc.mockapi.io/users', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editedUserInfo)
        })
            .then((response) => response.json())
            .then((editedUserInfo) => {
                console.log('Success : ', editedUserInfo)
            })
            .catch((error) => {
                console.log('Error : ', error)
            })

        alert('Information successfully sumbitted')

        nameInput.setAttribute('readonly', 'true')
        mobileInput.setAttribute('readonly', 'true')
        addressInput.setAttribute('readonly', 'true')
        occupationInput.setAttribute('readonly', 'true')
        submitButton.setAttribute('disabled', 'true')
    }
}

function nameValidate() {
    const nameInput = document.getElementById('nameInput')
    const nameError = document.getElementById('nameError')

    // console.log('nameValidate function invoked')
    if (nameInput.value == '') {
        nameError.innerText = '*Please enter name'
    }
    else if (!isNaN(nameInput.value)) {
        nameError.innerText = '*Please use only characters'
    }
    else if (nameInput.value.length < 3) {
        nameError.innerText = '*Please enter a valid name'
    }
    else {
        nameError.innerText = ''
    }
}

function mobileValidate() {
    const mobileInput = document.getElementById('mobileInput')
    const mobileError = document.getElementById('mobileError')

    if (mobileInput.value == '') {
        mobileError.innerText = '*Please enter mobile number'
    }
    else if (isNaN(mobileInput.value)) {
        mobileError.innerText = '*Please use only numbers'
    }
    else if (mobileInput.value.length < 10 || mobileInput.value.length > 10) {
        mobileError.innerText = '*Mobile number should be of 10 digits'
    }
    else {
        mobileError.innerText = ''
    }
}

function addressValidate() {
    const addressInput = document.getElementById('addressInput')
    const addressError = document.getElementById('addressError')

    if (addressInput.value == '') {
        addressError.innerText = '*Please enter address'
    }
    else if (addressInput.value.length < 10) {
        addressError.innerText = '*Please enter a valid address'
    }
    else {
        addressError.innerText = ''
    }
}

function occupationValidate() {
    const occupationInput = document.getElementById('occupationInput')
    const occupationError = document.getElementById('occupationError')

    if (occupationInput.value == '') {
        occupationError.innerText = '*Please enter occupation'
    }
    else if (!isNaN(occupationInput.value)) {
        occupationError.innerText = '*Please use only characters'
    }
    else if (occupationInput.value.length < 5) {
        occupationError.innerText = '*Please enter a valid occupation'
    }
    else {
        occupationError.innerText = ''
    }
}
// user profile information function end

function logOutButtonClick() {
    sessionStorage.removeItem('userInfo')
    window.open('./index.html')
}