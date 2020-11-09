import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducers(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);

});

test('should not remove expense if id not', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducers(expenses, action);

    expect(state).toEqual(expenses);

});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Bear',
        note: '',
        amount: 295,
        createdAt: 0
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducers(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});

// test('should edit an expense', () => {
//     const expense = {
//         id: '1',
//         description: 'Bear',
//         note: '',
//         amount: 295,
//         createdAt: 0
//     }

//     const action = {
//         type: 'EDIT_EXPENSE',
//         id: expense.id,
//         updates: expense
//     }

//     const state = expensesReducers(expenses, action);

//     expect(state).toEqual([expense, expenses[1], expenses[2]]);
// });

test('should edit an expense', () => {
    const description = 'Bear'

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    }

    const state = expensesReducers(expenses, action);

    expect(state[1].description).toBe(description);
});


// test('should not edit an expense if id not found', () => {
//     const expense = {
//         id: '6',
//         description: 'Bear',
//         note: '',
//         amount: 295,
//         createdAt: 0
//     }

//     const action = {
//         type: 'EDIT_EXPENSE',
//         id: expense.id,
//         updates: expense
//     }

//     const state = expensesReducers(expenses, action);

//     expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
// });

test('should not edit an expense if id not found', () => {
    const id = '6';
    const amount = 1000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: { amount }
    };

    const state = expensesReducers(expenses, action);

    expect(state).toEqual([...expenses]);
});