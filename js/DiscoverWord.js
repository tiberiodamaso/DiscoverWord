class DiscoverWord {
    
    constructor () {
        
        this.player = "";
        this.attempts = 3;
        this.timeCounter = 60;
        this.selectedWord = '';

        this.wordList = [
            {
                word: "actor",
                category: "person",
                h1: "Someone who pretends to be someone else while performing in a film, play, or television or radio programme",
                h2: "Disguised individual, who knows how to pretend",
                h3: "Can work in television and theater",
                level: "1"
            },
            {
                word: "apple",
                category: "fruit",
                h1: "Name of the fruit offered to Snow White",
                h2: "Fruit that fell on Isaac Newton's head when he was sitting under a tree",
                h3: "Symbol of a technology company",
                level: "1"
            },
            {
                word: "blue",
                category: "color",
                h1: "Sky color",
                h2: "Color of the sea",
                h3: "One of the Google logo colors",
                level: "1"
            }

        ]
    }

    
    pickOne() {
        // filtrar pelo level (?)
        
        this.selectedWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        return this.selectedWord
    }

    setTimer() {
        const timer = document.querySelector('#timer'); 

        const intervalId = setInterval(() => {        
            this.timeCounter--;           
            timer.innerText = this.timeCounter

            if (this.timeCounter === 0) {
                clearInterval(intervalId);

                console.log("GAME OVER!");
            }            
        }, 1000); 
    }


    decreaseTime(seconds){        
        this.timeCounter -= seconds;
        this.gameMessage("perdeu 5 segundos");
    }

    increaseTime(seconds){        
        this.timeCounter += seconds;
        this.gameMessage("ganhou 5 segundos!");
    }


    checkLetter(letter) {
        const matchLetters = document.querySelector("#matchLetters");
        
        // Se a letra digitada existe na palavra qu foi sorteada
        // E se a letra já foi digitada anteriormente
        if (this.selectedWord.word.includes(letter) && !matchLetters.innerText.includes(letter)) {
            
            // se acertou uma letra da palavra, ganha 5 segundos
            this.increaseTime(5);
            matchLetters.innerText += letter;
        };       
    }

    checkWord(word) {    
        
        // diminuir o numero de tentativas
        this.attempts--
                
        if (word === this.selectedWord.word) {
            // mostrar a resposta certa  

            // tela com a palavra selecionada e botão jogar de novo

            console.log('acertou a palavra!');
        } 
        else 
        {
            console.log('errou a palavra!'); 

            // se errou a palavra, perde 5 segundos
            this.decreaseTime(5); 

            // checar o status
            this.gameSatus();           
        }
    }

    
    gameMessage(msg){
        const message = document.querySelector("#message");

        message.innerText = msg;
        setTimeout(()=>{
            message.innerText = "";
        },500);
    }

    gameSatus(){
        // Se acabaram as tentativas, game over        
        if (this.attempts === 0) {
            // mostra tela com informações da palavra selecionada e botão jogar de novo
                        
            console.log("GAME OVER!")
        }
    }
    
}


/*
wordList = [
    {
        word: "",
        category: "",
        h1: "",
        h2: "",
        level: ""
    },
    {
        word: "",
        category: "",
        h1: "",
        h2: "",
        level: ""
    }
]
*/