import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import selectorExpenseTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpenseDashboardPage = (props) => (
    <div>
        <p>{props.expenseCount !== 0 && `Viewing ${props.expenseCount} expenses totalling ${props.expenseTotal}`}</p>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenseTotal: selectorExpenseTotal(selectExpenses(state.expenses, state.filters)),
        expenseCount: selectExpenses(state.expenses, state.filters).length || 0
    };
}

export default connect(mapStateToProps)(ExpenseDashboardPage);