import {SORT_CODE_BY_NAME, SORT_NAME_BY_CODE} from './const/constants.js'
import {sendRequest, getAdsUrl} from './utils/net_util.js'
import {ADS_PER_PAGE} from "./config.js"

let url = window.location

if (url.search === '') {
    url.search = `?isPriceSort=${SORT_CODE_BY_NAME.get('Сначала новые')[0]}&isTimeSort=${SORT_CODE_BY_NAME.get('Сначала новые')[1]}`
}

let currentPage = Number(url.pathname.replace("/", "") === "" ? 1 :
    window.location.pathname.replace("/", ""))
let isPriceSort = new URLSearchParams(url.search).get('isPriceSort')
let isTimeSort = new URLSearchParams(url.search).get('isTimeSort')

let mainDiv = document.getElementById('main-div')
mainDiv.innerHTML += `<div class="dropdown">
                            <button id="sort-button" class="btn btn-secondary dropdown-toggle" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     ${SORT_NAME_BY_CODE.get(isPriceSort + isTimeSort)}
                            </button>
                            <div id="sort-menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            </div>`

mainDiv.innerHTML += `<div id="ads-list" class="list-group">
</div>`

mainDiv.innerHTML += `<nav aria-label="Page navigation example">
                        <ul id="pagination-bar" class="pagination">
                        </ul>
                    </nav>`

let sortMenu = document.getElementById('sort-menu')
Array.from(SORT_CODE_BY_NAME.keys()).forEach(sortType => {
    sortMenu.innerHTML += `<a class="dropdown-item" href="#">${sortType}</a>`
})

Array.from(document.getElementsByClassName('dropdown-item')).forEach((element) => {
    element.addEventListener('click', (event) => {
        let sortType = event.target.innerText
        window.location.href = `${window.location.pathname}?isPriceSort=${SORT_CODE_BY_NAME.get(sortType)[0]}&isTimeSort=${SORT_CODE_BY_NAME.get(sortType)[1]}`;
    })
})

sendRequest('GET', getAdsUrl(currentPage !== "" ? currentPage : 1,
    isPriceSort,
    isTimeSort, ADS_PER_PAGE))
    .then(data => {
        Array.from(data['message']).forEach(ad => {
            let adsList = document.getElementById('ads-list')
            adsList.innerHTML += `<a href="/ad/${ad['id']}" class="list-group-item">${ad['title']}</a>`
        })
    })
    .catch(err => window.location.href = '/internal')

sendRequest('GET', `http://localhost/adsapi/count`)
    .then(data => {
        let pagination = document.getElementById('pagination-bar')
        let pagesCount = Math.ceil(data['adsCount'] / ADS_PER_PAGE)
        if (currentPage < 1 || currentPage > pagesCount) {
            throw '404 not found'
        }
        if (currentPage - 2 >= 1) {
            pagination.innerHTML += `<li class="page-item"><a class="page-link" href="${currentPage - 1 + window.location.search}">Назад</a></li>`
            pagination.innerHTML += `<li class="page-item"><a class="page-link" href="${currentPage - 2 + window.location.search}">...</a></li>`
            pagination.innerHTML += `<li class="page-item"><a class="page-link" href="${currentPage - 1 + window.location.search}">${currentPage - 1}</a></li>`
        } else if (currentPage - 1 >= 1) {
            pagination.innerHTML += `<li class="page-item"><a class="page-link" href="${currentPage - 1 + window.location.search}">Назад</a></li>`
            pagination.innerHTML += `<li class="page-item"><a class="page-link" href="${currentPage - 1 + window.location.search}">${currentPage - 1}</a></li>`
        }
        pagination.innerHTML += `<li id="first-item" class="page-item"><a class="page-link">${currentPage}</a></li>`
        if (currentPage + 2 <= pagesCount) {
            pagination.innerHTML += `<li class="page-item"><a class="page-link" href="${currentPage + 1 + window.location.search}">${currentPage + 1}</a></li>`
            pagination.innerHTML += `<li class="page-item"><a class="page-link" href="${currentPage + 2 + window.location.search}">...</a></li>`
            pagination.innerHTML += `<li class="page-item"><a class="page-link" href="${currentPage + 1 + window.location.search}">Вперед</a></li>`
        } else if (currentPage + 1 <= pagesCount) {
            pagination.innerHTML += `<li class="page-item"><a class="page-link" href="${currentPage + 1 + window.location.search}">${currentPage + 1}</a></li>`
            pagination.innerHTML += `<li class="page-item"><a class="page-link" href="${currentPage + 1 + window.location.search}">Вперед</a></li>`
        }

    })
    .catch(err => {window.location.href = '/internal'})




