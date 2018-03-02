import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expense to database and store', (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: 'Mouse',
		amount: 3000,
		note: 'Gaming Mouse',
		createdAt: 1000000
	}
	store.dispatch(startAddExpense(expenseData)).then(()=>{
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});
		
		return database.ref(`expenses/${actions[0].expense.id}`).once('value');
		
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData);
		done();
	});;
});

test('should add default expense to database and store', (done) => {
	const store = createMockStore({});
	const defaultExpense = {
				description: '',
				note: '',
				amount: 0,
				createdAt: 0
	}
	
	store.dispatch(startAddExpense({})).then(()=>{
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...defaultExpense
			}
		});
		
		return database.ref(`expenses/${actions[0].expense.id}`).once('value');
		
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(defaultExpense);
		done();
	});;
});

// test('should set up add expense action object with default values', () => {
	// const action = addExpense();
	
	// expect(action).toEqual({
		// type: 'ADD_EXPENSE',
		// expense: {
			// id: expect.any(String),
			// description: '',
			// note: '',
			// amount: 0,
			// createdAt: 0
		// }
	// })
// });