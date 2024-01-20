
document.addEventListener('click', (e) => {
    if (!e.target.closest('.products__item-button')) return

    const currItems = localStorage.getItem('products')

    const id = e.target.getAttribute('data-id')
    if (!currItems) {
        localStorage.setItem('products', JSON.stringify([id]))
        return
    }
    const res = [...JSON.parse(currItems),id]
    console.log(res)
    localStorage.setItem('products', JSON.stringify([...new Set(res)]))
});



const form = document.querySelector('.js-form')
const formBtn = form.querySelector('.main-btn')
const datePicker = form.querySelector('input[type=date]')
const numberInput = form.querySelector('input[type=number')
const nameInput = form.querySelector('input[type=text]')

//Проверка на пустые значения
form.addEventListener('submit', function (event) {
    if (nameInput.value.length < 4 || nameInput.value.length > 14) {
        event.preventDefault()
        nameInput.setAttribute('style', 'border-color: red')
        alert('Имя должно содержаить не меньше 4 и не больше 14 символов')
    } else {
        nameInput.setAttribute('style', 'border-color: revert')
    }

    if (!numberInput.value) {
        event.preventDefault()
        numberInput.setAttribute('style', 'border-color: red')
        alert('Укажите количество')
    } else {
        numberInput.setAttribute('style', 'border-color: revert')
    }

    if (!datePicker.value) {
        event.preventDefault()
        datePicker.setAttribute('style', 'border-color: red')
        alert('Укажите дату')
    } else {
        datePicker.setAttribute('style', 'border-color: revert')
    }
})


//Нельзя установить количество меньше 1
numberInput.addEventListener('change', function (event) {
    if (event.target.value < 1) numberInput.value = 1
})

//Нельзя установить дату сегодня или меньше
datePicker.addEventListener('change', function (event) {
    const date1 = new Date(event.target.value).getTime()
    const date2 = new Date().getTime()

    if (date1 < date2) {
        const now = new Date();

        const day = ("0" + (now.getDate() + 1)).slice(-2);
        const month = ("0" + (now.getMonth() + 1)).slice(-2);

        const date = now.getFullYear()+"-"+(month)+"-"+(day) ;
        datePicker.value = date
    }
})