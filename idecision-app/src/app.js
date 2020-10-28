import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntex {
//     constructor() {
//         this.name = "Rudrik";
//         this.getGreetings = this.getGreetings.bind(this);
//     }
//     getGreetings() {
//         return `My name is ${this.name}`;
//     }
// }

// const oldSyntex = new OldSyntex();
// const getGreetings = oldSyntex.getGreetings;
// console.log(getGreetings());
// //--------------------

// class NewSyntex {
//     name = 'Patel'

//     getGreetings = () => {
//         return `My name is ${this.name}`;
//     }
// }

// const newSyntex = new NewSyntex();
// const newGetGreetings = newSyntex.getGreetings;
// console.log(newGetGreetings());