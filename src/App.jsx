import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Product from "./Components/Product/index";
import Footer from "./Components/Footer/Index";
import Navbar from "./Components/Navbar/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <Footer />
    </>
  );
}

export default App;
