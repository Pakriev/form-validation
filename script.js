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

function checkPassworMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Пароли не совпадают');
    }
}

function checkEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value.trim())) {
        input.value = input.value.trim();
        showSuccess(input);
    } else {
        showError(input, 'Введите корректный e-mail');
    }
}

function checkId(input) {
    if(input.id === 'password') {
        return 'Необходимо ввести пароль';
    } else if(input.id === 'password2') {
        return 'Необходимо подтвердить пароль';
    } else if(input.id === 'email') {
        return 'Необходимо ввести e-mail';
    } else if(input.id === 'username') {
        return 'Необходимо ввести имя пользователя';
    } else {
        return;
    }
}

function checkRequired(inputArray) {
    inputArray.forEach(input => {
        if(input.value.trim() === '') {
            showError(input, checkId(input));
        } else {
            input.value = input.value.trim();
            showSuccess(input);
        }
    });

}

function checkLength(input, min, max) {
    const label = (input.id === 'username') ? 'Имя' : 'Пароль';
    if(input.value.length < min) {
        showError(input, `${label} меньше ${min} символов`);
    } else if(input.value.length > max) {
        showError(input, `${label} больше ${max} символов`);
    } else {
        showSuccess(input);
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([userName, email, password, password2]);
    checkLength(userName, 3, 15);
    checkLength(password, 6, 15);
    checkEmail(email);
    checkPassworMatch(password, password2);
});