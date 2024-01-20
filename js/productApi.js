const products = [
    {
        id: 1,
        name: 'Смартфон Apple Iphone 8 64GB Gold',
        rating: 5,
        reviews: 10,
        price: '56 890',
        old_price: '56 990',
        img: 'img/Iphone 8_image.png'
    },
    {
        id: 2,
        name: 'Смартфон Samsung Galaxy S8 64GB Black',
        rating: 4.5,
        reviews: 12,
        price: '49 990',
        old_price: '54 990',
        img: 'img/samsung-galaxy-s8-event-live.png'
    },
    {
        id: 3,
        name: 'Смартфон Huawei Honor 9 64GB Blue',
        rating: 4,
        reviews: 8,
        price: '26 990',
        old_price: null,
        img: 'img/huawei.png'
    },
    {
        id: 4,
        name: 'Смартфон ASUS ZenFone 4 Max ZC554KL 16GB Black',
        rating: 3,
        reviews: 5,
        price: '13 990',
        old_price: null,
        img: 'img/Asus-Zenfone-4-Max-ZC554KL-Octa-Core-1.png'
    }, {
        id: 5,
        name: 'Смартфон Apple Iphone 8 64GB Gold',
        rating: 5,
        reviews: 10,
        price: '56 890',
        old_price: '56 990',
        img: 'img/Iphone 8_image.png'
    },
    {
        id: 6,
        name: 'Смартфон Samsung Galaxy S8 64GB Black',
        rating: 4.5,
        reviews: 12,
        price: '49 990',
        old_price: '54 990',
        img: 'img/samsung-galaxy-s8-event-live.png'
    },
    {
        id: 7,
        name: 'Смартфон Huawei Honor 9 64GB Blue',
        rating: 4,
        reviews: 8,
        price: '26 990',
        old_price: null,
        img: 'img/huawei.png'
    },
    {
        id: 8,
        name: 'Смартфон ASUS ZenFone 4 Max ZC554KL 16GB Black',
        rating: 3,
        reviews: 5,
        price: '13 990',
        old_price: null,
        img: 'img/Asus-Zenfone-4-Max-ZC554KL-Octa-Core-1.png'
    }
]

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 1000)
    })
}

const fetchProducts = async () => {
    const data = await getProducts()
    const products = document.querySelector('.products__list')

    for (let i = 0; i < data.length; i++) {
        products.insertAdjacentHTML('beforeend', `
         <div class="products__item swiper-slide">
            <span class="pin">Хит</span>
            <a href='./product.html?id=${data[i].id}'>
            <div class="img-block">
                <img src='${data[i].img}' class="products__item-image"/>
            </div>
            </a>
            <a href='./product.html?id=${data[i].id}'>
            <div class="products__item-title">${data[i].name}</div>    
            </a> 
            <div class="products__item-rating">
                 <div class="stars">
                    ${stars(data[i].rating)}
                </div>
                <div class="reviews">${data[i].reviews} отзывов</div>
            </div>
            <div class="price">
                <div class="new-price">${data[i].price} ₽</div>
                <div class="old-price">${data[i].old_price ? data[i].old_price + ' ₽' : ''}</div>
            </div>
            <div class="in-stock"><img src="img/available.svg" class="available">В наличии</div>
            <div class="products__item-footer">
                <button class="products__item-button" data-id=${data[i].id}>В корзину</button>
                <img src="img/comparison_icon.svg" alt="comparsion" class="comparsion">
                <img src="img/favorite_icon.svg" alt="favorite" class="favorite">
            </div>
         </div>`
        )
    }
    document.querySelector('.products-loader').style.display = 'none'
}

const fetchSingleProduct = async  () => {
    const data = await getProducts()

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')

    const product = data.find(item => item.id == id)

    document.querySelector('.product-block').style.display = 'flex'
    document.querySelector('.products-loader').style.display = 'none'

    if (!product || !id) {
        document.querySelector('.product-block').innerHTML = 'Не найдено'
        return
    }

    document.querySelector('.product-img').src = product.img

    document.querySelector('.category-title').insertAdjacentHTML('beforeend', product.name)

    document.querySelector('.product-reviews').insertAdjacentHTML('beforeend', `${product.reviews} отзывов`)

    document.querySelector('.stars').insertAdjacentHTML('beforeend', stars(product.rating))

    document.querySelector('.new-price').insertAdjacentHTML('beforeend', product.price + '₽')

    document.querySelector('.old-price').insertAdjacentHTML('beforeend', `${product.old_price ? product.old_price + ' ₽' : ''}`)

    document.querySelector('.products__item-button').dataset.id = product.id
}


const fetchCart = async () => {
    const data = await getProducts()
    const cartItems = JSON.parse(localStorage.getItem('products'))

    if (!cartItems || !cartItems.length) {
        document.querySelector('.cart-list').innerHTML = 'Пусто'
        return
    }

    cartItems.forEach(element => {
        const product = data.find(item => element == item.id)

        document.querySelector('.cart-list').insertAdjacentHTML('beforeend',
            `<div class='cart-item'>
                <img class='cart-item-img' src='${product.img}'/>
                <div class='cart-item-title'>${product.name}</div>
            </div>`
        )
    });
    document.querySelector('.products-loader').style.display = 'none'
}


const stars = (rating) => {
    let counter = rating
    let html = ``
    for (let i = 1; i <= 5; i++) {
        let star
        if (counter >= 1) star = 'img/star.png'
        else if (counter > 0) star = 'img/half-star.png'
        else star = 'img/empty-star.png'
        html += `<img src='${star}' class='star'/>`
        counter--
    }
    return html
}
