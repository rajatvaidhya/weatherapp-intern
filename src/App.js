import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/weather/:city" element={<Info />} />
          <Route exact path="/weather/:latitude/:longitude" element={<Info />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
