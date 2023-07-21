/*eslint-disable */
import "./App.css";
import { lazy, Suspense, createContext, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import mainBg from "./img/bg.png";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
// import Detail from "./routes/Detail";
// import Cart from './routes/Cart';

const Detail = lazy(()=> import ('./routes/Detail.js'));
const Cart = lazy(()=> import ('./routes/Cart.js'));

//contextAPI

let Context1 = createContext()



function App() {
  let [moreData, setMoreData] = useState();
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(2);
  let [재고] = useState([10,11,12])
  //hook: 유용한 것들이 들어잇는 함수
  //페이지 이동도와주는함수
  let navigate = useNavigate();

  // axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{a.data})
  let result = useQuery('작명',()=>{
    return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>a.data)
  })


  return (
    <div className="App container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* -1하면 뒤로가짐 */}
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail");
                }}
              >
                Cart
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/event");
                }}
              >
                Event
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: `url(${mainBg})` }}
              ></div>

              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Product shoes={shoes} index={i} key={i} />;
                  })}
                </div>
                <button
                  onClick={(e) => {
                    axios
                      .get(
                        `https://codingapple1.github.io/shop/data${count}.json`
                      )
                      .then((result) => {
                        moreData = result.data;
                        console.log(result.data);
                        let combine = shoes.concat(moreData);
                        setShoes(combine);
                      })
                      .catch((error) => {
                        console.log("error", error.message);
                      });

                    //2개이상 요청할때 쓰기좋음 2개다 성공하면 실행해줌
                    // Promise.all([axios.get('/url1'),axios.get('/url2')].then(()=>{}))
                    // axios.post("/data", { name: kim });
                  }}
                >
                  전송
                </button>
              </div>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes}}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        {/* 이벤트페이지 */}
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        {/* 
    Nestes Routes 
    상위안에 하위를 넣어서보여줌 <Outlet></Outlet>과같이써야함
  */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>}></Route>
          <Route path="location" element={<About />}></Route>
        </Route>

        {/* 404page
  <Route path="*" element={<div>없는페이지</div>}/>*/}
        <Route path="/cart" element={<Cart/>}></Route>
  
      </Routes>
      </Suspense>
    </div>
  );
}
const About = (props) => {
  return (
    <div>
      회사정보
      <Outlet></Outlet>
    </div>
  );
};
const Event = (props) => {
  return (
    <div>
      오늘의이벤트
      <Outlet></Outlet>
    </div>
  );
};
const Product = (props) => {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`}
        width="80%"
      />
      <h4>{props.shoes[props.index].title}</h4>
      <p>{props.shoes[props.index].content}</p>
      <p>{props.shoes[props.index].price}</p>
    </div>
  );
};
//상세페이지 컴포넌트
export default App;
