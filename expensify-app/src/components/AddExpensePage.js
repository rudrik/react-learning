import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'

//To avoid inline function we are converting it to class based component

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        this.props.history.push('/')
    };

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm

//             onSubmit={(expense) => {
//                 // props.dispatch(addExpense(expense));
//                 props.onSubmit(expense);
//                 props.history.push('/')
//             }}
//         />
//     </div>
// );

// const matchDispatchToProps = (dispatch) => {
//     return {
//         onSubmit: (expense) => dispatch(addExpense(expense));
//     };
// };

const matchDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

// First is Map state to props and second is map dispatch to props in connect

export default connect(undefined, matchDispatchToProps)(AddExpensePage);