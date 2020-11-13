import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectorExpenseTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formatedExpensesTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesTotal: selectorExpenseTotal(visibleExpenses),
        expenseCount: visibleExpenses.length
    };
}

export default connect(mapStateToProps)(ExpensesSummary);