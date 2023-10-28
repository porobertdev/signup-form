const passBox = document.querySelector('#password');
const passConfirmBox = document.querySelector('#confirm_password');
const passError = document.querySelector('span.error');

passConfirmBox.addEventListener('input', checkPass);

function checkPass(event) {
    const inputs = [passBox, passConfirmBox];

    if (passConfirmBox.value != passBox.value) {
        inputs.forEach( input => input.classList.add('error'));
        passError.textContent = `* Passwords don't match`;
    } else {
        inputs.forEach( input => input.classList.remove('error'));
        passError.textContent = '';
    }

    // (passBox.value != passConfirmBox.value) ? inputs.forEach( input => input.classList.add('error')) : inputs.forEach( input => input.classList.remove('error'));


}