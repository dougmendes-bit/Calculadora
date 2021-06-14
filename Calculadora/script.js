function escreva(valor){
    document.querySelector("#textinput").value += valor.textContent
}

function deletar(){
    document.querySelector("#textinput").value = document.querySelector("#textinput").value.slice(0, -1)
}

function operador(valor){
    document.querySelector("#textinput").value += valor.textContent
}

function calcular(){
    if(document.querySelector("#textinput").value == ""){
        alert("Nenhum valor digitado!")
    } else{
        const resultado = eval(document.querySelector("#textinput").value)
        document.querySelector("#textinput").value = resultado
    }
    
}

function resetar(){
    document.querySelector("#textinput").value = ''
}
