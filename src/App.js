import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ButtonAppBar from "./components/ButtonAppBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrimarySearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ButtonAppBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
