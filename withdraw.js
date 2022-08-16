document.getElementById('button-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAMountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAMountString);

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Enter a valid number')
        return;
    }



    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawToitalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawToitalString);



    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You Dont have Enough Amount');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


})