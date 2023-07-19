import { configureStore,createSlice } from '@reduxjs/toolkit'

//state만듬
let user = createSlice({
  name: 'user',
  initialState : 'kim'
})

let stock = createSlice({
  name: 'stock',
  initialState : [10,11,12]
})


//등록
export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer
  }
})  