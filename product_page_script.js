const creditCardDiv=document.getElementById('creditCardDiv')
const upiDiv=document.getElementById('upiDiv')
const productOrderDiv=document.getElementById('productOrderDiv')
const amount=document.getElementById('amount')

function placeOrderButton(){
    console.log('placeOrderButton function invoked')
    productOrderDiv.removeAttribute('style')
    document.getElementById('mainContainer').style='position:absolute; filter:blur(2px);'
}

function paymentModeSelect(){
    if(document.getElementById('paymentMode').value==='selected'){
        upiDiv.style='display:none;'
        creditCardDiv.style='display:none;'
        amount.style='display:none;'
        productOrderDiv.style='top:50%; transform: translate(-50%, -50%);'
    }
    else if(document.getElementById('paymentMode').value==='cod'){
        console.log('upi selected')
        upiDiv.style='display:none;'
        creditCardDiv.style='display:none;'
        amount.removeAttribute('style')
        productOrderDiv.style='top:50%; transform: translate(-50%, -50%);'
    }
    else if(document.getElementById('paymentMode').value==='creditCard'){
        console.log('credit Card selected')
        creditCardDiv.removeAttribute('style')
        upiDiv.style='display:none;'
        amount.style='display:none;'
        productOrderDiv.style='top:61%; transform: translate(-50%, -39%);'
    }
    else if(document.getElementById('paymentMode').value==='upi'){
        console.log('upi selected')
        upiDiv.removeAttribute('style')
        creditCardDiv.style='display:none;'
        amount.removeAttribute('style')
        productOrderDiv.style='top:52%; transform: translate(-50%, -48%);'
    }
}



// top: 10%; credit card