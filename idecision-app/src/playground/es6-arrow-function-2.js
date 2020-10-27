// const { multiply } = require("lodash");

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001));

const user = {
    name: 'Rudrik',
    cities: ['Ahmedabad', 'Baroda', 'Mumbai'],
    //printPlacesLived: function () {
    printPlacesLived() {
        // this.cities.forEach(function (city) {
        //     console.log(this.name + 'has lived in ' + city)
        // });
        //Array function going for parent scope

        return this.cities.map((city) => this.name + 'has lived in ' + city);


        // this.cities.forEach((city) => {
        // console.log(this.name + 'has lived in ' + city)
        // });
    }
}
console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
    numbers: [2, 3, 4],
    multiplyBy: 2,
    multiplier() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiplier());