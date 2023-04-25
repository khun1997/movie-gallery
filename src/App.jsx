import "./App.css";
import "../src/index.css";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import UpcomingLayout from "./layouts/UpcomingLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomeLayout />} path="/" />
        <Route element={<UpcomingLayout />} path="/upcoming" />
      </Routes>
    </div>
  );
}

export default App;
