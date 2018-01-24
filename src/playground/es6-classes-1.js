class Person {
	constructor(_name = 'Anonymous', _age = 0) {
		this.name = _name;
		this.age = _age;
	}
	getGreeting() {
		return `Hi I am ${this.name}`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
		}
}

class Student extends Person {
	constructor(_name, _age, _major){
		super(_name, _age);
		this.major = _major;
	}
	hasMajor(){
		return !!this.major;
	}
	getDescription() {
		if(this.major){
			return `${this.name} is ${this.age} year(s) old and is majoring in ${this.major}.`;
		}
		else{
			return super.getDescription();
		}
	}
}

class Traveler extends Person {
	constructor(_name, _age, _homeLocation){
		super(_name, _age);
		this.homeLocation = _homeLocation;
	}
	getGreeting(){
		if(this.homeLocation){
			return `Hi, My name is ${this.name} from ${this.homeLocation}.`;
		}
		else{
			return super.getGreeting();
		}
	}
}

const me = new Student('John', 34, 'Computer Science');

const you = new Person();
const bacon = new Traveler('Bacon', 5, 'Washington, DC');
const pancake = new Traveler('Pancake', 2);
console.log(bacon.getGreeting());
console.log(pancake.getGreeting());
console.log(me.hasMajor());
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(you.getDescription());