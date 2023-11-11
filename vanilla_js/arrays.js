// Arrays
const cars = ["Toyota", "Honda", "Ford"];

let found = false;
const carToFind = "asdad";

for (let i = 0; i < cars.length; i++) {
    if (cars[i].toLowerCase() === carToFind.toLowerCase()) {
        found = true;
        break;
    }
}

if (found) {
    const formattedCarName = carToFind.charAt(0).toUpperCase() + carToFind.slice(1).toLowerCase();
    console.log(`The car ${formattedCarName} exists!`);
} else {
    console.log(`${carToFind} does not exist...`);
}


const treasure = ["T1", "T2", "T3"];

let found_treasure = false;
const treasureToFind = "asdad";

for (const i in cars) {
    if (cars[i].toLowerCase() === treasureToFind.toLowerCase()) {
        found_treasure = true;
        break;
    }
}

if (found_treasure) {
    const formattedTreasureName = treasureToFind.charAt(0).toUpperCase() + treasureToFind.slice(1).toLowerCase();
    console.log(`The treasure ${formattedTreasureName} exists!`);
} else {
    console.log(`${treasureToFind} does not exist...`);
}


const dogs = ["Pug", "Husky", "Spitz"];
let found_dog = false;
const dogToFind = "asdad";

for (const car of cars) {
    if (car.toLowerCase() === dogToFind.toLowerCase()) {
        found_dog = true;
        break;
    }
}

if (found_dog) {
    const formattedDogName = dogToFind.charAt(0).toUpperCase() + dogToFind.slice(1).toLowerCase();
    console.log(`The dog ${formattedDogName} exists!`);
} else {
    console.log(`${dogToFind} does not exist...`);
}



const singers = ["Dione", "Richie", "Kenny"];
let found_singer = false;
const singerToFind = "asdad";

let i = 0;
while (i < singers.length) {
    if (singers[i].toLowerCase() === singerToFind.toLowerCase()) {
        found_singer = true;
        break;
    }
    i++;
}

if (found_singer) {
    const formattedSingerName = singerToFind.charAt(0).toUpperCase() + singerToFind.slice(1).toLowerCase();
    console.log(`The car ${formattedSingerName} exists!`);
} else {
    console.log(`${singerToFind} does not exist...`);
}

