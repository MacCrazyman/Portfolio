import {
  Badge,
  Container, Nav, Navbar,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Header = () => {
  const github = useSelector((state) => state.github);
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            Leonardo Pareja
            <Badge>
              {' '}
              {github.zen}
              {' '}
            </Badge>
            {' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Portfolio</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
