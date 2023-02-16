document.getElementById('btn-deposit').addEventListener('click', function () {

    let inputField = document.getElementById('user-deposit')
    let newDepositValue = parseFloat(inputField.value);

    if(isNaN(newDepositValue)){
        alert('Please Provide a valid Amount');
        inputField.value = '';
        return;
    }

    let depositField = document.getElementById('deposit-amount');
    let preDepositValue = parseFloat(depositField.innerText);

    let currentValue = preDepositValue + newDepositValue;

    depositField.innerText = newDepositValue;


    inputField.value = '';

    // balance

    let balance = document.getElementById('balance-amount');
    let balanceValue = parseFloat(balance.innerText);

    let currentBalance = newDepositValue + balanceValue;

    balance.innerText = currentBalance;

});

document.getElementById('btn-withdraw').addEventListener('click', function () {

    // withdraw

    let inputFieldWithdraw = document.getElementById('user-withdraw')
    let newWithdrawValue = parseFloat(inputFieldWithdraw.value);

    if(isNaN(newWithdrawValue)){
        alert('Please Provide a valid Number');
        inputFieldWithdraw.value = '';
        return;
    }

    let withdrawField = document.getElementById('withdraw-amount');
    let preWithdrawValue = parseFloat(withdrawField.innerText);

    withdrawField.innerText = newWithdrawValue;

    inputFieldWithdraw.value = '';


    // balance

    let balance = document.getElementById('balance-amount');
    let balanceValue = parseFloat(balance.innerText);

    if (newWithdrawValue > balanceValue) {
        alert('You have not this amount of balance');
        withdrawField.innerText= '00';
    }
    else {
        let currentBalance = balanceValue - newWithdrawValue;

        balance.innerText = currentBalance;
    }


})