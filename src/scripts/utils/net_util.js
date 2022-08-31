import {REQUEST_URL} from "../const/constants.js"

function sendRequest(method, url, isAsync = true, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url, isAsync)

        if (isAsync) {
            xhr.responseType = 'json'
        }

        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

function getAdsUrl(currentPage, isPriceSort, isTimeSort, perPage) {
    let url = new URL(REQUEST_URL)
    url.pathname = url.pathname + `/ads/${currentPage !== "" ? currentPage : 1}`
    url.searchParams.set('isPriceSort', isPriceSort)
    url.searchParams.set('isTimeSort', isTimeSort)
    url.searchParams.set('perPage', perPage)
    return url
}

function getCreateUrl() {
    let url = new URL(REQUEST_URL)
    url.pathname = url.pathname + '/add'
    return url
}

function getCountUrl() {
    let url = new URL(REQUEST_URL)
    url.pathname = url.pathname + '/count'
    return url
}

function getAdUrl(id, additionalFields) {
    let url = new URL(REQUEST_URL)
    url.pathname = url.pathname + `/ad/${id}`
    if (additionalFields.includes('text')) {
        url.searchParams.append("fields[]", 'text')
    }
    if (additionalFields.includes('images')) {
        url.searchParams.append('fields[]', 'images')
    }
    return decodeURIComponent(url)
}

export {sendRequest, getAdsUrl, getAdUrl, getCreateUrl, getCountUrl}