import {getCreateUrl, sendRequest} from './utils/net_util.js'
import {TITLE_MAX_LENGTH, TEXT_MAX_LENGTH, PRICE_MAX_LENGTH, IMAGES_MAX_COUNT} from "./config.js"

let form = document.querySelector('.form')
form.onsubmit = function (evt) {
    let errorDiv = document.getElementById('error-div')
    let title = document.getElementById('create-title')
    let text = document.getElementById('create-text')
    let price = document.getElementById('create-price')
    let images = Array.from(document.getElementById('create-images').files)
        .map(file => file.name)
    let isError = false
    errorDiv.replaceChildren()
    if (title.value.length > TITLE_MAX_LENGTH) {
        makeMistakeHtml('Превышен максимальный размер заголовка!', errorDiv)
        isError = true
    } else if (title.value.length < 1) {
        makeMistakeHtml('Отсутствует заголовок!', errorDiv)
        isError = true
    }

    if (text.value.length > TEXT_MAX_LENGTH) {
        makeMistakeHtml('Превышен максимальный размер текста!', errorDiv)
        isError = true
    } else if (text.value.length < 1) {
        makeMistakeHtml('Отсутствует текст!', errorDiv)
        isError = true
    }

    if (price.value.length > PRICE_MAX_LENGTH) {
        makeMistakeHtml('Превышен максимальный размер цены!', errorDiv)
        isError = true
    } else if (price.value.length < 1) {
        makeMistakeHtml('Отсутствует цена!', errorDiv)
        isError = true
    } else if (!(/^(0|[1-9]\d*)(\.[0-9]{1,2})?$/.test(price.value))) {
        makeMistakeHtml('Неверный формат цены!', errorDiv)
        isError = true
    }
    if (images.length > IMAGES_MAX_COUNT) {
        makeMistakeHtml('Превышено максимальное количество изображений!', errorDiv)
        isError = true
    }
    if (isError) {
        evt.preventDefault()
    } else {
        sendRequest('POST', getCreateUrl(), false,{
            "title": title.value,
            "text": text.value,
            "price": price.value,
            "images": images
        })
            .catch(err => {
                evt.preventDefault()
                window.location.href = '/internal'
            })
    }
}

function makeMistakeHtml(mistakeText, errorDiv) {
    errorDiv.innerHTML += `<div id="error-text" class="alert alert-danger" role="alert">` +
        mistakeText +
        `</div>`

}