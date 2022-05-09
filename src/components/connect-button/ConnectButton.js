import React from 'react';
import Button from '@bit/react-bootstrap.react-bootstrap.button';

function ConnectButton() {
    return (
        <div className="container space-evenly">
            <Button
                class="connect-btn"
                variant="outline-dark"
                size="lg"
                onClick={
                    () => window.location = 'mailto:guyginton@gmail.com?subject=Hi Guy!&body=I clicked the button on guidancespace.com'
                }
            >
                Email Me
            </Button>
        </div>
    );
}

export default ConnectButton;
