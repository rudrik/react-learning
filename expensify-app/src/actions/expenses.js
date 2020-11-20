import uuid from 'uuid';
import database from '../firebase/firebase';
// (High level Flow)
//Component call the action generator
//action generator returns object
//component dispatches object
//redux storage changes

// Above will change with the introduction of the firebase like below
//Component call the action generator
//action generator returns Function
//component dispatches function (?) (redux does not allow to dispatch function so we will be using 
//module which is a piece of redux middle ware which support this behaviour.)
// Function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
// Old AddExpense Code before firebase integration
// export const addExpense = (
//     {
//         description = '',
//         note = '',
//         amount = 0,
//         createdAt = 0
//     } = {}
// ) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// Return function will work only because we have setup the middleware redux thunk
// this Function will call internally by redux and will take the argument default as dispatch
export const startAddExpenses = (expenseData = {}) => {
    return (dispatch) => {
        //this 'inverse declaration' basically means that if no values have been set use the provided default ones
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

export const startRemoveExpense = (id) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

// SET_EXPENSES

export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
});

// export const startSetExpenses = () => {
//     return (dispatch) => {
//         return database.ref('expenses').on('value', (snapshot) => {
//             const expenses = [];
//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });
//             dispatch(setExpenses({
//                 expenses
//             }));
//         });
//     };
// };

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value', (snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(
                expenses
            ));
        });
    };
};