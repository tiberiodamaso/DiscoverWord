const game = new DiscoverWord();
const start = document.querySelector('#start');
const time = document.querySelector('#time');
const word = document.querySelector('#word');
const numLetters = document.querySelector('#numLetters');
const matchLetters = document.querySelector("#matchLetters");
const guessWord = document.querySelector("#guessWord");
const tryBtn = document.querySelector("#tryBtn");

start.addEventListener('click', startGame);
word.addEventListener('input', checkLetter);
tryBtn.addEventListener('click', ()=> {
    game.checkWord(guessWord.value);
});
console.log(guessWord.value);
function startGame() {
    game.pickOne();
    numLetters.innerText = game.countLetters();
    
    decreaseTime();

    // console.log(word);
    // console.log(wordNumLetters);
    // console.log(wordLetters);
}

function checkLetter(e) {
    let letter = e.data;
    console.log(e);
    console.log(game.word);
    console.log(letter);
    if (game.word.includes(letter)) {
        matchLetters.innerText += letter;
    }
    
}

function decreaseTime() {

    let intervalId = setInterval(() => {
        game.time --;
        time.innerText = game.time;
        // console.log(game.time);
        if (game.time === 0) {
            clearInterval(intervalId);
        }
    }, 1000)

    
}

// TODO Terminar a funcão giveHint
// TODO Montar o dicionário de palavras
// TODO Consertar a função checckLetter para funcionar dentro da classe
// TODO Frontend
// TODO Pensar na lógica de um botão de dica que se usado perde alguns segundos
// TODO Lógica para subir de level