// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Récupère le h1 dans une variable 

let h1 = document.getElementsByTagName("h1")[0];
console.log(h1);
// ### 2. Créer un programme qui met le texte du h1 en bleu

// 3 manière de faire !!!!!!!
// h1.style.color = "blue"
// h1.className = "blue"
// h1.setAttribute("class", "blue")

// ### 3. Met ce programme dans une function
function color() {
    h1.style.color = "blue" 
}

// ### 4. Appelle cette function pour qu'elle soit executé 
// color()

// ### 5. Met un écouteur d'événement sur le h1, qui au clique lance la function

h1.addEventListener("click", color)
