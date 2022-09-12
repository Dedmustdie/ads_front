import {sendRequest, getAdUrl} from './utils/net_util.js'

let mainDiv = document.getElementById('main-div')
let url = window.location

mainDiv.innerHTML += `<div id="ad-content" class="list-group">

</div>`
sendRequest('GET', getAdUrl(Number(url.pathname.replace('/ad/', '')),
    ['text', 'images']))
    .then(data => {
        let adContent = document.getElementById('ad-content')
        adContent.innerHTML += `<a class="list-group-item">${data['title']}</a>`
        adContent.innerHTML += `<a class="list-group-item">Описание: ${data['text']}</a>`
        adContent.innerHTML += `<a class="list-group-item">Стоимость: ${data['price']}</a>`
        Array.from(data['images_name']).forEach(name => {
            adContent.innerHTML += `<img src="/images/${name}"  alt=""><br />`
        })
    })
    .catch(err => window.location.href = '/internal')
