
let randomNum = Math.floor(Math.random()*10+1)
console.log(randomNum)

function done() {
    
    let input = document.querySelector('input')
    let inputValue = input.value

    let result = document.querySelector("#result")
    let game = document.querySelector('.game')

    game.style.height='300px'

    if (randomNum == inputValue) {
        result.innerHTML='CONGRATULATION 🥳'
    }
    else if (inputValue > randomNum ){
        result.innerHTML = "ENTER LESS THAN 😏"
    }
    else if ( inputValue < randomNum ){
        result.innerHTML = "ENTER  GREATER THAN ☺"
    }
 


}