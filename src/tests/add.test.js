const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
	const result = add(3,4);
	
	expect(result).toBe(7);
});

test('Should create hello string', () => {
	const helloString1 = generateGreeting('Bacon');
	const helloString2 = generateGreeting('');
	const helloString3 = generateGreeting();
	
	expect(helloString1).toBe('Hello Bacon!');
	expect(helloString2).toBe('Hello !');
	expect(helloString3).toBe('Hello Anonymous!');
});