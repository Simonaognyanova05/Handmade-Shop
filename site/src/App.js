import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Products from "./components/Products";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
