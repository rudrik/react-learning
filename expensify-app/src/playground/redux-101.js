import { createStore } from 'redux';

// Action Generator- functions that return action objects

// const add = ({ a, b }, c) => {
//     return a + b + c;
// }

// console.log(add({ a: 1, b: 2 }, 100));

// We have user object destructuring to get incrementby. Set 1 if not provided. Default will be blank object when incrementby not passed
// If object not provided then destucturing will  not work as there is no object to desstrure to. So we have defined {} by default. So if not passed it will destructure that and set dafault to 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy //or incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});


//Reducer 
//1. Reducers are pure functions. Output is only determined by input
//2. Never change state or action 

// // Not a pure function
// let a = 10;
// const add = (b) => {
//     return a + b;
// }
// let result;
// const add = (a, b) => {
//     result = a + b;
// }

// //Pure Function
// const add = (a, b) => {
//     return a + b;
// }
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions- than an object that gets sent to the store

//// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());
// unsubscribe();

// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount());
// store.dispatch({
//     type: 'DECREMENT'
// });
// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount({ count: 101 }));
store.dispatch(setCount());


// I'd like to reset the count to zero