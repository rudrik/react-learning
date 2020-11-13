
import expenses from "../tests/fixtures/expenses";


export default (expenses) => {

    return expenses.
        map((expense) => expense.amount)
        .reduce((total, currentVal) => total + currentVal, 0);

    // if (expenses.length === 0) {
    //     return 0;
    // } else {
    //     // let expensesTotal = 0;
    //     // expenses.map((expense) => {
    //     //     expensesTotal += expense.amount;
    //     // });
    //     // return expensesTotal;

    //     // expenses.reduce((accu, expense) => {
    //     //     return accu + expense.amount;
    //     // });
    //     // const arra = [3, 4, 5, 6];
    //     // return arra.reduce((total, currentVal) => total + currentVal);
    //     return expenses.map((expense) => expense.amount).reduce((total, currentVal) => total + currentVal, 0);

    // }


    // expenses.reduce((accu, currValue) => {
    // return accu + currValue;
    // });


};