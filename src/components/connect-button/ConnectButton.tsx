import React from 'react';
import { Button } from 'react-bootstrap';

function ConnectButton() {
    return (
        <div className="container space-evenly pad-bottom">
            <Button
                className="connect-btn"
                variant="outline-dark"
                size="lg"
                onClick={() => {
                    window.location.href = 'mailto:guyginton@gmail.com?subject=Hi Guy!&body=[Referred by guidancespace.com]';
                }}
            >
                Email Me
            </Button>
            <Button
                className="connect-btn"
                variant="outline-dark"
                size="lg"
                onClick={() => {
                    window.open('https://www.linkedin.com/in/guyginton/', '_blank');
                }}
            >
                LinkedIn
            </Button>
        </div>
    );
}

export default ConnectButton;
