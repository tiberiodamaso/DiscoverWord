const game = new DiscoverWord();
const start = document.querySelector('.start');
const playAgain = document.querySelector('#playAgain');
const numLetters = document.querySelector('#numLetters');

const tryBtn = document.querySelector("#tryBtn");
const guessWord = document.querySelector("#guessWord");
const attempts = document.querySelector("#attempts");

const h1 = document.querySelector('#h1');
const h2 = document.querySelector('#h2');
const h3 = document.querySelector('#h3');
const hints = document.querySelectorAll('.hint');
const timer = document.querySelector('#timer'); 
const close = document.querySelector('#close');
const modalResult = new bootstrap.Modal('#modalResult', {});


start.addEventListener('click', ()=>{
        
    const selectedWord = game.pickOne();
    document.querySelector('main').classList.remove('d-none');
    document.querySelector('.info').classList.add('d-none');
    attempts.innerHTML = game.attempts;
    console.log(selectedWord.word); 
    numLetters.innerText = selectedWord.word.length;
    category.innerText = selectedWord.category;
    game.setTimer();
        // } else {
        //     const selectedWord = game.pickOne();
        //     game.attempts = 3;
        //     game.timeCounter = 60;
        //     attempts.innerHTML = game.attempts;
        //     console.log(selectedWord.word); 
        //     numLetters.innerText = selectedWord.word.length;
        //     category.innerText = selectedWord.category;
        //     document.querySelector('.dicas').classList.add('invisible');
        //     matchLetters.innerHTML = '';
        //     wrongLetters.innerHTML = '';
        //     game.setTimer();
        // }
        
        // palavra sorteada
    
        // número de tentativas
});


guessWord.addEventListener('input', (event)=>{
    if (event.data !== null){
        game.checkLetter(event.data);
    }
    
});

guessWord.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        game.checkWord(guessWord.value);
        attempts.innerHTML = game.attempts;
    } 
});


tryBtn.addEventListener('click', ()=> {
    game.checkWord(guessWord.value);
    attempts.innerHTML = game.attempts;
});

hints.forEach(hint => {
    hint.addEventListener('click', () => {
        game.decreaseTime(10);
        if (hint.nextElementSibling.id === 'h1') {
            hint.nextElementSibling.innerText = game.selectedWord.h1;
        }
        if (hint.nextElementSibling.id === 'h2') {
            hint.nextElementSibling.innerText = game.selectedWord.h2;
        }
        if (hint.nextElementSibling.id === 'h3') {
            hint.nextElementSibling.innerText = game.selectedWord.h3;
        }
    })
});

close.addEventListener('click', () => {
    location.reload();
});

playAgain.addEventListener('click', () => {
    game.start();
    game.clearAll();
});



// TODO Terminar a funcão giveHint
// TODO Montar o dicionário de palavras
// TODO Consertar a função checckLetter para funcionar dentro da classe
// TODO Frontend
// TODO Pensar na lógica de um botão de dica que se usado perde alguns segundos
// TODO Lógica para subir de level