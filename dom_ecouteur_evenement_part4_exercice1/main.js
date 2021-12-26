// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Récupère le h1 dans une variable 

let h1 = document.querySelector("h1");


// ### 2. Créer un programme qui met le texte du h1 en bleu

// h1.className = "blue"

// ### 3. Met ce programme dans une function

function couleur() {
    h1.className = "blue"
}



// ### 4. Appelle cette function pour qu'elle soit executé 

// couleur()


// ### 5. Met un écouteur d'événement sur le h1, qui au clique lance la function

h1.addEventListener("click", function () {
    couleur()
    
} )


