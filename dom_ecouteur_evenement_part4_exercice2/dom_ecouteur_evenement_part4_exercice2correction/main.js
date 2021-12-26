//1
let h1 = document.querySelector('h1')

h1.addEventListener('dblclick', function(){
    h1.style.backgroundColor = 'red'
    h1.style.color = 'white'
})

//2
let h3 = document.querySelector('h3')

h3.addEventListener('mouseover', function(){
    h3.innerText = h3.innerText.substr(0, h3.innerText.length-1)
})

//3
let p = h3.nextElementSibling

p.addEventListener('click', function(){
    if (p.className != 'blue') {
        p.className = 'blue'
    } else if (p.className == 'blue') {
        p.className = ' '
    }
})
