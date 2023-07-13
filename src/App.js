/*eslint-disable */
import './App.css';
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap';
import mainBg from './img/bg.png'
function App() {
  return (
    <div className="App">
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div className='main-bg' style={{backgroundImage:`url(${mainBg})`}}></div>
  
  <div className='container'>
    <div className='row'>
      <div className='col-md-4'>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
      </div>
      <div className='col-md-4'>
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
      </div>
      <div className='col-md-4'>
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
      </div>
    </div>
  </div>
  
  </div>
)}

export default App;
