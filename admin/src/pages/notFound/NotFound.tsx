import * as React from 'react';
import "./notFound.scss";

interface INotFoundProps {
}

const NotFound: React.FunctionComponent<INotFoundProps> = (props) => {
    return (
        <div className="not-found">
            <h1 className="not-found-title">404 Page Not Found</h1>
        </div>
    );
};

export default NotFound;
