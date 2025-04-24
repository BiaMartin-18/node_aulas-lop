// Desenha uma moldura em frase 
const ch = '█'
const readline = require('readline-sync');

function barra(qtde){
    for (let i=0 ; i<qtde+4 ; i++){
        process.stdout.write(ch)
    }
}

//fora da função

const frase = readline.question('Digite uma frase: ');

barra(frase.length);

console.log(`\n${ch} ${frase} ${ch}`);

barra(frase.length)