
const create_transaction = document.querySelector(".addtransaction");

create_transaction.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputconcept = document.querySelector("#concept");
    const inputquantity = document.querySelector("#quantity");

    let transaction = {
        concept: inputconcept.value,
        quantity: inputquantity.value
    };

    const child = document.createElement('li')
    child.textContent = `${transaction.concept} - ${transaction.quantity}`
    const elementList = document.querySelector(".transactions")
    elementList.appendChild(child)

    
   incomes_expenses(inputquantity.value)

    inputconcept.value = '';
    inputquantity.value = '';
})

let positive_operations = []
let negative_operations = []

function incomes_expenses(inputquantity){
    const ingresos = document.querySelector(".income")
    const gastos = document.querySelector(".expense")
    const nums = parseInt(inputquantity)
        if (nums < 0){
            negative_operations.push(nums)
            return gastos.textContent = negative_operations.reduce((accum, operation) => accum + operation, 0)
        }else if(nums > 0){
            positive_operations.push(nums)
            return ingresos.textContent = positive_operations.reduce((accum, operation) => accum + operation, 0)
        } 
}


