
//1
let h1 = document.querySelector('h1')

h1.addEventListener('click', function(){
    h1.className = 'text-blue'
})

//2
let h3 = document.querySelector('h3')

h3.addEventListener('dblclick', function(){
    h3.className = 'text-error'
})

//3
let p = document.querySelector('p')

// p.addEventListener('click', function(){
//     if (p.className != 'text-style') {
//         p.className = 'text-style'
//     } else {
//         p.className = ''
//     }
// })

p.addEventListener('click', function(){
    p.classList.toggle('text-style')
})

//4
let span = p.nextElementSibling.children

span = Array.from(span)

span.forEach(element => {
    element.addEventListener('click', function(){
        element.classList.add('bolder')
    })
});

//5
let spanlast = document.querySelectorAll('p')[2].querySelectorAll('span')

spanlast.forEach(e => {
    e.addEventListener('click', function(){
        spanlast.forEach(element => {
            element.classList.remove('bolder-red')
        });
        e.className = 'bolder-red'
    })
});