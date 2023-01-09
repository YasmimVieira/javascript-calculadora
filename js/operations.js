const sum = (number) =>  number.reduce((accumulator, currentValue) => accumulator + currentValue);
const sub = (number) =>  number.reduce((accumulator, currentValue) => currentValue + accumulator);
const mult = (number) =>  number.reduce((accumulator, currentValue) => currentValue * accumulator);
const division = (number) =>  number.reduce((accumulator, currentValue) => currentValue / accumulator);

export function operations(operator, number) {
    const operations = {
        '+': sum(number),
        '-': sub(number),
        '*': mult(number),
        '/': division(number)
    }

    return operations[operator];
}