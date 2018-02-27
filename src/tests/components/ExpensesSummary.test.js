import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with 0 or multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenses={expenses} total={500} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with single expense', () => {
	const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} total={600}/>);
	expect(wrapper).toMatchSnapshot();
});