import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT'});
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove any expenses with invalid id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '5676'
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

//add an expense
test('should add an expense', () => {
	const expense = {
		id: '4',
		description: 'Lemons',
		note: '',
		amount: 4566,
		createdAt: 9999999999
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);

});

//edit an expense
test('should edit an existing expense', () => {
	const updates = {
		...expenses[0],
		amount: 200
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: '1',
		updates
	}
	const state = expensesReducer(expenses, action);
	expect(state[0].amount).toBe(200);
});

//should not edit id that does not exist
test('should not edit an id that does not exist', () => {
	const updates = {
		...expenses[0],
		amount: 200
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: '454545',
		updates
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});