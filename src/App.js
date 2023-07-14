/*eslint-disable */
import './App.css';
import {useState} from 'react';
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap';
import mainBg from './img/bg.png';
import data from './data.js';
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  let [shoes] = useState(data)
  return (
    <div className="App container">
      
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Shop</Navbar.Brand>
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
  <Link to="/">홈</Link>
  <Link to="/detail">상세페이지</Link>
  <Routes>
    <Route path="/" element={
    <>
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
    </>
  }/>
  </Routes>
  <Routes>
  <Route path="/detail" element={
    <>
      <Detail shoes={shoes[0]} i={1}/>
      <Detail shoes={shoes[1]} i={2}/>
      <Detail shoes={shoes[2]} i={3}/>
    </>
    } 
  />
  </Routes>
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
//상세페이지 컴포넌트
const Detail = (props) => {
  return(
  <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
  )
}
export default App;
