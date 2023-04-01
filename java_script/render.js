const key = document.querySelector('.wrapper').getAttribute('value');

function join(cb) {
    const http = new XMLHttpRequest();
    http.open('GET', `../json/${key}.json`);
    http.addEventListener('load', () => {
        const response = JSON.parse(http.responseText);
        cb(response)
    })
    http.send();
};

join((resp) => {
    resp.forEach((item) => { 
        const html =`<div class="block">
                        <div class="photo">
                            <img src="${item.img}" class="img-block">
                        </div>
                        <div class="description">
                            <p data-name>${item.name}</p>
                            <p data-stock>${item.stock}</p>
                            <div class="price">
                                <p value="${item.value}" data-price>${item.price}</p>
                                <p data-price-bottom>${item.priceBottom}</p>   
                            </div>
                            <p data-size>${item.size}</p>
                        </div>
                        <div title="Намите чтобы дабавить в корзину"><img class="cart-add-btn" src="../assets/images/cart.png"></div>
                    </div>`;
        document.querySelector('.block-container').insertAdjacentHTML('beforeend', html);
    });
});

