const btn1 = document.querySelector(".btn-1")
const btn2 = document.querySelector(".btn-2")
const btnReset = document.querySelector(".btnReset")
const number = document.querySelector(".number")

let counter = 0

btn1.addEventListener("click",()=> {
    let active = true
    while (active){
        counter += 1
        number.innerHTML = counter
        active = false
    };
})

btnReset.addEventListener("click", ()=> {
    counter = 0
    number.innerHTML = counter
})

btn2.addEventListener("click",()=> {
    let active = true
    while (active){
        counter -= 1
        number.innerHTML = counter
        active = false
    };
})