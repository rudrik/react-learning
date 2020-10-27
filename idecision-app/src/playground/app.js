class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleWhatShouldIDo = this.handleWhatShouldIDo.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options)
                this.setState(() => ({ options: options }))
        } catch (e) {
            // Do Nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('ComponentWillUnMount');
    }
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleWhatShouldIDo() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randNum])
    }

    handleAddOption(option) {
        if (!option.trim()) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        // this.setState((prevState) => {
        //     // prevState.options.push(option);
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // })

        this.setState((prevState) =>
            ({ options: prevState.options.concat(option) })
        );

    }
    render() {
        const subTitle = 'Put your life in the hands of a computer!';

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action hasOption={this.state.options.length > 0}
                    handleWhatShouldIDo={this.handleWhatShouldIDo}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    };
}

// IndecisionApp.defaultProps = {
//     options: []
// }

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handleWhatShouldIDo} disabled={!props.hasOption}>
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {props.options.map((option) => (
                <Option
                    key={option}
                    option={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}

        </div>
    );
}


const Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={(e) => {
                props.handleDeleteOption(props.option);
            }}
            >
                Remove
            </button>
        </div>

    );
};

class AddOptions extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return {
        //         error: error
        //     };
        // });

        this.setState(() => ({ error: error }));

        if (!error)
            e.target.elements.option.value = ''
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


//*****************
// If we put parentheses () in the arrow function it will implicitly return it without using the return
//**************

// const User = () => {
//     return (
//         <div>
//             <p>Name: </p>
//             <p>Age: </p>
//         </div>
//     );
// };

// class Option extends React.Component {
//     render() {
//         return (
//             <li>{this.props.option}</li>
//         );
//     }
// }

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <ol>
//                     {this.props.options.map((option) => {
//                         return <Option key={option} option={option} />
//                     })}
//                 </ol>
//             </div>
//         );
//     }
// }

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleWhatShouldIDo} disabled={!this.props.hasOption}>
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }