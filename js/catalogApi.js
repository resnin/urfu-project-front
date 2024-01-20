const categories = [
    {
        id: 1,
        name: 'Компьютеры',
        quantity: 393,
        img: 'img/computer.png'
    },
    {
        id: 2,
        name: 'Смартфоны',
        quantity: 245,
        img: 'img/samsung-galaxy-s8-event-live.png'
    },
    {
        id: 3,
        name: 'Камеры',
        quantity: 456,
        img: 'img/camera.png'
    },
    {
        id: 4,
        name: 'Автотовары',
        quantity: 128,
        img: 'img/car-camera.png'
    },
    {
        id: 5,
        name: 'Аудио',
        quantity: 197,
        img: 'img/headphones.png'
    },
    {
        id: 6,
        name: 'Бытовая техника',
        quantity: 86,
        img: 'img/wash.png'
    },
    {
        id: 7,
        name: 'ТВ',
        quantity: 92,
        img: 'img/tv.jpg'
    },
    {
        id: 8,
        name: 'Инструменты',
        quantity: 104,
        img: 'img/tool.png'
    },
]

const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(categories), 1000)
    })
}

const fetchCategories = async () => {
    const data = await getCategories()
    const catalog = document.querySelector('.catalog__list')

    for (let i = 0; i < data.length; i++) {
        catalog.insertAdjacentHTML('beforeend', `
        <a href='#'>
         <div class="catalog__item">
            <img src='${data[i].img}' class="catalog__item-image" alt="${data[i].name}">
            <div class="catalog__item-title">${data[i].name}</div>     
            <p class="catalog__item-quantity">${data[i].quantity}</p>
            <img src="img/arrow-mobile.png" alt="arrow" class="arrow-mobile">
         </div>
        </a>`
         
        )
    }
    document.querySelector('.catalog-loader').style.display = 'none'
    document.querySelector('.catalog-button').style.display = 'flex'
}