import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    });
});

test('Should generate set text filter action object with text', () => {
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: 'rent'
    });
});

test('Should generate set text filter action object with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    });
});

test('Should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

test('Should generate sort by dete action object', () => {

    expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});