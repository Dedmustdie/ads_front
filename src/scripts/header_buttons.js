let createPageButton = document.getElementById('create-page-button');
createPageButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = '/create';
})