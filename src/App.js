import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './App.css'
import Reports from "./pages/Reports";
import Products from "./pages/Products";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
