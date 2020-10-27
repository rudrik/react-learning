import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

class IndecisionApp extends React.Component {

    state = {
        options: []
    }

    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handleWhatShouldIDo = this.handleWhatShouldIDo.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: []
    //     }
    // }

    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleWhatShouldIDo = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randNum])
    }

    handleAddOption = (option) => {
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
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    };
}

// IndecisionApp.defaultProps = {
//     options: []
// }

Header.defaultProps = {
    title: 'Indecision'
}

export default IndecisionApp;