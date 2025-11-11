import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts";
import Products from "./components/Products/Products";
import Details from "./components/Details/Details";
import CartPage from "./components/CartPage/CartPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CreateProduct from "./components/Create/Create";
import Logout from "./components/Logout";
import Edit from "./components/Edit/Edit";
import Messages from "./components/Messages/Messages";
import ForgotPassword from "./components/ForgottenPass/ForgottenPass";
import CreateMovie from "./components/CreateMovie/CreateMovie";
import Movies from "./components/Movies/Movies";


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
        <Route path="/createMovie" element={<CreateMovie />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/forgottenPass" element={<ForgotPassword />} />




      </Routes>

      <Footer />
    </>
  );
}

export default App;
