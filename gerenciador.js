//função que alterna entre visívele oculto
function Menu() {
    //seleciona o menu
    var menu = document.getElementById("menu_vertical");

    //verifica se o menu está oculto ou vísivel
    if (menu.style.display == "none") {
        //torna o menu vísivel
        menu.style.display = "block";
    }
    else {
        //oculta menu
        menu.style.display = "none";
    }
}

const input = document.querySelector('.escrever');

input.addEventListener('keydown', function (event) {

    if (event.key === 'Enter') {
        const tarefas = input.value.trim();

        if (tarefas) {
            adicionarTarefa(tarefas);
            event.preventDefault();
            input.value = '';
        }
    }
});

function adicionarTarefa(tarefa) {
    fetch("http://127.0.0.1:3000/tarefas", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ descricao: tarefa }),
    })

        .then(response => { response.json() })
        .then(tarefas => {
            atualizarTela()
            blocoTarefa()
        })
        .catch(error => {
            console.log("DEU RUIM: ", error)
        })
}


function atualizarTela() {
    fetch("http://127.0.0.1:3000/tarefas")
        .then(response => response.json())
        .then(tarefas => {
            tarefas.map(item => {
                mostrar_tarefa.className = "txt";
                document.getElementById("mostrar_tarefa").innerText = item.descricao;
                console.log(item)
            })
        })
        .catch(error => { console.log("DEU RUIM: ", error) })
}

function blocoTarefa() {
    const quadrado = document.createElement('div');

    quadrado.className = "quadrado";
    console.log("ok")

    document.getElementById('quadrado').appendChild(quadrado);
}