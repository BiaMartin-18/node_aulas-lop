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
        if(event.shiftKey)
        {
            return;
        }
        else{
            const tarefas = input.value.trim();

            if (tarefas) {
                adicionarTarefa(tarefas);
                event.preventDefault();
                input.value = '';
            }
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

            document.getElementById('quadrado').innerHTML = '';
            
            tarefas.forEach(item => {
                blocoTarefa(item.descricao, item.id);
                console.log(item);
            });
        })
        .catch(error => { console.log("DEU RUIM: ", error) });
}

function blocoTarefa(tarefaDescricao, id) {
    const quadrado = document.createElement('div');
    quadrado.className = "quadrado";
    quadrado.id = id;
    
    quadrado.addEventListener('click', () => {
        
        fetch("http://127.0.0.1:3000/tarefas/" + id, {
        method: "DELETE"
        })

        .then(response => { response.json() })
        .then(tarefas => {
            atualizarTela();
        })

        .catch(error => {
            console.log("DEU RUIM: ", error)
        })
        quadrado.remove();
    });

    const texto = document.createElement('p');
    texto.className = "txt";
    texto.innerText = tarefaDescricao;
    
    quadrado.appendChild(texto);
    
    document.getElementById('quadrado').appendChild(quadrado);
}