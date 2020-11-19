import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpenses } from '../actions/expenses'

//To avoid inline function we are converting it to class based component

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        //Abstract all of the below from the component as component should be only focusing on
        //displaying and user interaction.
        //use push firebase
        //attatch call back
        //dispatch action
        // redirect

        // props.dispatch(addExpense(expense));
        this.props.startAddExpenses(expense);
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
    startAddExpenses: (expense) => dispatch(startAddExpenses(expense))
});

// First is Map state to props and second is map dispatch to props in connect

export default connect(undefined, matchDispatchToProps)(AddExpensePage);