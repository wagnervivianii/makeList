
function insere(){
    const inptGet = document.querySelector('#inputText');
    const btn = document.querySelector('.btn');
    let count_saida = 0
    let count = 0

    btn.addEventListener('click', function(e){
        count++
        const entrada = inptGet.value;
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

