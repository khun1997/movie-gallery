import "./App.css";
import "../src/index.css"
import BodyMovie from "./components/BodyMovie";
import HomeMovies from "./components/HomeMovies";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <HomeMovies/>
      <BodyMovie/>
    </div>
  );
}

export default App;
