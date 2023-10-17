const open = document.querySelector('.icon-menu');
const nav = document.querySelector('.nav-bar');
const close = document.querySelector('.main-container');
const btnClose = document.querySelector('.close img');

open.addEventListener('click', () =>{
    nav.classList.add('translate-x');
})

btnClose.addEventListener('click', () =>{
    nav.classList.remove('translate-x');
})


// Récupération des éléments nécessaires du DOM
const imagePrincipale = document.querySelector('.image-product-1');
const miniatures = document.querySelectorAll('.products-image');

// Ajout d'un gestionnaire d'événement à chaque miniature d'image
miniatures.forEach((miniature, index) => {
  miniature.addEventListener('click', () => {
    // Mise à jour l'image principale avec la miniature cliquée
    imagePrincipale.src = `./images/image-product-${index + 1}.jpg`;

    // Changer le texte alternatif de l'image principale 
    imagePrincipale.alt = `products-item${index + 1}`;
  });
});


Element.nextElementSibling
Element.previousElementSibling
Element.parentElement
Element.children[0]

