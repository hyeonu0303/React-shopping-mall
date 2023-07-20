/*eslint-disable */
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { changeName, addAge } from "../store/userSlice";
import { changeCount } from "../store";

const Cart = (props) => {
  let state = useSelector((state)=>state)
  let items = useSelector((state)=>state.items);
  //0번째 버튼을 누르면 state의 0번째 상품을 + 1해주세요
  //0번째버튼을누르면
  //stateid와 비교한다음 번호같다면 + 1
  let [count, setCount] = useState();
  //

  useEffect(()=>{
    console.log(state);
  },[])
  //state변경 redux
  let dispatch = useDispatch()
  return(
    <div>
      <p>{state.user.name}</p>
      <p>{state.user.age}</p>
      <button onClick={()=>{
        //dispatch를 사용하면 비동기통신되고있는건가?
        dispatch(addAge(10))
      }}>버튼</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((a,i)=>
            <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td>
                  <button onClick={()=>{
                    dispatch(changeCount(i))
                  }}>+
                  </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table> 
    </div>
  )
}
export default Cart;