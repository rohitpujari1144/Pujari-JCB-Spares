const creditCardDiv=document.getElementById('creditCardDiv')
const upiDiv=document.getElementById('upiDiv')
const productOrderDiv=document.getElementById('productOrderDiv')
const amount=document.getElementById('amount')
const crossMark=document.getElementById('crossMark')
const mainContainer=document.getElementById('mainContainer')

function placeOrderButton(){
    console.log('placeOrderButton function invoked')
    productOrderDiv.removeAttribute('style')
    mainContainer.style='filter: blur(2px);'
}

function crossMarkClick(){
    console.log('crossMarkClick function invoked')
    productOrderDiv.style='display:none'
    mainContainer.style='filter:blur(none)'
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
        productOrderDiv.style='top:62%; transform: translate(-50%, -38%);'
    }
    else if(document.getElementById('paymentMode').value==='upi'){
        console.log('upi selected')
        upiDiv.removeAttribute('style')
        creditCardDiv.style='display:none;'
        amount.removeAttribute('style')
        productOrderDiv.style='top:52%; transform: translate(-50%, -48%);'
    }
}