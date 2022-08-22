import {SORT_CODE_BY_NAME, SORT_NAME_BY_CODE} from './const/constants.js'
import {sendRequest, getAdsUrl} from './utils/net_util.js'

let form = document.getElementById('create-form');

form.addEventListener('submit', function (e) {
    let title = document.getElementById('create-title')
    let text = document.getElementById('create-text')
    let price = document.getElementById('create-price')
    let images = Array.from(document.getElementById('create-components').files)
        .map(file => file.name)
    console.log(title.value.length)
    // if (title.value.length > 10) {
    //     title.textContent = "ERROR"
    // }
    // else {
        e.preventDefault();
        sendRequest('POST', "http://localhost/adsapi/add", {
            "title": title,
            "text": text,
            "price": price,
            "images": images
        })
            .then(data => {
                console.log(data);
                window.location.href = '/downloads';
            })
            .catch(err => console.log(err))
    //}

})