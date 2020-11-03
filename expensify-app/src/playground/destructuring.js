
// Object Destructuring

// const person = {
//     name: 'Rudrik',
//     age: 31,
//     location: {
//         city: 'Ahmedabad',
//         temp: 92
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}`);

// const { temp: temperature, city } = person.location;
// if (city && temperature)
//     console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self Publish' } = book.publisher;

// console.log(`Book is publised by ${publisherName}`);


//
//Array Destricturing
//

const address = ['1299 juniper street', 'Ahmedabad', 'Gujarat', '380013'];
const [, city, state = "Mumbai"] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Iced-Coffee', '$3.00', '$3.50', '$3.75'];
const [itemName, , price] = item;
console.log(`A medium ${itemName} costs ${price}`);