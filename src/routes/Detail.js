import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {useEffect, useState} from 'react';
/*eslint-disable */
const Detail = (props) => {

  //보관함해체

  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [tab,setTab] = useState(0);
  let {id} = useParams();
  let products = props.shoes.find(function(x){
    return x.id == id
  })
  useEffect(()=>{
    //mount,update시 코드실행해줌 2번실행될 수 있음
    //html로딩후 계산부분이 실행돼서 더 빠르게 html을 보여줌
    //서버에서 데이터 가져오는 작업, 타이머 장착하는거
    setTimeout(()=>{
      setAlert(false);
    },2000)
  },[]) //이렇게입력하면 mount시 실행됨
  return(
  <div className="container">
      {
        alert == true ? 
        <div className="alert-warning">2초이내구매시할인</div> : null
      }
  <div className="row">
    <div className="col-md-6">
      <img src={`https://codingapple1.github.io/shop/shoes${products.id+1}.jpg`} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{products.title}</h4>
      <p>{products.content}</p>
      <p>{products.price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
  <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
  </Nav>
  <TabContent tab={tab}/>
</div>
  )
}
function TabContent({tab}){
  let [fade, setFade] = useState()
  useEffect(()=>{
    setTimeout(()=>{},1000)
    setFade('anime-end')
    return ()=>{
      setFade('')
    }
  },[tab])
  return (<div className={`anime-start ${fade}`}>
    {[<div>안녕</div>,<div>내용1</div>,<div>내용2</div>][tab]}
  </div>)
}


export default Detail;