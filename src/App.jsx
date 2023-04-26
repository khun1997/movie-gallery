import "./App.css";
import "../src/index.css";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import UpcomingLayout from "./layouts/UpcomingLayout";
import DetailLayout from "./layouts/DetailLayout";
import SearchLayout from "./layouts/SearchLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomeLayout />} path="/" />
        <Route element={<UpcomingLayout />} path="/upcoming" />
        <Route element={<DetailLayout />} path="/detail/:id" />
        <Route element={<SearchLayout />} path="/search/:title" />
      </Routes>
    </div>
  );
}

export default App;
