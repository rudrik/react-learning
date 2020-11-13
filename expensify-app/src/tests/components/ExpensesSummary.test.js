import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with Multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={435} />);
    expect(wrapper).toMatchSnapshot();
});