// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
let h1 = document.querySelector("h1");
console.log(h1);
// blue()

h1.addEventListener("click", function () {
    h1.className = "text-blue"  
})


// ### 2. Au double clique du h3, rajoute la class text-error

let h3 = document.querySelector("h3");
console.log(h3);
function error() {
    h3.className = "text-error"  
}
// error()

h3.addEventListener("click", function () {
    error()
})




// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 

let p = document.querySelector("p");

p.addEventListener("dblclick", function () {
    p.classList.toggle("text-style")
})

// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 





// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !




// classlist. toggle pour mettre si  y a pas et enlever si il y a 



