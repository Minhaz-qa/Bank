//step-1: add click event handler with the submit button
document.getElementById('button-submit').addEventListener('click', function () {
    //step-2: get the emil id inside the email imput
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3 get password
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    // WARNING:  DO NOT VERUFY email password on the client side 
    // step-4: verify email and pass valid user or not
    if (email === 'rifat.giedoha@gmail.com' && password === 'Rifat') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Email And Password Not Matching')
    }
})