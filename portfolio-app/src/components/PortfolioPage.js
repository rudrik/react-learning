import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
    return (<div>
        <div>This is my Add PortFolio List Page
    </div>
        <Link to="/portfolio/1">
            Go to Portfolio Item one
        </Link>
    </div>
    );

};

export default PortfolioPage;