const square = function (x) {
	return x*x;
};

const squareArrow = (x) => {
	return x*x;
}

console.log(square(8));
console.log(squareArrow(8));

const fullName = 'Bacon Moyer';

const getFirstNameV = (fullName) => {
	return fullName.split(' ')[0];
};

const getFirstNameS = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameV(fullName));
console.log(getFirstNameS(fullName));