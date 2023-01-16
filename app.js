let number = []
let operator = '';

const sum = (number) =>  number.reduce((accumulator, currentValue) => accumulator + currentValue);
const sub = (number) =>  number.reduce((accumulator, currentValue) => currentValue + accumulator);
const mult = (number) =>  number.reduce((accumulator, currentValue) => currentValue * accumulator);
const division = (number) =>  number.reduce((accumulator, currentValue) => currentValue / accumulator);

function operations(operator, number) {
    const operations = {
        '+': sum(number),
        '-': sub(number),
        '*': mult(number),
        '/': division(number)
    }

    return operations[operator];
}

function getNumbers(numberInput) {
    let numbers = document.getElementById('result').innerHTML;

    if(numberInput !== '+') {
        numberInput+numberInput
    } else {
        numberInput
    }

    number.push(numberInput)
    console.log(number)
}

function getOperator(operatorInput) {
    
}



function cleanResult() {
    document.getElementById('result').innerHTML = '';
}