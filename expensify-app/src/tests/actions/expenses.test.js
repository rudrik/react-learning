import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: '123abc'
    });
});


test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'add note here' });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        updates: { note: 'add note here' }
    });
});


test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        note: 'This was last month rent',
        amount: 30000,
        createdAt: 1000
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description : '',
            note : '',
            amount : 0,
            createdAt : 0,
            id: expect.any(String)
        }
    })
});

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