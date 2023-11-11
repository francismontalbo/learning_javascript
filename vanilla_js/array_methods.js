// Arrays based on different topics

// JS Array Methods:
// Array length
// Array toString()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array splice()
// Array slice()
// Array sort() <-- Added this method

// Array length
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
console.log('Number of Planets:', planets.length);
console.log('');

// Array toString()
const fruits = ['apple', 'kiwi', 'mango'];
const fruitsString = fruits.toString();
console.log('Fruits as a String:', fruitsString);
console.log('');

// Array pop()
const exoticAnimals = ['sloth', 'kangaroo', 'lemur'];
const lastAnimal = exoticAnimals.pop();
console.log('Last Exotic Animal:', lastAnimal);
console.log('');

// Array push()
const endangeredSpecies = ['pangolin', 'rhinoceros', 'orangutan'];
endangeredSpecies.push('snow leopard');
console.log('Modified Endangered Species Array (push):', endangeredSpecies);
console.log('');

// Array shift()
const gems = ['diamond', 'emerald', 'sapphire'];
const firstGem = gems.shift();
console.log('First Precious Gem:', firstGem);
console.log('');

// Array unshift()
const famousPaintings = ['Mona Lisa', 'Starry Night', 'The Persistence of Memory'];
famousPaintings.unshift('The Scream');
console.log('Modified Famous Paintings Array (unshift):', famousPaintings);
console.log('');

// Array join()
const ingredients = ['flour', 'cocoa powder', 'eggs'];
const recipe = ingredients.join(', ');
console.log('Chocolate Cake Recipe:', recipe);
console.log('');

// Array delete()
// JavaScript does not have a direct delete method for arrays.
// You can set an element to undefined or use splice to remove elements.
const landmarks = ['Eiffel Tower', 'Great Wall', 'Machu Picchu'];
delete landmarks[1];
console.log('Modified Landmarks Array (delete - setting to undefined):', landmarks);
console.log('');

// Array concat()
const fruits1 = ['pineapple', 'pomegranate', 'dragon fruit'];
const fruits2 = ['guava', 'passion fruit', 'lychee'];
const combinedFruits = fruits1.concat(fruits2);
console.log('Combined Exotic Fruits (concat):', combinedFruits);
console.log('');

// Array flat()
// This method is used with nested arrays.
const nestedArtists = [['Monet', 'Renoir'], ['Van Gogh', 'Dali', 'Pollock'], ['Kahlo']];
const uniqueArtists = nestedArtists.flat();
console.log('Unique Artists (flat):', uniqueArtists);
console.log('');

// Array splice()
// Adding elements
const shoppingCart = ['shoes', 'shirt', 'jeans'];
shoppingCart.splice(1, 0, 'hat', 'sunglasses');
console.log('Modified Shopping Cart (splice - adding elements):', shoppingCart);
console.log('');

// Removing elements
const languages = ['English', 'Spanish', 'French', 'Italian'];
const removedLanguage = languages.splice(2, 1);
console.log('Modified Languages Array (splice - removing elements):', languages);
console.log('Removed Language:', removedLanguage);
console.log('');

// Array slice()
const desserts = ['cheesecake', 'tiramisu', 'macarons', 'gelato', 'churros'];
const selectedDesserts = desserts.slice(1, 4);
console.log('Selected Desserts (slice):', selectedDesserts);

// Array sort()
const numbers = [8, 3, 1, 6, 4, 7, 2, 5];
numbers.sort();
console.log('Sorted Numbers:', numbers);

