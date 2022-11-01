const game = new DiscoverWord();
const start = document.querySelectorAll('.start');
const numLetters = document.querySelector('#numLetters');

const tryBtn = document.querySelector("#tryBtn");
const guessWord = document.querySelector("#guessWord");
const attempts = document.querySelector("#attempts");

const h1 = document.querySelector('#h1');
const h2 = document.querySelector('#h2');
const h3 = document.querySelector('#h3');
const dicas = document.querySelectorAll('.hint');
const timer = document.querySelector('#timer'); 
const close = document.querySelector('#close');
const modalResult = new bootstrap.Modal('#modalResult', {});


start.forEach((element, index) => {
    element.addEventListener('click', ()=>{
        
        if (index === 0) {
            const selectedWord = game.pickOne();
            document.querySelector('main').classList.remove('d-none');
            document.querySelector('.info').classList.add('d-none');
            attempts.innerHTML = game.attempts;
            console.log(selectedWord.word); 
            numLetters.innerText = selectedWord.word.length;
            category.innerText = selectedWord.category;
            game.setTimer();
        } else {
            const selectedWord = game.pickOne();
            game.attempts = 3;
            game.timeCounter = 60;
            attempts.innerHTML = game.attempts;
            console.log(selectedWord.word); 
            numLetters.innerText = selectedWord.word.length;
            category.innerText = selectedWord.category;
            document.querySelector('.dicas').classList.add('invisible');
            matchLetters.innerHTML = '';
            wrongLetters.innerHTML = '';
            game.setTimer();
        }
        
        // palavra sorteada
    
        // número de tentativas
    })
});


guessWord.addEventListener('input', (event)=>{
    game.checkLetter(event.data);
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

dicas.forEach(dica => {
    dica.addEventListener('click', () => {
        game.decreaseTime(10);
        if (dica.nextElementSibling.id === 'h1') {
            dica.nextElementSibling.innerText = game.selectedWord.h1;
        }
        if (dica.nextElementSibling.id === 'h2') {
            dica.nextElementSibling.innerText = game.selectedWord.h2;
        }
        if (dica.nextElementSibling.id === 'h3') {
            dica.nextElementSibling.innerText = game.selectedWord.h3;
        }
    })
});

close.addEventListener('click', () => {
    location.reload();
});


// TODO Terminar a funcão giveHint
// TODO Montar o dicionário de palavras
// TODO Consertar a função checckLetter para funcionar dentro da classe
// TODO Frontend
// TODO Pensar na lógica de um botão de dica que se usado perde alguns segundos
// TODO Lógica para subir de level