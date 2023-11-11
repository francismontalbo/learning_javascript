// Example 1: Logging the file extension for a scientific article
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(`Example 1: File extension for scientific article: ${getFileExtension('research-paper.pdf')}`);

// Example 2: Checking if the sum of two scores in a sports game is equal to 100 
const equalToOneHundred = (a, b) => `${a} and ${b} scores in the game is equal to 100: ${a === 100 || b === 100 || (a + b) === 100}`;
console.log(`Example 2: ${equalToOneHundred(70, 30)}`);

// Example 3: Replacing every character in a movie title with the character following it in an alphabet
const movCharsForward = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
console.log(`Example 3: Movie title with characters moved forward: ${movCharsForward('Inception')}`);

// Example 4: Getting the release date of a popular game and formatting it
const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `Example 4: Release date of the game: ${days}/${months}/${years}`;
}
console.log(formatDate());

// Example 5: Adding "New!" to a movie title, but only if it's not already present
const addNew = (str) => str.includes('-- New!!') ? str : `${str} -- New!!`;
console.log(`Example 5: ${addNew('Inception')}`);
