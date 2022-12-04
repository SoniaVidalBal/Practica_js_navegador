localStorage.setItem("concepto", inputconcept.value)
localStorage.setItem("cantidad", inputquantity.value)

const input1localstorage = localStorage.getItem("concepto")
const input2localstorage = localStorage.getItem("cantidad")
if (input1localstorage && input2localstorage) {
    const child = document.createElement('li')
    const elementList = document.querySelector(".transactions")
    child.textContent = `${input1localstorage} ${input2localstorage}`
    elementList.appendChild(child)
}


