let counterBlock = localStorage.length;

document.querySelector('.block-container').addEventListener('click', (event) => {
    let value = Number(document.querySelector('[data-results]').textContent);
    const key = event.target;
    if (!key.classList.contains('cart-add-btn')) return;
    const closest = key.closest('.block');
    const nameBlock = closest.querySelector('[data-name]').textContent;
    const priceBlock = closest.querySelector('[data-price]').getAttribute('value');
    const imgBlock = closest.querySelector('.img-block').getAttribute('src');
    counterBlock++;
    localStorage.getItem(`UserCartObject${counterBlock}`) ? counterBlock++ : console.log();
    localStorage.getItem(`UserCartObject${counterBlock}`) ? counterBlock++ : console.log();
    localStorage.getItem(`UserCartObject${counterBlock}`) ? counterBlock++ : console.log();
    localStorage.getItem(`UserCartObject${counterBlock}`) ? counterBlock++ : console.log();
    if (localStorage.getItem(`UserCartObject${counterBlock}`)) return;

    const html =    `<div value="UserCartObject${counterBlock}" class="cart-block">
                        <div style="background-image: url(${imgBlock})" data-cart-img class="photo-cart"></div>
                        <div class="desc-cart">
                            <p data-cart-name>${nameBlock}</p>
                            <p value="${priceBlock}" data-price-cart>${priceBlock}KZT</p>
                            <button class="data-delete-cart">УДАЛИТЬ</button>
                        </div>
                    </div>`;

    document.querySelector('.cart-blocks').insertAdjacentHTML('beforeend', html);
    value += Number(priceBlock);
    document.querySelector('[data-results]').textContent = value;

    const obj = {
        id: counterBlock,
        name: nameBlock,
        price: priceBlock,
        image: imgBlock
    };
    const objectCart = JSON.stringify(obj);
    localStorage.setItem(`UserCartObject${counterBlock}`, `${objectCart}`);

    if (document.querySelector('.cart-blocks').children.length === 2) {
        document.querySelector('[data-cart-menu]').style['left'] = '0';
    };
});
console.log(123);

document.querySelector('[data-cart]').addEventListener('click', () => {
    document.querySelector('[data-cart-menu]').style['left'] = '0';
});
document.querySelector('[data-cart-close]').addEventListener('click', () => {
    document.querySelector('[data-cart-menu]').style['left'] = '-600px';
});

document.querySelector('.cart-blocks').addEventListener('click', (event) => {
    const key = event.target; 
    if (!key.classList.contains('data-delete-cart')) return;
    const closestBlock = key.closest('.cart-block');
    const objIndex = closestBlock.getAttribute('value');
    localStorage.removeItem(`${objIndex}`);

    const minus = Number(closestBlock.querySelector('[data-price-cart]').getAttribute('value'));
    let value = Number(document.querySelector('[data-results]').textContent);
    value -= minus;
    document.querySelector('[data-results]').textContent = value;
    closestBlock.remove();
});

