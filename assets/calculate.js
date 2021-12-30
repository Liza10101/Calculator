// declaring all the necessary variables
let input = document.getElementById("input");
let previousExp =  document.getElementById("expression");
let clear =  document.querySelector("#clear");
let dot =  document.querySelector("#dot");
let operation =  document.querySelectorAll("#operation");
let remove =  document.getElementById("remove");
let number = document.querySelectorAll("#number");


//for displaying the clicked number in the input section
number.forEach(num => {
    num.addEventListener('click' , function() {
        if(num.innerText === "." && input.innerText.includes(".")) return
        input.innerText += num.innerText;
    })
});


//All clear function
clear.addEventListener('click' , function() {
    input.innerText="";
    previousExp.innerText="";
})


//for appending operator
operation.forEach((operator) => {
    operator.addEventListener('click', function() {
        if (input.innerText) {
            if (previousExp.innerText) {
                // previousExp.innerText = `${previousExp.innerText} ${input.innerText} ${operator.innerText}`;
                let string = eval(previousExp.innerText + input.innerText);
                string += operator.innerText;
                // debugger;
                previousExp.innerText = string;
            } else {
                previousExp.innerText = `${input.innerText} ${operator.innerText}`;
            }
        } else if (previousExp.innerText.slice(-1).match(/-|\+|\*|\//)) {
            let string = previousExp.innerText.slice(0, -1);
            string += operator.innerText;

            previousExp.innerText = string;
        }

        input.innerText = "";
    });
});


//for evaluating the expression and displaying the final result
document.getElementById("equals").addEventListener('click', function() {
    if (input.innerText) {
        input.innerText = eval(previousExp.innerText + input.innerText);
        previousExp.innerText = "";
    } else {
        input.innerHTML= '<i class="red">Error<i>';
    }
});


//for removing the last character from the input
remove.addEventListener('click' , function() {
    let string = ""
    string = input.innerText.slice(0, -1);
    input.innerText = string
    console.log("after delete", string); 
})