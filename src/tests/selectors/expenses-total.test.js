import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/filters.js';

test('should return 0 if no expenses', () => {
	const emptyExpenses = [];
	const result = selectExpensesTotal(emptyExpenses);
	expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
	const singleExpenses = [expenses[0]];
	const result = selectExpensesTotal(singleExpenses);
	expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
	const result = selectExpensesTotal(expenses);
	expect(result).toBe(114195);
});
