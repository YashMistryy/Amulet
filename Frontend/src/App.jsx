import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./pages/Signin";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignInSide />} />
      </Routes>
    </>
  );
}

export default App;
