import React from 'react';

type DividerProps = {
    children: React.ReactNode;
};

function Divider({ children }: DividerProps) {
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
