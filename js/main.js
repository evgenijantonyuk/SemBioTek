const detailsButton = document.getElementById('detailsId')
const details = document.querySelector('.details')
const iconClose = document.querySelector('.icon__close')

detailsButton.addEventListener('click', openDetails)
iconClose.addEventListener('click', closeDetails)

function openDetails() {
    details.classList.add('show')
}
function closeDetails() {
    details.classList.remove('show')
}
