import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
	const action = removeExpense({id: '123abc'});
	
	expect(action).toEqual({
		id: '123abc',
		type: 'REMOVE_EXPENSE'
	});
});

test('should set up edit expense action object', () => {
	const update = {
		amount: 3245,
		note: 'Totally a test'
	};
	const action = editExpense('32abc', update);
	
	expect(action).toEqual({
		id: '32abc',
		type: 'EDIT_EXPENSE',
		updates: {
			amount: 3245,
			note: 'Totally a test'
		}
	});
});

test('should set up add expense action object with provided values', () => {
	const expenseData = {
		description: 'Rent',
		amount: 109500,
		createdAt: 1000,
		note: 'This was last month\'s rent'
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test('should set up add expense action object with default values', () => {
	const action = addExpense();
	
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	})
});