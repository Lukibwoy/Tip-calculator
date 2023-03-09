const cash = document.querySelector('.cash')
const tip = document.querySelectorAll('.tip')
const people = document.querySelector('.people')
const peopleError = document.querySelector('.people-error')
const reset = document.querySelector('.reset')
const totalCash = document.querySelector('.total-cash')
const amountCash = document.querySelector('.amount-cash')


const clearAll = () => {
    cash.value = '';
    people.value = '';
    amountCash.textContent = `0.00$`
    totalCash.textContent = `0.00$`
}



tip.forEach((button) => {
    button.addEventListener('click', (e)=>{
        let newTip = e.target.innerText;
        newTip = newTip.substr(0, newTip.length -1);
        newTip = newTip * 0.01;
        
        calculate(newTip)
        
    })
    })

    
    const calculate = (newTip) => {
   

    const newCash = parseFloat(cash.value)
    const newPeople = parseFloat(people.value)

if(cash.value == '' || people.value == '' || newPeople == 0){
    peopleError.style.display = 'block'
}else{

    peopleError.style.display = 'none'



    
    const totalSum = ((newCash * parseFloat(newTip))+(newCash))/newPeople


    const tipSum = ((newCash * parseFloat(newTip))/newPeople)


    totalCash.innerText = `${totalSum.toFixed(2)}$`
    amountCash.innerText = `${tipSum.toFixed(2)}$`

}
}


reset.addEventListener('click', clearAll)







