let input = document.querySelector("input[name='guess_input']");
let guessMessage = document.querySelector('.input_button_message');
let label_child = document.querySelector('.label_PTag');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function startButton(){
    let doc = document.createTextNode("Guess a number between "+1 + " and "+ 10);
    disablerAndEnabler()
    console.log(label_child.textContent)
    label_child.appendChild(doc)
}

let randomNumber = getRandomInt(1, 10);
function guessButton(){
    document.onclick = input.value
    if (parseInt(input.value) === randomNumber) {
        console.log(input.value)
        displayCorrectGuess()
    }
    else if (parseInt(input.value) !== randomNumber) {
        displayWrongGuess()
        console.log("and random is: " + randomNumber);
    }
}
function disablerAndEnabler(){
    input.disabled = false;
}

function displayCorrectGuess() {
    let message = document.querySelector('.message')
    message.innerHTML = "Congratulations you are correct"
}
function displayWrongGuess() {
    let message = document.querySelector('.message')
    message.innerHTML = "Incorrect"
}

function quit(){

}

function restart(){

}