export default ( expenses ) => {
	const result = expenses
		.map((expense) => expense.amount)
		.reduce((sum, value) => sum + value, 0);
		
	return result;
};