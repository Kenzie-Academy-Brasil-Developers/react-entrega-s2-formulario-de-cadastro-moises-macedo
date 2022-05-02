import Form from "./Components/Form";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from 'react-router-dom';
import Welcome from "./Components/Welcome";
import { useState } from "react";

function App() {

  const [addName, setAddName] = useState("");

  return (
    <>
      <Routes>
        <Route exact path={"/"} element={<Form addName={setAddName} />} />
        <Route path={"/welcome"} element={<Welcome addName={addName} />} />
      </Routes>
      <ToastContainer />

    </>
  );
}

export default App;
