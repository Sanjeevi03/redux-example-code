import React from "react";
import { useSelector } from "react-redux";

function ShowForm() {
  const {data} = useSelector(state=>state.FormReducers)
  console.log("App",data);
  return (
    <>
      <div>ShowForm</div>
    </>
  );
}

export default ShowForm;
