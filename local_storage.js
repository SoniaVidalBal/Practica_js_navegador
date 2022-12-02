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

incomesexpenses()
function incomesexpenses(){
    //const gastos = document.querySelector(".expense")
    const ingresos = document.querySelector(".income")
    const gastos = document.querySelector(".expense")
    const nums = parseInt(inputquantity.value)
        if (nums < 0){
            localStorage.setItem("cantidadnegativa", nums)
            const inputnegative = localStorage.getItem("cantidadnegativa")
            const nums2 = (parseInt(inputnegative) + nums)
            return gastos.textContent = nums2}
        else if(nums > 0){
            localStorage.setItem("cantidadpositiva", nums)
            const inputpositive = localStorage.getItem("cantidadpositiva")
            const nums3 = (parseInt(inputpositive) + nums)
            return ingresos.textContent = nums3
        }
}