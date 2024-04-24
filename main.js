const btn = document.getElementById("btn")
const actualNumbers = document.querySelectorAll(".number")
let yearsPriceArrays = []
const numberArray = actualNumbers.forEach(x => yearsPriceArrays.push(x.textContent))
const monthlyPriceArrays = ["19.99", "24.99", "39.99"]

btn.addEventListener("click", function(){
    btn.querySelector("span").classList.toggle("move")
    if(btn.querySelector("span").classList.contains("move")){
        for(let i = 0; i < actualNumbers.length; i++){
            actualNumbers[i].textContent = monthlyPriceArrays[i]
        }
    } else{
        for(let i = 0; i < actualNumbers.length; i++){
            actualNumbers[i].textContent = yearsPriceArrays[i]
        }
    }
   

})