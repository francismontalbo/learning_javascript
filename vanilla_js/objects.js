// Objects in JavaScript

const person = {
    fName: "John", 
    lName: "Doe", 
    age:45, 
    profession: "Programmer"
};


console.log(person.fName)
console.log(person["age"]);

const dog = {
    breed: "pug",
    age: 3,
    color: "cream",
    weight: 15,
    isHungry: false,

    bark: function () {
        return `Woof! Woof! the ${this.breed} started barking!`;
    },

    eat: function (food) {
        this.isHungry = false;
        return `The ${this.color} ${this.breed} began to eat ${food}.`;
    },

    play: function (activity) {
        return `The ${this.breed} is happily playing ${activity}.`;
    },

    getInfo: function () {
        return `This ${this.color} ${this.breed} is ${this.age} years old and weighs ${this.weight} pounds.`;
    }
};

console.log(dog.getInfo()); 
console.log(dog.eat("dog food")); 
console.log(dog.play("fetch"));
console.log(dog.bark()); 


let obj1 = JSON.parse('{"user1": "Vince", "user2": "Stephanie"}');


console.log(obj1)
console.log(obj1.user1)
console.log(obj1.user2)
