const wordElement = document.getElementById("word")
const playAgainBtn = document.getElementById("play-button")
const wrongLettersElement = document.getElementById("wrong-letters")
const popUp = document.getElementById("popup-container")
const notification = document.getElementById("notification-container")
const finalMessage = document.getElementById("final-message")
const figureParts = document.querySelectorAll(".figure-part")

const words = ["apple", "program", "orange", "hello", "abbacus", "world"]

let selectedWord = words[Math.floor(Math.random() * words.length)]

const correctLetters = []
const wrongLetters = []

function displayWord() {
    wordElement.innerHTML = `${selectedWord.split("").map(letter => `
        <span class="letter">${correctLetters.includes(letter) ? letter : ""}</span>`)
        .join("")}`
    const innerWord = wordElement.innerText.replace(/\n/g, "")

    if (innerWord === selectedWord) {
        finalMessage.innerText = "Congratulations You won!"
        popUp.style.display = "flex"
    }
}

function updateWrongLetterElement() {
    wrongLettersElement.innerHTML = `${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""} 
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}`
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length
        if (index < errors) {
            part.style.display = "block"
        }
        else {  
            part.style.display = "none"
        }
    })
    if (wrongLetters.length === figureParts.length) {
        finalMessage.innerText = "You Lost the game"
        popUp.style.display = "flex"
    }
}
function showNotification() {
    notification.classList.add("show")

    setTimeout(() => {
        notification.classList.remove("show")
    }, 3000);

}

window.addEventListener("keydown", e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter)
                displayWord()
            }
            else {
                showNotification()
            }
        }
        else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter)
                updateWrongLetterElement()
            }
            else {
                showNotification()
            }
        }
    }
})
playAgainBtn.addEventListener("click", () => {
    correctLetters.splice(0)
    wrongLetters.splice(0)
    selectedWord = words[(Math.floor(Math.random() * words.length))]
    displayWord()
    updateWrongLetterElement()
    popUp.style.display = "none"
})
displayWord()
