class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`;
    }

}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their major is ${this.major}.`;
        }

        return `${description}`;
    }
}

class Traveller extends Student {
    constructor(name, age, major, homeLocation) {
        super(name, age, major);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Student("Rudrik Patel", 31, "Computer Science");
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());


const test = new Traveller("Rudrik", 31, "IT", "Ahmedabad");
console.log(test.getGreeting());


