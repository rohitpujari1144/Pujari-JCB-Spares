const parseUserData = JSON.parse(sessionStorage.getItem('userLoginInfo'))


function fetchUserOrderData() {
    fetch('https://pujari-jcb-spares-order-be.onrender.com/')
        .then((response) => response.json())
        .then((data) => {
            let userOrderInfo = data.filter((e) => {
                return (e.custUsername == parseUserData[0].username)
            })
            sessionStorage.setItem('userOrderInfo', JSON.stringify(userOrderInfo))
            console.log(userOrderInfo)
        })
}
fetchUserOrderData()


function showUserProfile() {
    document.getElementById('mainDiv').innerHTML =
        `<div class="container-fluid" style="padding: 0;">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style="letter-spacing: 3px;">PUJARI JCB SPARES</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active logoutButton" aria-current="page" onclick='logoutClick()'>Log out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="userProfile"></div>

            <div id='userOrderTableDiv'></div>
        </div>`
}
showUserProfile()


document.getElementById('userProfile').innerHTML =
    `<div class="container  userProfileDiv">
        <div class="m-2" style='padding-top:5px'>
            <h3>Your Profile</h3>
        </div>
        <div class="m-3">
            <label for="nameInput" class="form-label">Name</label>
            <input type="text" class="form-control" id="nameInput" aria-describedby="emailHelp" onkeyup="nameValidate()" value='${parseUserData[0].name}' readonly>
            <span id="nameError" style="color: red;"></span>
        </div>
        <div class="m-3">
            <label for="emailIdInput" class="form-label">Email Id</label>
            <input type="text" class="form-control" id="emailIdInput" aria-describedby="emailHelp" value='${parseUserData[0].email}' readonly>
        </div>
        <div class="m-3">
            <label for="mobileInput" class="form-label">Mobile Number</label>
            <input type="text" class="form-control" id="mobileInput" aria-describedby="emailHelp" onkeyup="mobileValidate()" value='${parseUserData[0].mobile}' readonly>
            <span id="mobileError" style="color: red;"></span>
        </div>
        <div class="m-3">
            <label for="addressInput" class="form-label">Address</label>
            <input type="text" class="form-control" id="addressInput" aria-describedby="emailHelp" onkeyup="addressValidate()" value='${parseUserData[0].address}' readonly>
            <span id="addressError" style="color: red;"></span>
        </div>
        <div class="m-3">
            <label for="occupationInput" class="form-label">Occupation</label>
            <input type="text" class="form-control" id="occupationInput" aria-describedby="emailHelp" onkeyup="occupationValidate()" value='${parseUserData[0].occupation}' readonly>
            <span id="occupationError" style="color: red;"></span>
        </div>
        <div style="text-align:center;justify-content:space-evenly; padding-bottom:10px">
            <button type="button" class="btn btn-primary" id="submitButton" onclick="submitInfoButtonClick()" disabled>Submit</button>
            <button type="button" class="btn btn-primary" onclick="editInfoButtonClick()">Edit</button>
        </div>
    </div>`


document.getElementById('userOrderTableDiv').innerHTML =
    `<div class='container tableContainer'>
        <h3 class='yourOrders'>Your Orders</h3> 
        <div class="container orderTableDiv">
            <table class="table table-hover textAlign">
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
                <tbody id='tableBody'></tbody>
            </table>
        </div>
    </div>`


function showUserOrderInfo() {
const parseUserOrderInfo = JSON.parse(sessionStorage.getItem('userOrderInfo'))
    // console.log('showUserOrderinfo invoked');
    // console.log(parseUserOrderInfo);

    let today = new Date()
    let year = today.getFullYear()
    let mes = today.getMonth() + 1
    let dia = today.getDate()
    let todayDate = dia + "-" + mes + "-" + year
    let nextDate = (dia + 5) + "-" + mes + "-" + year

    for (let i = 0; i < parseUserOrderInfo.length; i++) {
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let td7 = document.createElement('td')
        let td8 = document.createElement('td')

        td1.innerText = 1
        td2.innerText = parseUserOrderInfo[i].prodName
        td3.innerText = parseUserOrderInfo[i].prodQuantity
        td4.innerText = parseUserOrderInfo[i].orderedDate
        td5.innerText = parseUserOrderInfo[i].deliveryDate
        td6.innerText = parseUserOrderInfo[i].prodPrice
        td7.innerText = parseUserOrderInfo[i].totalPrice
        td8.innerText = parseUserOrderInfo[i].paymentMode

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
        document.getElementById('tableBody').append(tr)
    }
}
showUserOrderInfo()


const nameInput = document.getElementById('nameInput')
const mobileInput = document.getElementById('mobileInput')
const addressInput = document.getElementById('addressInput')
const occupationInput = document.getElementById('occupationInput')
const nameError = document.getElementById('nameError')
const mobileError = document.getElementById('mobileError')
const addressError = document.getElementById('addressError')
const occupationError = document.getElementById('occupationError')

const submitButton = document.getElementById('submitButton')

function editInfoButtonClick() {
    nameInput.removeAttribute('readonly')
    mobileInput.removeAttribute('readonly')
    addressInput.removeAttribute('readonly')
    occupationInput.removeAttribute('readonly')
    submitButton.removeAttribute('disabled')
}


function submitInfoButtonClick() {
    if (nameInput.value == '') {
        nameError.innerText = '*Please enter name'
    }
    else {
        nameError.innerText = ''
    }
    if (mobileInput.value == '') {
        mobileError.innerText = '*Please enter mobile number'
    }
    else {
        mobileError.innerText = ''
    }
    if (addressInput.value == '') {
        addressError.innerText = '*Please enter address'
    }
    else {
        addressError.innerText = ''
    }
    if (occupationInput.value == '') {
        occupationError.innerText = '*Please enter occupation'
    }
    else {
        occupationError.innerText = ''
    }
    if (nameError.innerText == '' && mobileError.innerText == '' && addressError.innerText == '' && occupationError.innerText == '') {
        const userUpdatedData = {
            name: nameInput.value,
            mobile: mobileInput.value,
            address: addressInput.value,
            occupation: occupationInput.value
        }
        fetch(`https://pujari-jcb-spares-be.onrender.com/updateUser/${parseUserData[0].email}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userUpdatedData)
        })
            .then(response => console.log(response))
            .then((userUpdatedData) => {
                // console.log(userUpdatedData);
                alert('User information updated')
                nameInput.setAttribute('readonly', 'true')
                mobileInput.setAttribute('readonly', 'true')
                addressInput.setAttribute('readonly', 'true')
                occupationInput.setAttribute('readonly', 'true')
                submitButton.setAttribute('disabled', 'true')
            })
            .catch((error) => {
                console.log(error)
            })
    }
}


function nameValidate() {
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


function logoutClick() {
    // console.log('logoutClick invoked');
    sessionStorage.removeItem('userLoginInfo')
    sessionStorage.removeItem('userOrderInfo')
    window.close('/userProfile.html')
    window.close('index.html')
    // window.open('index.html')
}


