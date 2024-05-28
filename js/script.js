// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplcationTitle = document.querySelector("#multiplication-title span")
const multiplicationTable = document.querySelector("#multiplication-operator")

//Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "" //limpa a area da taboada

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i
        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`

        const parser = new DOMParser()
        const hmtlTemplate = parser.parseFromString(template, "text/html") //vai passar o tamplate para o html
                                                             // original e a conversão
        const row = hmtlTemplate.querySelector(".row")
        multiplicationTable.appendChild(row)
    }
    
    multiplcationTitle.innerText = number
}

//Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value

    const multiplicatorNumber = +multiplicationInput.value
    //o sinal de + é para retornar um número

    if (!multiplicationNumber || !multiplicatorNumber) return

    createTable(multiplicationNumber, multiplicatorNumber)
})