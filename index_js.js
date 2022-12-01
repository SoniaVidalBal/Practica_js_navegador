
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const inputconcept = document.querySelector("#concept")
    const inputquantity = document.querySelector("#quantity")
    localStorage.setItem("concepto", inputconcept.value)
    localStorage.setItem("cantidad", inputquantity.value)
    const child = document.createElement('li')
    child.textContent = `${inputconcept.value} ${inputquantity.value}`
    const elementList = document.querySelector(".transactions")
    elementList.appendChild(child)
    inputconcept.value = '';
    inputquantity.value = '';
})
const input1localstorage = localStorage.getItem("concepto")
const input2localstorage = localStorage.getItem("cantidad")
if (input1localstorage && input2localstorage) {
    const child = document.createElement('li')
    const elementList = document.querySelector(".transactions")
    child.textContent = `${input1localstorage} ${input2localstorage}`
    elementList.appendChild(child)
}