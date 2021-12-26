let carre = document.querySelector('#carre')

let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    if (carre.className == 'red') {
        carre.className = 'blue'
    } else {
        carre.className = 'red'
    }
})

