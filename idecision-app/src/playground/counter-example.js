class Counter extends React.Component {


    constructor(props) {
        super(props);
        console.log(props.countExtra);
        console.log(props.count);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const strCount = localStorage.getItem('count');
            const count = parseInt(strCount, 10);
            if (!isNaN(count))
                this.setState(() => ({ count: count }))
        } catch (e) {

        }
    }

    componentDidUpdate(prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }


    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })

        // this.setState({
        //     count: 0
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}> +1 </button>
                <button onClick={this.handleMinusOne}> -1 </button>
                <button onClick={this.handleReset}> Reset </button>
            </div>
        );
    };
}

// Counter.defaultProps = {
//     count: 0,
//     countExtra: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app')); //count={2} countExtra={3} 



// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const resetVal = () => {
//     count = 0;
//     renderCounterApp();
// }




// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>Plus One</button>
//             <button onClick={minusOne}>Minus One</button>
//             <button onClick={resetVal}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();





// const user = {
//     name: 'Rudrik Patel',
//     age: 31,
//     locaion: 'Ahmedabad'
// };

// const getLocation = (location) => {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// };
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.locaion)}
//     </div>
// );
// // var template = React.createElement("p", { id: "someid" }, "This is JSX from App.js");
