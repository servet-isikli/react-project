import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ButtonAppBar from "./components/ButtonAppBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
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
