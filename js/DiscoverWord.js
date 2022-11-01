class DiscoverWord {
    
    constructor () {
        
        this.player = "";
        this.attempts = 3;
        this.timeCounter = 90;
        this.selectedWord = '';
        this.wordArray = [];
        this.intervalId = 0;

        this.wordList = [
            {
                word: "acceptable",
                category: "adjective",
                h1: "describes something that meets the minimum expectation, and, generally, needs improving.",
                h2: "is sometimes used as a kinder or more polite way to describe something as somewhat unsatisfactory",
                h3: "describe things that are satisfactory",
                level: "1",
                definition: `1 - capable or worthy of being accepted.
                            2 - pleasing to the receiver; satisfactory; agreeable; welcome.
                            3 - meeting only minimum requirements; barely adequate.
                            4 - capable of being endured; tolerable.`
            },
            {
                word: "cheugy",
                category: "slang",
                h1: "had originally been used as trendy slang on TikTok",
                h2: "is used to accuse someone of being out of touch or a poser",
                h3: "a lot of the uses of the word are ironic and self-referential",
                level: "1",
                definition: 'is a slang adjective mocking someone or something as uncool they are out of touch with current trends or trying too hard to be trendy. Similar slang terms are basic or normie. The word cheugy is often used ironically.'
            },
            {
                word: "zoomies",
                category: "slang",
                h1: "my dog always seems to get the ______ when I come home from work and starts bouncing off the furniture",
                h2: "is a slang term used by people describing their pets’ bursts of frantic activity, especially when such activity is humorous",
                h3: "There is nothing funnier than watching a tiny dog have zero traction ____ on a hardwood floor",
                level: "1",
                definition: 'is a slang term for a sudden burst of hyperactivity by a dog, cat, or other animal—such as rapidly running back and forth or in circles. The term is typically applied to pets, as opposed to wild animals.'
            },
            {
                word: "mantrum",
                category: "slang",
                h1: "is a blend of the words man and tantrum",
                h2: "can be used more generally to criticize childish behavior from adult males",
                h3: "is often used more pointedly to expose double standards about the ways male and female emotions get treated in society",
                level: "1",
                definition: 'In general, the term is used to mock adult males perceived to be acting childish or overly emotional in some way. More specifically, mantrum is used to call out double standards that woman are more often criticized as being emotional than men are, and that displays of strong emotion from women are more often penalized in society than they are for men.'
            },
            {
                word: "bestow",
                category: "adjective",
                h1: "To give as a gift",
                h2: "to give something to someone",
                h3: "Giving, providing and supplying",
                level: "1",
                definition: `1 - to present as a gift; give; confer (usually followed by on or upon):
                                 The trophy was bestowed upon the winner.`
            },
            {
                word: "cacophony",
                category: "noun",
                h1: "A harsh, unpleasant mixture of noise",
                h2: "The cuckoo clock shop lets off a _________ every hour.",
                h3: "An unpleasant mixture of loud sounds",
                level: "1",
                definition: `1 - harsh discordance of sound; dissonance
                             2 - a discordant and meaningless mixture of sounds
                             3 - Music. frequent use of discords of a harshness and relationship difficult to understand.`
            },
            {
                word: "disrupt",
                category: "verb",
                h1: "To interrupt by causing a disturbance",
                h2: "to cause disorder or turmoil",
                h3: "It's time to ________ your old business model.",
                level: "1",
                definition: `1 - to destroy, usually temporarily, the normal continuance or unity of; interrupt
                             2 - to break apart
                             3 - Business. to radically change (an industry, business strategy, etc.), as by introducing a new product or service that creates a new market`
            },
            {
                word: "sickening",
                category: "slang",
                h1: "commonly used to compliment people, especially drag queens",
                h2: "One notable group that has adopted this word are young female fans of K-pop on social media",
                h3: "literally means “disgusting,” that is, something that makes you sick. But this word joins many other slang terms that invert a negative meaning into a positive one",
                level: "1",
                definition: `Originating in and popularized by drag culture, sickening means “amazing,” “wonderful,” or “excellent.” It is especially used to compliment a drag queen as looking “extremely attractive” or “flawless.”`
            },
            {
                word: "epitome",
                category: "noun",
                h1: "A perfect example of something.",
                h2: "the typical or highest example of a stated quality",
                h3: "He is the _______ of goodness",
                level: "1",
                definition: `1 - a person or thing that is typical of or possesses to a high degree the features of a whole class
                             2 - a condensed account, especially of a literary work; abstract.`
            },
            {
                word: "moots",
                category: "slang",
                h1: "In the singular form can be a vulgar slang for 'vagina' in Austrália",
                h2: "is a shortening and phonetic respelling of mutual follower",
                h3: "became particularly popular among avid fans of K-pop around 2017 and has spread ever since.",
                level: "1",
                definition: `In internet slang, moots is short for mutual followers, referring to people who follow and generally actively engage with each other on social media.
                Moots is also commonly found in its singular form, moot. People active on social media often consider their moots as internet friends.`
            },
            {
                word: "feasible",
                category: "adjective",
                h1: "Possible to do",
                h2: "Able to be made, done, or achieved",
                h3: "With the extra resources, the project now seems __________.",
                level: "1",
                definition: `1 - capable of being done, effected, or accomplished
                             2 - probable; likely
                             3 - suitable`
            },
            {
                word: "scrutinize",
                category: "verb",
                h1: "To very carefully examine",
                h2: "To examine in detail with careful or critical attention.",
                h3: "The judges were looking for perfection, so they ___________ every entry.",
                level: "1",
                definition: `1 - To examine in detail with careful or critical attention.`
            },
            {
                word: "dissemble",
                category: "verb",
                h1: "is used more often, and generally suggests a focus on appearances, either your own or that of something else",
                h2: "often suggests a focus on language—using language and speech in such a way as to hide the truth",
                h3: "means to give a misleading impression of something, or to conceal the truth of it",
                level: "1",
                definition: `means to change your appearance in order to conceal your identity. It can also mean to cover something up by misrepresenting it—essentially, by making it look different than it really is`
            },
            {
                word: "witty",
                category: "adjective",
                h1: "describes someone who is good at making other people laugh, or tends to behave in a way that amuses other people",
                h2: "is a synonym of funny",
                h3: "describes a specific way of being funny, where you use cleverness and insightfulness to express yourself",
                level: "1",
                definition: `describes someone who has a lot of wit—they’re perceptive and clever, and use those skills to amuse people`
            },
            {
                word: "tuition",
                category: "noun",
                h1: "The fee for instruction at a school.",
                h2: "Teaching or instruction, as of pupils",
                h3: "College _________ prices have gone up in recent decades.",
                level: "1",
                definition: `1 - the charge or fee for instruction, as at a private school or a college or university
                             2 - teaching or instruction, as of pupils:`
            }
            

        ]
    }

    
    pickOne() {

        
        this.selectedWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        this.createWordArray();
        // localStorage.setItem("palavraSelecionada", this.selectedWord.word);
        return this.selectedWord;
    }

    


    setTimer() {
        
        this.intervalId = setInterval(() => {        
            this.timeCounter--;           
            timer.innerText = this.timeCounter

            if (this.timeCounter === 0) {
                clearInterval(this.intervalId);
                let title = 'Você perdeu';
                let word = this.selectedWord.word;
                let msg = this.selectedWord.definition;
                this.callModal(title, word, msg);
                // document.querySelector('#modal-title').innerHTML = `<i class="bi bi-emoji-frown-fill px-3"></i>Seu tempo acabou!`;
                // document.querySelector('#message').innerText = 'Você perdeu.';
                // console.log("GAME OVER!");
            }            
        }, 1000);
    }


    decreaseTime(seconds){        
        document.querySelector('#timer').classList.add('text-bg-danger');
        this.timeCounter -= seconds;

        setTimeout(() => {
            document.querySelector('#timer').classList.remove('text-bg-danger');
        }, 1000)
        
    }

    increaseTime(seconds){        
        document.querySelector('#timer').classList.add('text-bg-success');
        this.timeCounter += seconds;
        setTimeout(() => {
            document.querySelector('#timer').classList.remove('text-bg-success');
        }, 1000)
        // this.gameMessage(`ganhou ${seconds} segundos!`);
    }

    createWordArray() {
        this.wordArray = this.selectedWord.word.split('');
        
    }

    checkLetter(letter) {
        const matchLetters = document.querySelector("#matchLetters");
        const wrongLetters = document.querySelector('#wrongLetters');
        const category = document.querySelector('#category');
        
        if (this.wordArray.includes(letter)) {
            
            // se acertou uma letra da palavra, ganha 5 segundos
            const index = this.wordArray.indexOf(letter);

            this.wordArray.splice(index, 1);
            console.log(this.wordArray);

            if (this.wordArray.length === 0){
                guessWord.value = "";
                guessWord.placeholder = 'Now try to guess the word!';
                console.log("Descobriu todas das letras da palavra");
                category.innerText = this.selectedWord.category;
                document.querySelector('.dicas').classList.remove('invisible');

            }

            this.increaseTime(10);
            matchLetters.innerHTML += `<span class="roxo-border p-2">${letter.toUpperCase()}</span>`;
        }
        else {
            if (this.wordArray.length > 0) {
                wrongLetters.innerHTML += `<span class="border small text-black-50 p-2">${letter.toUpperCase()}</span>`;
            }
        }
    };       
    

    checkWord(word) {    
        
        // diminuir o numero de tentativas
        this.attempts--
                
        if (word.toLowerCase() === this.selectedWord.word) {
            // mostrar a resposta certa  
            let title = 'Parabéns!';
            let word = this.selectedWord.word;
            let msg = this.selectedWord.definition;
            this.callModal(title, word, msg);
            clearInterval(this.intervalId);

            // tela com a palavra selecionada e botão jogar de novo
            console.log('acertou a palavra!');
        } 
        else 
        {
            console.log('errou a palavra!'); 
            guessWord.value = "";
            if (this.timeCounter >= 10) {
                this.decreaseTime(10); 
            } else {
                this.timeCounter = 0;
                timer.innerText = this.timeCounter;
                clearInterval(this.intervalId);
                let title = 'Você perdeu';
                let word = this.selectedWord.word;
                let msg = this.selectedWord.definition;
                this.callModal(title, word, msg)
            }

            // checar o status
            this.gameSatus();           
        }
    }

    
    // gameMessage(msg){
    //     const message = document.querySelector("#message");

    //     message.innerText = msg;
    //     message.classList.remove('invisible');
    //     setTimeout(()=>{
    //         message.innerText = "";
    //         message.classList.add('invisible');
    //     },1000);
    // }

    gameSatus(){
        // Se acabaram as tentativas, game over        
        if (this.attempts === 0) {
            // mostra tela com informações da palavra selecionada e botão jogar de novo
            let title = 'Você perdeu';
            let word = this.selectedWord.word;
            let msg = this.selectedWord.definition;
            this.callModal(title, word, msg);
        }
    }

    callModal(title, word='', msg) {
        modalResult.toggle();
        document.querySelector('#modal-title').innerText = `${title}`;
        document.querySelector('#word').innerText = `${word}`;
        document.querySelector('#message').innerText = `${msg}`;

    }
    
}
