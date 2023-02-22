// Strict mode
"use strict"

// Elements
const words = ["Hello, My name is Lucas Renan", "I from Brazil, SP", "I study Information Technology", "Be welcome! ;D"]
let counter = 0
let index = 0
let currentText = ""
let letter = ""

// Function for typed effect
const typed = () => {
    const typeElement = document.getElementById("typed-text")

    currentText = words[counter]
    letter = currentText.slice(0, ++index)
    typeElement.textContent = letter
    
    if(letter.length === currentText.length) {
        counter++
        index = 0
    }
    if(counter === words.length) {
        counter = 0
    }
    setTimeout(typed, 100)
}
// Calling the function in the document
typed()