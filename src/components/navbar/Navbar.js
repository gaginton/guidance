import React from 'react';
// import Button from '@bit/react-bootstrap.react-bootstrap.button';
// import Form from '@bit/react-bootstrap.react-bootstrap.form';
// import FormControl from '@bit/react-bootstrap.react-bootstrap.form-control';
import Nav from '@bit/react-bootstrap.react-bootstrap.nav';
import Navbar from '@bit/react-bootstrap.react-bootstrap.navbar';
// import Dropdown from '@bit/react-bootstrap.react-bootstrap.dropdown';
// import DropdownButton from '@bit/react-bootstrap.react-bootstrap.dropdown-button';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

function NavbarComponent() {
    return (
        <Navbar collapseOnSelect style={{ minWidth: 700, background: "#DFA4C1", color: "white" }} animation="false" >
            <Navbar.Brand href="#home">GuySpace</Navbar.Brand>


            {/* <Dropdown  animation="false"> */}
            {/* <Dropdown.Toggle variant="success" id="dropdown-basic"  animation="false"> */}
            {/* Other Sites */}
            {/* </Dropdown.Toggle> */}

            {/* <Dropdown.Menu  animation="false"> */}
            {/* <Dropdown.Item href="#/action-1"  animation="false">Action</Dropdown.Item> */}

            {/* <DropdownButton className="dropdown-basic-button navbar-dropdown" title="Other Sites" animation="false"> */}
            {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
            <Nav className="mr-auto" >
                <Nav.Link href="https://kingchill.com/" target="_blank" rel="noopener noreferrer">King Chill</Nav.Link>
                <Nav.Link href="https://playlocal.games/" target="_blank" rel="noopener noreferrer">Recess</Nav.Link>
                <Nav.Link href="https://wordleydurdley.com/" target="_blank" rel="noopener noreferrer">Wordley Durdley</Nav.Link>
                <Nav.Link disabled>Try Me</Nav.Link>
                {/* <Nav.Link href="#timeline">Timeline</Nav.Link> */}
            </Nav>
            {/* </DropdownButton> */}
            {/* </Dropdown.Menu> */}
            {/* </Dropdown> */}

            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form> */}
        </Navbar>
    );
}

export default () => (<div><ReactBootstrapStyle /><NavbarComponent /></div>)  