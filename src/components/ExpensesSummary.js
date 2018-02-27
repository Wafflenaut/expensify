import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = (props) => (
	<div>
		{
			props.expenses.length === 1 ? (
				<h5>Viewing 1 expense totalling {numeral(props.total / 100).format('$0,0.00')}.</h5>
			) : (
				<h5>Viewing {props.expenses.length} expenses totalling {numeral(props.total / 100).format('$0,0.00')}.</h5>
			)
		}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters),
		total: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
	};
};

export default connect(mapStateToProps)(ExpensesSummary);