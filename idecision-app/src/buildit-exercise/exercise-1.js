class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (

            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>Hey, These are some details you can see now.!</p>}
            </div>
        );


    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//     title: 'Visibility Toggle'
// };

// const onFormSubmit = (e) => {
//     e.preventDefault();

//     const option = e.target.elements.option.value;

//     if (option) {
//         app.options.push(option);
//         e.target.elements.option.value = '';
//         render();
//     }
// };

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }
// let visibility = false;
// const appRoot = document.getElementById('app');
// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>{visibility?'Hide Details':'Show Details'}</button>
//             {/* <p style={{ visibility: visibility ? 'visible' : 'hidden' }}>This is the Details </p> */}
//             {visibility && <p>Hey, These are some details you can see now!</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// render();
