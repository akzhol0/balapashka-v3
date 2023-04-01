let userName, userLogin, userPassF, userPassS, checkName, checkLogin, checkPassF, checkPassS;
setInterval(() => {
    userName = document.querySelector('[data-name]').value;
    userLogin = document.querySelector('[data-login]').value;
    userPassF = document.querySelector('[data-pass-f]').value;
    userPassS = document.querySelector('[data-pass-s]').value;
    checkName = document.querySelector('[data-check-name]');
    checkLogin = document.querySelector('[data-check-login]');
    checkPassF = document.querySelector('[data-check-pass-f]');
    checkPassS = document.querySelector('[data-check-pass-s]');

    userName.length > 2 ? checkName.textContent = '✔' : checkName.textContent = '✖';
    userLogin.length > 4 ? checkLogin.textContent = '✔' : checkLogin.textContent = '✖';

    if (userPassF == '' && userPassS === '') {
        checkPassF.textContent = '✖'; checkPassS.textContent = '✖';   
    } else if (userPassF != userPassS) {
        checkPassF.textContent = '✖'; checkPassS.textContent = '✖';  
    } else if (userPassF === userPassS) {
        checkPassF.textContent = '✔'; checkPassS.textContent = '✔';  
    };
}, 100);

document.querySelector('[data-regs]').addEventListener('click', () => {
    const test = document.querySelector('[data-test]');

    if (userName <= 2) {
        test.textContent = 'Your name is too short';
    } else if (userLogin <= 4) {
        test.textContent = 'Your Login is too short';
    } else if (userPassF == '' && userPassS === '') {
        test.textContent = 'Passwords are empty';
    } else if (userPassF != userPassS) {
        test.textContent = "Those passwords didn't match";
    } else {
        const object = {
            userName: userName,
            userLogin: userLogin,
            userPassword: userPassF,
        };
        const userObject = JSON.stringify(object);
        localStorage.setItem('User', `${userObject}`);
        test.classList.add('successully');
        test.textContent = 'Succesfully registered';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    };
});

document.querySelectorAll('[data-eyes]').forEach((item) => {
    item.onclick = () => {
        const input = document.querySelectorAll('[data-search]');

        input.forEach((event) => {
            if (event.getAttribute('type') === 'password') {
                event.setAttribute('type', 'text');
            } else {
                event.setAttribute('type', 'password');
            };
        });
    };
});