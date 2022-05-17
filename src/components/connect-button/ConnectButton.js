import React from 'react';
import { Button } from 'react-bootstrap';

function ConnectButton() {
    return (
        <div className="container space-evenly">
            <Button
                className="connect-btn"
                variant="outline-dark"
                size="lg"
                onClick={
                    () => window.location = 'mailto:guyginton@gmail.com?subject=Hi Guy!&body=[Referred by guidancespace.com]'
                }
            >
                Email Me
            </Button>
        </div>
    );
}

export default ConnectButton;
