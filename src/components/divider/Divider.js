import React from 'react';

const Divider = ({ children }) => {
    return (
        <div className="container">
            <div className="border" />
            <span className="divider-text">
                {children}
            </span>
            <div className="border" />
        </div>
    );
};

export default Divider;


