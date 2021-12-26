let myH1 = document.querySelector('h1');



// Juste une fonction :)
let monInstruction =() =>{
    console.log("Hello")
}



// Ou est ce qu'on veut mettre notre écouteur d'événement ? 
// Quelle type d'écouteur d'évément ? 
// Quelle function je lance ?
// Methode 1
myH1.addEventListener('click', monInstruction);

// Methode 2
// myH1.addEventListener('click', () =>{
//     console.log("Hello")
// });



