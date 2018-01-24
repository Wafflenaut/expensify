const user = {
	name: "Bacon",
	cities: ['Tokyo', 'Gilford', 'Washington, DC', 'Los Angeles'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
		
	}
};

console.log(user.printPlacesLived());

const multiplier = {
	numbers : [3,4,5,6],
	multiplyBy : 2,
	multiply() {
		return this.numbers.map((number) => this.multiplyBy * number);
	}
	
};

console.log(multiplier.multiply());