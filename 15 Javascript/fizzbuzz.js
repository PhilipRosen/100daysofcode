
number = 1
output = []

function fizzbuzz() {
    for( i=1;i<101; i++){
        if(number % 5 == 0 && number % 3 == 0){
            output.push("Fizzbuzz")       
        } else if (number % 5 == 0){
            output.push("Buzz")
        } else if (number % 3 == 0){
            output.push("Fizz")
        } else {
            output.push(number)
        }
        
        number++
    }
    console.log(output)
}

fizzbuzz()
