function fizzBuzz(n){
    
    for (let i = 1; i<= n; i++){
        let output = "";
        if (i % 3 === 0 && i %5 === 0){
            output += " fizzBuzz";
        } else if (i % 3 === 0){
            output += " fizz";
        } else if (i % 5 === 0){
            output += " Buzz";
        } else {
            output = i;
        }
        console.log(output);
    }
}

fizzBuzz(15);


