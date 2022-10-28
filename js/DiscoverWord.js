class DiscoverWord {
    constructor () {
        this.word = '';
        this.time = 5;
        this.listaDePalavras = ['estudo', 'ler', 'boneca', 'retorno', 'cigarros', 'vestir', 'nu', 'gancho', 'raiz', 'ventilador',
        'beco', 'perfume', 'cartucho', 'marcador', 'poesia', 'sentimento', 'escurecer', 'filosofia',
        'deputados', 'tigela', 'cativo', 'radiante', 'etiqueta', 'morango', 'tremi', 'revelar', 'trilho',
        'aviador', 'amanhecer', 'nogueira', 'anchova', 'garrafa', 'cordas', 'acesso', 'pintura', 'aberto',
        'orelha', 'aumentar', 'bermudas', 'armadura', 'poeta', 'maquiagem', 'arquivo', 'pacotes', 'abelha'];
    }

    pickOne() {
        this.word = this.listaDePalavras[Math.floor(Math.random() * this.listaDePalavras.length)];
        return this.word;
    }

    countLetters() {
        return this.word.length;
    }
    
    checkLetter(e) {
        let letter = e.data;
        console.log(e);
        console.log(game.word);
        console.log(letter);
        if (this.word.includes(letter)) {
            matchLetters.innerText += letter;
        }
        
    }

    // splitWord() {
    //     return this.word.split('');
    // }

    // startGame() {
    //     pickOne();
    //     countLetters();
    //     splitWord();
    // }

    checkWord(word) {
        this.listaDePalavras.forEach(element => {
            if (element.word === word) {
                console.log('acertou');
            } else {
                console.log(word);
                // this.giveHint(word);
            }
        });
    }

    giveHint(word) {
        const h1 = this.listaDePalavras.h1
    }
}



