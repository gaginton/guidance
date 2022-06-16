import React from 'react';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import { Nav, Navbar, Dropdown, DropdownButton, } from 'react-bootstrap';

function NavbarComponent() {
    return (
        <Navbar collapseOnSelect style={{ background: "#DFA4C1", color: "white" }} animation="false" fixed={'top'} >
            <Navbar.Brand href="#home">GuySpace</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

                <Nav className="mr-auto" >
                    <DropdownButton variant="info" id="dropdown-basic" title="Projects" >
                        <Dropdown.Item href="https://kingchill.com/" target="_blank" rel="noopener noreferrer">King Chill</Dropdown.Item>
                        <Dropdown.Item href="https://wordleydurdley.com/" target="_blank" rel="noopener noreferrer">Wordley Durdley</Dropdown.Item>
                        <Dropdown.Item href="https://playlocal.games/" target="_blank" rel="noopener noreferrer">Recess</Dropdown.Item>
                        <Dropdown.Item disabled>Try Me</Dropdown.Item>
                        {/* <Dropdown.Item href="#timeline">Timeline</Dropdown.Item> */}
                    </DropdownButton>
                </Nav>
            </Navbar.Collapse>
            <div className="d-flex">
                <Navbar.Text>
                    <a
                        href="https://www.linkedin.com/in/guyginton/"
                        className='text-info bold'
                    >
                        LinkedIn
                    </a>
                </Navbar.Text>
            </div>
        </Navbar >
    );
}

export default () => (<div><ReactBootstrapStyle /><NavbarComponent /></div>)  
// export default NavbarComponent;