var nameVar = 'Rudrik';
var nameVar = 'Patel';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'rrsr';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block Scopting

const fullName = 'Rudrik Patel';
let firstName

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName);
}
console.log(firstName);