// Map in JavaScript

let my_map = new Map()

my_map.set("username1", "Austin");
my_map.set("username2", "Christie");
my_map.set("username3", "Drew")

console.log(my_map);

my_map.forEach((value, keys) => {
    console.log(value, keys);
})

for (let [key, value] of my_map) {
    console.log(`Key: ${key}, Value: ${value}`);
  }

// Object to JSON string

const company_profile = {
    company: "World Fighting Entertainment",
    Estd: 1994,
    origin: "USA"
};

const stringed_obj = JSON.stringify(company_profile);
console.log("value of result = " + stringed_obj);

const parsed_obj = JSON.parse(stringed_obj);

for (let key in parsed_obj) {
    console.log(parsed_obj[key], key);
}

for (const value of Object.values(parsed_obj)) {
    console.log(value);
}


