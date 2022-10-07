import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Detail from "./routes/Detail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route excat path="/" element={<ItemListContainer />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route
            exact
            path="/categoria/:categoryId"
            element={<ItemListContainer />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
