// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
let h1 = document.getElementsByTagName("h1")[0]

h1.addEventListener("dblclick", function(){
    h1.style.backgroundColor = "red";
    h1.style.color = "white"
    console.log(h1);
})

// ### 2. Au hover du h3, son texte rétrécit d'un caractère 
let h3 = document.getElementsByTagName("h3")[0]

h3.addEventListener("mouseover", function () {
    h3.innerText = h3.innerText.substring(0,h3.innerText.length-1)
})


// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir

let p = document.querySelector("p");
let body = document.querySelector("body");

// j'ai fait une variante avec mouseover plutôt que click
p.addEventListener("mouseover", function () {
    if (body.className != "blue" ) {
        body.className = "blue"
    }
    else[
        body.className = " "
    ]
})


