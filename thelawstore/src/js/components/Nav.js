import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../../css/components/nav.css';


export default function nav(props) {
    return (
        <div id="nav">
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="jobs"><h1>the law store</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="jobs"><h3>Jobs</h3></Nav.Link>
                            <Nav.Link href="admin"><h3>Admin</h3></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}
