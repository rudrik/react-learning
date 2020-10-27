function squareFun(x) {
    return x * x;
}

// const square = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

const getFirstName = (name) => {
    return (name.split(' ')[0]);
}

console.log(getFirstName("Rudrik Patel"));

const getFirstNameEx = (name) => name.split(' ')[0];

console.log(getFirstNameEx("Rud Patel"));