/*eslint-disable */
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
const Cart = (props) => {
  let user = useSelector((state)=>state.user)
  console.log(user)
  return(
    <div>
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
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart;