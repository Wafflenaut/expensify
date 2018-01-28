/*const person = {
	name: 'John',
	age: 34,
	location: {
		city: 'Washington, DC',
		temp: 58
	}
	
};

const {name, age} = person;

console.log(`${name} is ${age}`);
const {city, temp} = person.location;

if(city && temp){
	console.log(`It's ${temp} in ${city}`);
}
*/
/*
const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin'
	}
};

const book2 = {
	title: 'Chaos Monkeys',
	author: 'Some Dude',

};

const {title, author, publisher: publisherName = 'Self-Published'} = book;

console.log(publisherName);
*/

const address = ['123 Random St', 'Washington', 'District of Columbia', '20001'];

console.log(`You are in ${address[1]}, ${address[2]}.`);

const [, city, state] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)','$2.00', '$2.50', '$2.75']

const [itemType, ,mSize] = item;

console.log(`A medium ${itemType} costs ${mSize}.`);