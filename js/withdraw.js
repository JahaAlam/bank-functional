//add withdraw button event hadler
//get withdraw amount by using getElementById function
//get previous withdraw value using  getTextElementValueById function
//calculate new withdraw total and set the value
// set new withdraw total by using setTextElementValueById function
//get previous balance total
//set balance total Using setTextElementValue function

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputdValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

    //console.log(newWithdrawTotal);

    
})






