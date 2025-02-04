import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/main.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import CartProvider from "./context/CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Header />
          <Main />
          <Navbar isFooter={false} /> 
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
