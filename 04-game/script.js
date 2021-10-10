const board = document.querySelector('#board')
const SQUARE_NUMBERS = 600
const colors = [`#F9C8CB`,'#EB81A2','#D194AE','EC707B','D770A2',`#CB2F70`,`#99326D`]

for (let i = 0; i < SQUARE_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add(`square`)

    square.addEventListener('mouseover',() => {
        setColor(square)
    square.addEventListener('mouseleave',() => {
        removeColor(square)
    })
    })
    board.append(square)
}

function setColor(e) {
    const color = getRandomColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(e) {
    e.style.backgroundColor = '#1d1d1d'
    e.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(e) {
    const index = Math.floor(Math.random()* colors.length)
    return colors[index]
}