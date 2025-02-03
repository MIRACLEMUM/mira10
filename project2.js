const body = document.getElementsByTagName('body') [0]
body.style.backgroundColor = 'black'

const input = document.getElementById('input')

function reverseString(str) {
    return str.split("").reverse().join("")

}

function check() {
    const value = input.value
    const reverse = reverseString(value)
    //alert(value)

    if (value === reverse) {
        alert('palindrome')
    } else {
        alert('not now!')
    }

    input.value = ""

}