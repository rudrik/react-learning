// Higher Order Component(HOC)- A component(HOC) that renders another component
// Reuse code
// Render hijacking
// prop manipulation
// Abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private Info. Please don't share!</p>}
            <WrapperComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrapperComponent {...props} /> : (
                <p>Please login to view</p>
            )}

        </div>
    );
};



const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info='There are the details' />, document.getElementById('app'));