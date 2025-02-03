const body = document.getElementsByTagName('body') [0]

//body.style.backgroundColor = 'green'

function setColor(name) {
    body.style.backgroundColor = name;
}

//setColor('blue')
//setColor('purple')

function randomColor() {
    const Red = Math.round(Math.random() * 255)
    const Green = Math.round(Math.random() * 255)
    const Blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;


}

randomColor()