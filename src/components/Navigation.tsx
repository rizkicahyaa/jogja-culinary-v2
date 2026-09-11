import "../App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Navigation() {
    return (
        <Navbar expand="lg" className="culinary-navbar">
            <Container>
                <Navbar.Brand href="/" className="brand">
                    Jogja Culinary
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="mx-auto culinary-menu">
                        <Nav.Link href="#home" className="active">
                            Home
                        </Nav.Link>

                        <Nav.Link href="#kuliner">Kuliner</Nav.Link>

                        <Nav.Link href="#rekomendasi">Rekomendasi</Nav.Link>

                        <Nav.Link href="#about">Tentang</Nav.Link>
                    </Nav>

                    <div className="navbar-actions">
                        <Button variant="light" className="search-btn">
                            <i className="bi bi-search"></i>
                        </Button>

                        <Button className="login-btn">Login</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
