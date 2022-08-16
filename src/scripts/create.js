import {SORT_CODE_BY_NAME, SORT_NAME_BY_CODE} from './const/constants.js'
import {sendRequest, getAdsUrl} from './utils/net_util.js'

let form = document.getElementById('create-form');
localStorage.setItem('recent-image', Array.from(document.getElementById('create-images').files))

form.addEventListener('submit', function (e) {
    e.preventDefault();
    sendRequest('POST', "http://localhost/adsapi/add", {
        "title": document.getElementById('create-title').value,
        "text": document.getElementById('create-text').value,
        "price": document.getElementById('create-price').value,
        "images": Array.from(document.getElementById('create-images').files)
            .map(file => file.name)
    })
        .then(data => {
            const reader = new FileReader()
            // reader.addEventListener('load', () => {
            //     localStorage.setItem('recent-image', reader.result)
            // })

            // Array.from(document.getElementById('create-images').files)
            //     .forEach(file => {
                    localStorage.setItem('recent-image', Array.from(document.getElementById('create-images').files))

                // })
            // //y.froArram(files).forEach(file => data.append(file.name, file))
            // var fileInput = document.getElementById('create-images');
            // sendImages('POST', "http://localhost/adsapi/addimages",
            //     document.getElementById('create-images').files)
            //     .then(data => {
            console.log(data);
            //window.location.href = `/1?isPriceSort=${SORT_CODE_BY_NAME.get('Сначала новые')[0]}&isTimeSort=${SORT_CODE_BY_NAME.get('Сначала новые')[1]}`;
            // })
        })
        .catch(err => console.log(err))

})

function sendImages(method, url, files) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.setRequestHeader('Content-Type', 'multipart/form-data')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        var data = new FormData()
        console.log(files)
        data.append("fgwefw", files[0])
        data.append("wfe", "1")
        console.log(data)
        xhr.send(data)
    })
}