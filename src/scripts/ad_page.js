import {sendRequest, getAdUrl} from './utils/net_util.js'

let mainDiv = document.getElementById('main-div')
let url = window.location
let currentId = Number(url.pathname.replace("/ad/", ""))

mainDiv.innerHTML += `<div id="ad-content" class="list-group">

</div>`
console.log(getAdUrl(currentId,
    ['text', 'images']))
sendRequest('GET', getAdUrl(currentId,
    ['text', 'images']))
    .then(data => {
        console.log(data)
        let adContent = document.getElementById('ad-content')
        adContent.innerHTML += `<a class="list-group-item">${data['title']}</a>`
        adContent.innerHTML += `<a class="list-group-item">Описание: ${data['text']}</a>`
        adContent.innerHTML += `<a class="list-group-item">Стоимость: ${data['price']}</a>`
        adContent.innerHTML += `<img src="/images/${data['images_name'][0]}" alt="1" ><br />`;
    })
    .catch(err => console.log(err))
