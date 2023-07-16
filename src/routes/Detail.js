import { useParams } from "react-router-dom";

import {useEffect, useState} from 'react';
/*eslint-disable */
const Detail = (props) => {

  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  
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
      <button onClick={()=>{count = count + 1; setCount(count)}}>버튼</button>
      <p>{count}</p>
      <img src={`https://codingapple1.github.io/shop/shoes${products.id}.jpg`} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{products.title}</h4>
      <p>{products.content}</p>
      <p>{products.price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div>
  )
}

export default Detail;