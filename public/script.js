const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

const gradeOverlay = document.querySelector('.grade-overlay')
const grades = document.querySelectorAll('.grade')
const display = document.querySelector('.display')


for(let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute('id');
        window.location.href = `/video?id=${videoId}`

    })
}

for (let grade of grades) {
    grade.addEventListener("click", function () {
        const linkId = grade.getAttribute('id');
        gradeOverlay.classList.add('active');
        gradeOverlay.querySelector('iframe').src = `${linkId}`
    })
}

document.querySelector(".close-grade").addEventListener("click", function () {
    gradeOverlay.classList.remove('active')
    gradeOverlay.querySelector('iframe').src = ""
})

document.querySelector(".maximize-grade").addEventListener("click", function () {
    if (display.classList.contains('maximize')) {
        display.classList.remove('maximize')
    } else {
        display.classList.add('maximize')
    }
})