/*eslint-disable */
import { useParams } from "react-router-dom";
import {memo, useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { changeName, addAge } from "../store/userSlice";
import { changeCount } from "../store";


const Child = memo(
  ()=>{
    console.log('재랜더링')
    return <div>자식임</div>
  }
)

const Cart = (props) => {
  let state = useSelector((state)=>state)
  let items = useSelector((state)=>state.items);
  let [count, setCount] = useState(0)
  useEffect(()=>{
    console.log(state);
  },[])
  //state변경 redux
  let dispatch = useDispatch()
  return(
    <div>
      <Child></Child>
      <button onClick={()=>{setCount(count+1)}}>+</button>
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