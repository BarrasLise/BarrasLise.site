const counterDisplay= document.querySelector('h3');
// console.log(counterDisplay);
let counter=0;

const key= "../media/bulle.mp3";

const ring = key => {
    const audio = new Audio();
    audio.src = key ;
    audio.play();
}

const bubbleMaker = () => {

    const bubble = document.createElement("span");
    //injecter une class : 
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    //permet de générer des nombres aléatoire entre 100 et 300
    const size = Math.random() *200+100+"px";
    // console.log(size);

    //injecter du styel : 
    bubble.style.height = size;
    bubble.style.width = size;

    //Endroit ou va se créer la bulle
    bubble.style.top = Math.random() *100+50+"%";
    bubble.style.left = Math.random() *100+"%";

    //terniaire
    const plusMinus = Math.random()> 0.5 ? 1:-1;

    bubble.style.setProperty('--left', Math.random() *100+ plusMinus+"%");

    //event click => supprimer la bulle
    bubble.addEventListener('click', () => {
        counter++;
        // console.log(counter);

        //affiche la valeur de counter
        counterDisplay.textContent = counter;
        bubble.remove();
        ring(key)
        
    });

    //pour smartphone test ? ci dessus ne fonctionne pas 
    // bubble.addEventListener('touchend', () => {
    //     counter++;
    //     // console.log(counter);

    //     //affiche la valeur de counter
    //     counterDisplay.textContent = counter;
    //     bubble.remove();
    //     ring(key)
    // });


    //supprimer une bulle dans 8s
    setTimeout(() => {
        bubble.remove();
    }, 8000);
};

//inerval de 1s pour la création des bulles
setInterval(bubbleMaker, 1000)