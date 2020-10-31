import React from 'react';

const PortfolioInfoPage = (props) => {
    console.log(props);
    return (
        <div>
            Portfolio Page for {props.match.params.id}
        </div>
    );
};

export default PortfolioInfoPage;