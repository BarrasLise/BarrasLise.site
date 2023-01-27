//la barre de recherche apparait ! 

let search = document.querySelector('.search_box');

document.querySelector('#search_icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
};
//l'icon menu apparait !
let navbar = document.querySelector('.navbar');

document.querySelector('#menu_icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
};
//le sous menu apparait !
function myDeroulant() {
    search.classList.remove('active');
};


//schroll et disparait
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
};


//effet sur la navbar

let header =document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

//bouton formulaire alert
function alertFonction() {
    alert("Le formulaire à été envoyé !")
};

