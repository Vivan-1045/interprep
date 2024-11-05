import "./App.css";
import Footer from "./components/footer/footer"
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
