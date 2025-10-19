function getComputerChoice(){
   let x = Math.random()
    if (x < 1/3) {
       x = "Rock"
    }
    else if (x < 2/3) {
        x = "Paper"
    }
    else {
       x = "Scissors"
    }
    return x
    }
console.log(getComputerChoice())
