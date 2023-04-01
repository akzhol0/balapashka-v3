const burgerMenu = document.querySelector('.burger-menu');
document.querySelector('.acc').addEventListener('click', () => {
    burgerMenu.style['right'] = '0';
});
document.querySelector('.btn-close').addEventListener('click', () => {
    burgerMenu.style['right'] = '-500px';
});

document.querySelector('[data-login-main]').addEventListener('click', () => {
    if (localStorage.length === 0) check.textContent = "Wrong login or password";
    if (localStorage.length > 0) {
        const login = document.querySelector('[data-login]').value;
        const password = document.querySelector('[data-password]').value;
        const userHTML = document.querySelector('.user');
        const check = document.querySelector('#check');

        const us = localStorage.getItem(`User`);
        const user = JSON.parse(us);

        if (login === user.userLogin && password === user.userPassword) {
            userHTML.style['display'] = 'flex';
            burgerMenu.style['right'] = '-500px';
            document.querySelector('[data-username]').textContent = user.userLogin;
            document.querySelector('.acc').style['display'] = 'none';
            check.textContent = '';
        } else {
            check.textContent = 'Wrong login or password';
        }
    }
});

document.querySelector('[data-eye]').onclick = () => {
    const pass = document.querySelector('[data-password]');
    if (pass.getAttribute('type') === 'password') {
        pass.setAttribute('type', 'text');
    } else {
        pass.setAttribute('type', 'password');
    }
}