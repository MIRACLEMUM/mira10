const body = document.getElementsByTagName('body') [0]
body.style.backgroundColor = 'green'


 const quotes = [
   "Do what you can, with what you have, where you are.", 
   "Success is not final, failure is not fatal: it is the courage to continue that counts." ,
   "Your time is limited, so dont waste it living someone elses life.",
   "Do what you can, with what you have, where you are.",
   "Dream big and dare to fail.",
   "The only way to do great work is to love what you do.",
   "Dont watch the clock; do what it does. Keep going.",
   "Difficulties in life are intended to make us better, not bitter.",
   "You miss 100% of the shots you dont take.",
   "Do something today that your future self will thank you for.",
   "Hustle in silence and let your success make the noise.",

]

const usedIndexes = new Set()
const quoteElement = document.getElementById('Quote')

function generateQuote() {
   // quoteElement.innerHTML = 'HELLO ME'
   
   const ramdomIdx = Math.floor(Math.random() * quotes.length)
   const quote = quotes[ramdomIdx]
   quoteElement.innerHTML = quote;

}