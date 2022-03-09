import React from "react";
import FormAppend from "./Components/FormAppend";
import ShowForm from "./Components/ShowForm"
import {Routes,Route} from 'react-router-dom';

function App() {  
  return (
    <>
      <Routes>
        <Route path='/' element={<FormAppend />}/>
        <Route path='/show' element={<ShowForm />}/>
      </Routes>
    </>
  );
}

export default App;
