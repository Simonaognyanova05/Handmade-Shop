import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts";
import Products from "./components/Products/Products";
import Details from "./components/Details/Details";
import CartPage from "./components/CartPage/CartPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CreateProduct from "./components/Create/Create";
import Logout from "./components/Logout";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
