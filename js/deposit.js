
document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputdValueById('deposit-field');
    
//get previousDeposit total by using function 
    const previousDepositTotal = getTextElementValueById('deposit-total');

//calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;


//set new deposit total("deposit-total"= where want to set "newDepositTotal"= what want to set)
    setTextElementValueById('deposit-total', newDepositTotal);

//get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set new deposit total("balance-total"= where want to set "newBalanceTotal"= what want to set)
    setTextElementValueById('balance-total', newBalanceTotal);


})

