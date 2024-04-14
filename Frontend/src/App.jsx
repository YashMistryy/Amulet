import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./pages/Signin";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function App() {
  const [count, setCount] = useState(0);

  return (
    <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/" element={<Dashboard/>} />
      </Routes>
      </DndProvider>
  );
}

export default App;
