import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {

    // const currentState = {
    //     text: '',
    //     startDate: undefined,
    //     endDate: undefined,
    //     sortBy: 'date'
    // };

    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE' };

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
})


test('should set text filter', () => {

    const text = 'filterText';
    const action = { type: 'SET_TEXT_FILTER', text }

    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        ...state,
        text: 'filterText'
    });

    expect(state.text).toBe(text);
});

// test('should set start Date filter', () => {

//     const action = { type: 'SET_START_DATE', startDate: moment().startOf('month') }

//     const state = filtersReducer(undefined, action);
//     expect(state).toEqual({
//         ...state,
//         startDate: moment().startOf('month')
//     });
// });

test('should set start Date filter', () => {

    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }

    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});


test('should set end Date filter', () => {

    const action = { type: 'SET_END_DATE', endDate: moment().startOf('month') }

    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        ...state,
        endDate: moment().startOf('month')
    });
});