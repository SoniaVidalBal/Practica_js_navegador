
const create_transaction = document.querySelector(".addtransaction");
const inputconcept = document.querySelector("#concept");
const inputquantity = document.querySelector("#quantity");
let transactionsStorage = [];

create_transaction.addEventListener("submit", (event) => {
    event.preventDefault();
    gettransaction();
    incomes_expenses(inputquantity.value);
    total();
    localStorage.setItem("transaccion", JSON.stringify(transactionsStorage));
    inputconcept.value = '';
    inputquantity.value = '';
})

function gettransaction(){
    let transaction = {
        concept: inputconcept.value,
        quantity: inputquantity.value
    };

    const child = document.createElement('li');
    child.textContent = `${transaction.concept}: ${transaction.quantity}`;
    const elementList = document.querySelector(".transactions");
    elementList.prepend(child);

    transactionsStorage.push(transaction);

    const close = document.createElement('button');
    close.textContent = 'x';
    child.appendChild(close);
    close.addEventListener('click', () => {
        elementList.removeChild(child);
        transactionsStorage = transactionsStorage.filter((item) => item != transaction);
        delete_transaction(transaction.quantity);
    });
}

let positive_operations = [];
let negative_operations = [];
const ingresos = document.querySelector(".income");
const gastos = document.querySelector(".expense");
const displaysumatotal = document.querySelector(".total");

function incomes_expenses(inputquantity){
    const nums = parseFloat(inputquantity);
    if (nums < 0){
        negative_operations.push(nums);
        gastos.textContent = negative_operations.reduce((accum, operation) => accum + operation, 0);
        localStorage.setItem("gastos", gastos.textContent);
        return (gastos.textContent);
    }else if(nums > 0){
        positive_operations.push(nums);
        ingresos.textContent = positive_operations.reduce((accum, operation) => accum + operation, 0);
        localStorage.setItem("ingresos", ingresos.textContent);
        return (ingresos.textContent);
    }
}

function total(){
    const totalingresos = positive_operations.reduce((accum, operation) => accum + operation, 0);
    const totalgastos = negative_operations.reduce((accum, operation) => accum + operation, 0);
    const sumatotal = totalingresos + totalgastos;
    localStorage.setItem("total", sumatotal);
    return displaysumatotal.textContent = sumatotal;
}

function delete_transaction(transactionquant){
    positive_operations = positive_operations.filter((item) => item != transactionquant);
    negative_operations = negative_operations.filter((item) => item != transactionquant);
    ingresos.textContent = positive_operations.reduce((accum, operation) => accum + operation, 0);
    gastos.textContent = negative_operations.reduce((accum, operation) => accum + operation, 0);
    total();
    localStorage.setItem("transaccion", JSON.stringify(transactionsStorage));
}

let inputLocalStorage = JSON.parse(localStorage.getItem('transaccion'));
const incomeStorage = localStorage.getItem("ingresos");
const expenseStorage = localStorage.getItem("gastos");
const totalStorage = localStorage.getItem("total");

if (inputLocalStorage) {

    for (let index = 0; index < inputLocalStorage.length; index++) {

        transactionsStorage.push(inputLocalStorage[index]) 
        localStorage.setItem('transaccion', JSON.stringify(transactionsStorage))

        const child = document.createElement('li');
        child.textContent = `${inputLocalStorage[index].concept}: ${inputLocalStorage[index].quantity}`;
        const elementList = document.querySelector(".transactions");
        elementList.prepend(child);

        const close = document.createElement('button');
        close.textContent = 'x';
        child.appendChild(close);
        close.addEventListener('click', () => {
            elementList.removeChild(child);
            displaysumatotal.textContent = (parseFloat(totalStorage) - (parseFloat(inputLocalStorage[index].quantity)));
            if (parseFloat(inputLocalStorage[index].quantity) > 0){
                const newIncomes = parseFloat(incomeStorage)-parseFloat(inputLocalStorage[index].quantity)
                ingresos.textContent = newIncomes;
            } else if (parseFloat(inputLocalStorage[index].quantity) < 0){
                const newExpeses = parseFloat(expenseStorage)-parseFloat(inputLocalStorage[index].quantity)
                gastos.textContent = newExpeses;
            }
            transactionsStorage = transactionsStorage.filter((item) => item != inputLocalStorage[index]);
            localStorage.removeItem('transaccion');
            localStorage.setItem("transaccion", JSON.stringify(transactionsStorage));
                
        }); 
    }
}

if (incomeStorage){
    incomes_expenses(incomeStorage);
}

if (expenseStorage){
    incomes_expenses(expenseStorage);
}

if (totalStorage){
    displaysumatotal.textContent = totalStorage;
}

