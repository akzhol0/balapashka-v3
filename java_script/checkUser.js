if (localStorage.getItem(`User`)) {
    const us = localStorage.getItem(`User`);
    const user = JSON.parse(us);
    const userHTML = document.querySelector('.user');
    userHTML.style['display'] = 'flex';
    document.querySelector('[data-username]').textContent = user.userLogin;
    document.querySelector('.acc').style['display'] = 'none';
    document.querySelector('[data-exit-acc]').addEventListener('click', () => {
        userHTML.style['display'] = 'none';
        document.querySelector('.acc').style['display'] = 'flex';
    });
}