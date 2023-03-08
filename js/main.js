// Carrousel début

let check = document.querySelectorAll('.check')
let nbrcheck = check.length
let etape = 2

function enleverCheckedImg() {
  for (let i = 0; i < nbrcheck; i++)
    check[i].removeAttribute('checked', 'checked')
}

let retour = document.querySelector('#retour')
let avancer = document.querySelector('#avancer')

avancer.addEventListener('click', function () {
  etape++
  enleverCheckedImg()
  check[etape].setAttribute('checked', 'checked')
  if (etape === 5) {
    avancer.hidden = true
  }
  if (etape === 1) {
    retour.hidden = false
  }
})

retour.addEventListener('click', function () {
  etape--
  enleverCheckedImg()
  check[etape].setAttribute('checked', 'checked')
  if (etape === 0) {
    retour.hidden = true
  }
  if (etape === 4) {
    avancer.hidden = false
  }

})

// Carrousel fin

// Modal Setup
let modal = document.getElementById('modal');

let modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function () {
  modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) {
  if (e.target.className.indexOf('modal-target') !== -1) {
    let img = e.target;
    let modalImg = document.getElementById("modal-content");
    let captionText = document.getElementById("modal-caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }
});

/* Sélection des éléments HTML */
let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})

//Effet apparition de page

const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const handleIntersect = function (entries, observer){
      entries.forEach( function (entry){
        if (entry.intersectionRatio > ratio){
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
}


const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
  observer.observe(r)
})
