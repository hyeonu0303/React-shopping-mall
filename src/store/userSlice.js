import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState : {name : 'kim', age : 20},
  reducers:{
    //!state변경함수를 다 action이라함
    changeName(state){
      // object바꾸는법
      //return {name:'park', age: 21}
      state.name = 'park'
      //return 'john' + state
    },
    addAge(state,action){
      state.age += action.payload
    }
  }
})
export let {changeName,addAge} = user.actions

export default user;
