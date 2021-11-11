import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Layout = ({ children }) => {
    return (<div>

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">خانه </Nav.Link>
                    <Nav.Link href="#features">خانه 2</Nav.Link>
                    <Nav.Link href="#pricing">تماس با ما</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <div>{children}</div>
    </div>);
}


export default Layout;