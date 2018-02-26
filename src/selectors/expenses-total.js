export default ( expenses ) => {
	return expenses
		.map((expense) => expenses.amount)
		.reduce((sum, value) => sum + value, 0);
};