// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
let h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
    h1.setAttribute("class", "text-blue");
    // on peut utiliser h1.className = "text-blue"
    console.log(h1.className);
})


// ### 2. Au double clique du h3, rajoute la class text-error
let h3 = document.querySelector("h3");

h3.addEventListener("click", function () {
    h3.className = "text-error";    
})

// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 
let p = document.querySelector("p");
p.addEventListener("click", function () {
    p.classList.toggle("text-style")
})


// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur lequel on clique 

let span = p.nextElementSibling.children
console.log(span);
span = Array.from(span)

span.forEach(e => {
    e.addEventListener("click", function () {
        // ici on peut utiliser e.className = ("bolder")
        // ou
        // e.classList.add("bolder")
        // ou
        e.classList.toggle("bolder")
    })
});


// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !

let span2 = p.nextElementSibling.nextElementSibling.children
span2 = Array.from(span2);

span2.forEach(e => {
    e.addEventListener("click", function () {
        span2.forEach(e => {
            e.classList.remove("bolder-red");
        });
        e.className = "bolder-red"
    })
});



