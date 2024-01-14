import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Add from "./Pages/Add/Add";
import Detail from "./Pages/Detail/Detail";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
