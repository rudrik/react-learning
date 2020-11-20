import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addExpense,
    startAddExpenses,
    editExpense,
    startEditExpense,
    removeExpense,
    startRemoveExpense,
    setExpenses,
    startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};

    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });

    database.ref('expenses').set(expensesData).then(() => done());
});

// test('Should setup remove expense action object', () => {
//     const action = removeExpense({ id: '123abc' });
//     expect(action).toEqual({
//         type: "REMOVE_EXPENSE",
//         id: '123abc'
//     });
// });


test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'add note here' });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        updates: { note: 'add note here' }
    });
});

test('should edit expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    const updates = {

        // ...expenses[0],
        description: 'BubbleGum1'
    }
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`expenses/${action[0].id}`).once('value');
    }).then((snapshot) => {
        // expect(snapshot.val()).toEqual(updates);
        expect(snapshot.val().description).toEqual(updates.description);
        done();
    });
});


test('Should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpenses(expenseData)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense to defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpenses(expenseDefaults)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

test('test should set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    })

});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('test should remove expenses action object with data', () => {
    const action = removeExpense({ id: expenses[1].id });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    })

});


test('should remove expense to database and store', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    store.dispatch(startRemoveExpense(id)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

// test('Should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description : '',
//             note : '',
//             amount : 0,
//             createdAt : 0,
//             id: expect.any(String)
//         }
//     })
// });

// const add = (a, b) => a + b;
// const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

// test('Should add two numbers', () => {
//     const result = add(3, 4);
//     expect(result).toBe(7);

//     // if (result !== 7) {
//     //     throw new Error(`You Added 3 and 4 the result was ${result}. Expect 7`);
//     // }
// });


// test('Should Generate Greeting for name', () => {
//     const result = generateGreeting("Rudrik");
//     expect(result).toBe("Hello Rudrik!");
// });

// test('Should Generate Greeting for No name', () => {
//     const result = generateGreeting();
//     expect(result).toBe('Hello Anonymous!');
// });