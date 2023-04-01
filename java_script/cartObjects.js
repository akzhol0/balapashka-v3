if (localStorage.length > 0) {
    let index = 1;
    for (let i = 1; i <= 100; i++) {
        const obj = localStorage.getItem(`UserCartObject${i}`);
        if (obj === null) {} else {
            const object = JSON.parse(obj);

            const html =    `<div value="UserCartObject${i}" class="cart-block">
                                <div style="background-image: url(${object.image})" data-cart-img class="photo-cart"></div>
                                <div class="desc-cart">
                                    <p data-cart-name>${object.name}</p>
                                    <p value="${object.price}" data-price-cart>${object.price}KZT</p>
                                    <button class="data-delete-cart">УДАЛИТЬ</button>
                                </div>
                            </div>`;
            document.querySelector('.cart-blocks').insertAdjacentHTML('beforeend', html);
        }
    };
    calculate();
};

function calculate() {
    let value = Number(document.querySelector('[data-results]').textContent);
    const cartBlocks = document.querySelectorAll('.cart-block');

    cartBlocks.forEach((item) => {
        const blockValue = item.querySelector('[data-price-cart]').getAttribute('value');
        value += Number(blockValue);
    });
    document.querySelector('[data-results]').textContent = value;
}