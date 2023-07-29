import "./App.css";
import EstateList from "./components/EstateList";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import Yeni from "./components/Yeni";
import MediaCard from "./components/MediaCard";


function App() {
  return (
    <div className="App">
      <EstateList />
      <Yeni />
      <PrimarySearchAppBar />
      <MediaCard />
    </div>
  );
}

export default App;
