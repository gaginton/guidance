import React from 'react';
import { Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';

function NavbarComponent() {
    return (
        <Navbar collapseOnSelect style={{ background: "#DFA4C1", color: "white" }} fixed="top">
            <Navbar.Brand href="#home">GuySpace</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

                <Nav className="mr-auto">
                    <DropdownButton variant="info" id="dropdown-basic" title="Projects">
                        <Dropdown.Item href="https://tryme.games/" target="_blank" rel="noopener noreferrer">Try Me!</Dropdown.Item>
                        <Dropdown.Item href="https://kingchill.com/" target="_blank" rel="noopener noreferrer">King Chill</Dropdown.Item>
                        <Dropdown.Item href="https://wordleydurdley.com/" target="_blank" rel="noopener noreferrer">Wordley Durdley</Dropdown.Item>
                        <Dropdown.Item href="https://playlocal.games/" target="_blank" rel="noopener noreferrer">Recess</Dropdown.Item>
                    </DropdownButton>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;
