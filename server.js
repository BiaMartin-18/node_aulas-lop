/*
//npm i express
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const produtos = [
    {id: 0, marca: "Nike", tamanho: 42, modelo: "Air Force", cor: "Verda com Roxo", preco: "R$ 723,93"},
    {id: 1, marca: "Nike", tamanho: 42, modelo: "Air Force", cor: "Verda com Roxo", preco: "R$ 723,93"},
    {id: 2, marca: "Nike", tamanho: 42, modelo: "Air Force", cor: "Verda com Roxo", preco: "R$ 723,93"},
    {id: 3, marca: "Nike", tamanho: 42, modelo: "Air Force", cor: "Verda com Roxo", preco: "R$ 723,93"}
]

app.get('/series', (req, res) => {
    //será executado ao requisitar o endpoint /series
    console.log('series funcionando')
    res.json({melhorSerie: "The Office"})
})

app.get('/produtos', (req, res) => {
    res.json(produtos)
})

app.listen(port, () => {
    console.log('Servidor rodando em http://127.0.0.1:' + port)
})
*/
//npm i express
const express = require('express');
let cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

let tarefas = [];

app.get('/tarefas', (req, res) => {
    res.json(tarefas);
})

app.post('/tarefas', (req, res) => {
    const novaTarefa = req.body;
    tarefas.push({id: tarefas.length , descricao: novaTarefa.descricao});

    console.log(tarefas);

    res.json(tarefas);
})

app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const idNum = parseInt(id);
    //usar o id para remover da lista 
    tarefas = tarefas.filter(tarefa => tarefa.id !== idNum);
    console.log(`Tarefa com ID ${idNum} removida`);
    res.json(tarefas);
})

app.listen(port, () => {
    console.log('Servidor rodando em http://127.0.0.1:' + port);
})

