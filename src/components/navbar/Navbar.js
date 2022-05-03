import React from 'react';
import Button from '@bit/react-bootstrap.react-bootstrap.button';
import Form from '@bit/react-bootstrap.react-bootstrap.form';
import FormControl from '@bit/react-bootstrap.react-bootstrap.form-control';
import Nav from '@bit/react-bootstrap.react-bootstrap.nav';
import Navbar from '@bit/react-bootstrap.react-bootstrap.navbar';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" style={{ minWidth: 700 }}>
            <Navbar.Brand href="#home">GuySpace</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Current Sites</Nav.Link>
                <Nav.Link href="#pricing">Timeline</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default () => (<div><ReactBootstrapStyle /><NavbarComponent /></div>)  