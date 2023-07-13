/*eslint-disable */
import './App.css';
import {useState} from 'react';
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap';
import mainBg from './img/bg.png';
import data from './data.js';


function App() {

  let [shoes] = useState(data)
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
      {
        shoes.map((a,i)=>{
          return(
            <Product shoes={shoes} index={i} key={i}/>
          )
        })
      }
    </div>
  </div>
  
  </div>
)}

const Product= (props)=>{
  return(
    <div className='col-md-4'>
        <img src={`https://codingapple1.github.io/shop/shoes${props.index+1}.jpg`} width="80%"/>
        <h4>{props.shoes[props.index].title}</h4>
        <p>{props.shoes[props.index].content}</p>
        <p>{props.shoes[props.index].price}</p>
    </div>
  )
}
export default App;
