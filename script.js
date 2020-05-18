const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList = 'form-control error';
    const small = formControl.querySelector('small');
    small.textContent = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList = 'form-control success';
}

function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if(userName.value === '') {
        showError(userName, 'Требуется ввести имя пользователя');

    } else {
        showSuccess(userName);
    }

    if(email.value === '') {
        showError(email, 'Требуется ввести e-mail');

    } else if(!isValidEmail(email.value)) {
        showError(email, 'Введите корректный e-mail');
    }
    else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'Требуется ввести пароль');

    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showError(password2, 'Требуется подтвердить пароль');

    } else {
        showSuccess(password2);
    }
    
});