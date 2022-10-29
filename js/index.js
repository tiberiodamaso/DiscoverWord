const game = new DiscoverWord();
const start = document.querySelector('#start');
const numLetters = document.querySelector('#numLetters');
const category = document.querySelector('#category');
const tryBtn = document.querySelector("#tryBtn");
const guessWord = document.querySelector("#guessWord");
const attempts = document.querySelector("#attempts");



const h1 = document.querySelector('#h1');
const h2 = document.querySelector('#h2');
const h3 = document.querySelector('#h3');



start.addEventListener('click', ()=>{
    const selectedWord = game.pickOne();
    
    // palavra sorteada
    console.log(selectedWord.word); 
    
    numLetters.innerText = selectedWord.word.length;
    category.innerText = selectedWord.category;

    // número de tentativas
    attempts.innerHTML = game.attempts;

    // esconder pelo CSS
    h1.innerText = selectedWord.h1;
    h2.innerText = selectedWord.h2;
    h3.innerText = selectedWord.h3;

    
    game.setTimer();
});


guessWord.addEventListener('input', (event)=>{
    game.checkLetter(event.data);   
});


tryBtn.addEventListener('click', ()=> {
    game.checkWord(guessWord.value);
    attempts.innerHTML = game.attempts;
});




/*

//const word = document.querySelector('#word');
//const matchLetters = document.querySelector("#matchLetters");
//const guessWord = document.querySelector("#guessWord");
//const tryBtn = document.querySelector("#tryBtn");

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

*/



// TODO Terminar a funcão giveHint
// TODO Montar o dicionário de palavras
// TODO Consertar a função checckLetter para funcionar dentro da classe
// TODO Frontend
// TODO Pensar na lógica de um botão de dica que se usado perde alguns segundos
// TODO Lógica para subir de level