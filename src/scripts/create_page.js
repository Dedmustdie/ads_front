import {sendRequest} from './utils/net_util.js'

let form = document.querySelector('.form');
form.onsubmit = function (evt) {
    let errorDiv = document.getElementById('error-div')
    let title = document.getElementById('create-title')
    let text = document.getElementById('create-text')
    let price = document.getElementById('create-price')
    let images = Array.from(document.getElementById('create-images').files)
        .map(file => file.name)
    let isError = false
    errorDiv.replaceChildren()
    if (title.value.length > 100) {
        errorDiv.innerHTML += `<div id="error-text" class="alert alert-danger" role="alert">
                            Превышен максимальный размер заголовка!
                            </div>`
        isError = true
    } else if (title.value.length < 1) {
        errorDiv.innerHTML += `<div id="error-text" class="alert alert-danger" role="alert">
                            Отсутствует заголовок!
                            </div>`
        isError = true
    }

    if (text.value.length > 1000) {
        errorDiv.innerHTML += `<div id="error-text" class="alert alert-danger" role="alert">
                            Превышен максимальный размер текста!
                            </div>`
        isError = true
    } else if (text.value.length < 1) {
        errorDiv.innerHTML += `<div id="error-text" class="alert alert-danger" role="alert">
                            Отсутствует текст!
                            </div>`
        isError = true
    }

    if (price.value.length > 20) {
        errorDiv.innerHTML += `<div id="error-text" class="alert alert-danger" role="alert">
                            Превышен максимальный размер цены!
                            </div>`
        isError = true
    } else if (price.value.length < 1) {
        errorDiv.innerHTML += `<div id="error-text" class="alert alert-danger" role="alert">
                            Отсутствует цена!
                            </div>`
        isError = true
    }

    if (images.length > 3) {
        errorDiv.innerHTML += `<div id="error-text" class="alert alert-danger" role="alert">
                            Превышено максимальное количество изображений!
                            </div>`
        isError = true
    }
    if (isError) {
        evt.preventDefault();
    } else {
        sendRequest('POST', "http://localhost/adsapi/add", {
            "title": title,
            "text": text,
            "price": price,
            "images": images
        })
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
    }
}