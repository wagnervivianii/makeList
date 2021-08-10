
 /*function insere(){
   const inptGet = document.querySelector('#inputText');
    const btn = document.querySelector('.btn');
    let count_saida = 0
    let count = 0

    btn.addEventListener('click', function(e){
        const entrada = inptGet.value;
        count++
        const newElement = document.createElement('li');
        const items = document.querySelector('li');
        newElement.classList.add('lst')
        newElement.classList.add(`lst${count}`)

        const newText = entrada
        const list = document.querySelector('.listItens');

        const newBtn = document.createElement('button');
        newBtn.classList.add('btn_c')
        newBtn.textContent = "Clear"
        newBtn.addEventListener('click', function(){   
            count_saida++
            const clear = newElement.classList[1];
            const myNode = document.querySelector(`.${clear}`)
        myNode.innerHTML = ""
        
        })

        newElement.textContent = newText
        newElement.appendChild(newBtn)
        list.appendChild(newElement)
        inptGet.value = ''
        alert(count - count_saida)
    })
    
}
onload = insere()
*/

const inptTarefa = document.querySelector("#inputText");
const btnTarefa = document.querySelector('.btn');
const tarefas = document.querySelector('.listItens');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function makeBtn(li){
    li.innerText += ' ';
    const btn = document.createElement('button');
    btn.innerText = 'Apagar';
    btn.setAttribute('class', 'apagar');
    btn.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(btn);
}

function criaTarefa(textInput){
    const li = criaLi();
    li.innerText = textInput;
    tarefas.appendChild(li);
    clearFocus();
    makeBtn(li);
    SalvarTarefa();
};

function SalvarTarefa(){
    const arrayTarefas = tarefas.querySelectorAll('li');
    let listArray = [];
    for(let tarefa of arrayTarefas){
        let text = tarefa.innerText
        text = text.replace('Apagar',"").trim()
        listArray.push(text)
    };

    const tarefaJson = JSON.stringify(listArray)
    console.log(tarefaJson)
    localStorage.setItem('tarefas', tarefaJson);

};

document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        SalvarTarefa();
    };
});



function adicionarTarfefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listadetarefas = JSON.parse(tarefas);

    for(let tarefa of listadetarefas){
        criaTarefa(tarefa)
    }
}

inptTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inptTarefa.value) return;
        criaTarefa(inptTarefa.value);
    }
})

function clearFocus(){
    inptTarefa.value = "";
    inptTarefa.focus();
}


btnTarefa.addEventListener('click', function(){
    if(!inptTarefa.value) return;
    criaTarefa(inptTarefa.value);
})

adicionarTarfefasSalvas();