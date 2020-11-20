import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpenses, history, wrapper;

beforeEach(() => {
    startAddExpenses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpenses={startAddExpenses} history={history} />);
})

test('should render add expense page correctly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpenses).toHaveBeenLastCalledWith(expenses[1]);
});