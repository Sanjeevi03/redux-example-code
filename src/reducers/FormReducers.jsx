const initialValue={
   data:[]
}
function FormReducers(state=initialValue,action) {
  switch(action.type){
     case "ADD":
        return {...state,data:[...state.data,action.payload]};
      default:
         return state;
  }
}

export default FormReducers