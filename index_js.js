
const create_transaction = document.querySelector(".addtransaction");
const inputconcept = document.querySelector("#concept");
const inputquantity = document.querySelector("#quantity");

create_transaction.addEventListener("submit", (event) => {
    event.preventDefault();
    gettransaction();
    incomes_expenses(inputquantity.value);
    total();
    inputconcept.value = '';
    inputquantity.value = '';
})

function gettransaction(){
    let transaction = {
        concept: inputconcept.value,
        quantity: inputquantity.value
    };

    const child = document.createElement('li')
    child.textContent = `${transaction.concept} - ${transaction.quantity}`
    const elementList = document.querySelector(".transactions")
    elementList.appendChild(child)

    const close = document.createElement('button')
    close.textContent = 'x'
    child.appendChild(close)
    close.addEventListener('click', () => {
        elementList.remove(child)
        const displaysumatotal = document.querySelector(".total")
        displaysumatotal.textContent = total() - transaction.quantity
        const ingresos = document.querySelector(".income")
        const gastos = document.querySelector(".expense")
        ingresos.textContent = incomes_expenses(inputquantity.value) - transaction.quantity
        gastos.textContent = incomes_expenses(inputquantity.value) - transaction.quantity
        
    })
}

let positive_operations = []
let negative_operations = []

function incomes_expenses(inputquantity){
    const ingresos = document.querySelector(".income")
    const gastos = document.querySelector(".expense")
    const nums = parseFloat(inputquantity)
        if (nums < 0){
            negative_operations.push(nums)
            gastos.textContent = negative_operations.reduce((accum, operation) => accum + operation, 0)
            return (gastos.textContent)
        }else if(nums > 0){
            positive_operations.push(nums)
            ingresos.textContent = positive_operations.reduce((accum, operation) => accum + operation, 0)
            return (ingresos.textContent)
        }
    return (ingresos.textContent)
}

function total(){
    const displaysumatotal = document.querySelector(".total")
    const totalingresos = positive_operations.reduce((accum, operation) => accum + operation, 0)
    const totalgastos = negative_operations.reduce((accum, operation) => accum + operation, 0)
    const sumatotal = totalingresos + totalgastos
    return displaysumatotal.textContent = sumatotal
}

