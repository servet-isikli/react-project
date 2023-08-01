import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ButtonAppBar from "./components/ButtonAppBar";
import { DataProvider } from "./components/DataContext";
import MediaCardDetail from "./components/MediaCardDetail";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";


function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/estates/:postId" element={<MediaCardDetail />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
          <ButtonAppBar />
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
