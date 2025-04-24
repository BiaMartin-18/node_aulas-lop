// Desenha uma moldura em frase 

const readline = require('readline-sync');

const frase = readline.question('Digite uma frase: ');

const ch = '█'
for (let i=0 ; i<frase.length+4 ; i++) {
    process.stdout.write(ch);
}

console.log(`\n${ch} ${frase} ${ch}`);
for (let i=0 ; i<frase.length+4 ; i++) {
    process.stdout.write(ch);
}